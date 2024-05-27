"use server"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { z } from "zod"
import prisma from "./lib/db";
import { type CategoryTypes } from "@prisma/client";
import { stripe } from "./lib/stripe";
import { redirect } from "next/navigation";

export type State = {
    status: 'error' | 'success' | undefined
    errors?: {
        [key: string]: string[]
    } 
    message?: string | null 
}

const productSchema = z.object({
    name: z.string().min(3, {message: 'Name has to be minimum 3 characters'}),
    smallDescription: z.string().min(10, {message: 'Summarize your product more'}),
    description: z.string().min(10, {message: 'Description is required'}),
    price: z.number().min(1, {message: 'Price has to be larger than 1'}),
    images: z.array(z.string(), {message: 'Images are required'}),
    category: z.string().min(1,{message: 'Category is required'} ),
    productFile: z
    .string()
    .min(1, { message: "Pleaes upload a zip of your product" }),
})

const userSettingSchema = z.object({
    firstName: z.string().min(3, {message: 'Name has to be minimum 3 characters'}).or(z.literal("")).optional(),
    lastName: z.string().min(3, {message: 'Name has to be minimum 3 characters'}).or(z.literal("")).optional(),
})

export async function SellProduct(prevState: any, formData: FormData){
    const {getUser} = getKindeServerSession()
    const user = await getUser()

    if(!user) {
        throw new Error('Something went wrong')
    }

    const validateFields = productSchema.safeParse({
        name: formData.get("name"),
        category: formData.get("category"),
        smallDescription: formData.get("smallDescription"),
        description: formData.get("description"),
        price: Number(formData.get("price")),
        images: JSON.parse(formData.get("images") as string),
        productFile: formData.get("productFile"),

    })

    if(!validateFields.success){
        const state:State = {
            status: 'error',
            errors: validateFields.error.flatten().fieldErrors,
            message: 'Oops, there may be a mistake with your inputs'
        }

        return state;
    }

    const data = await prisma.product.create({
        data: {
            name: validateFields.data.name,
            category: validateFields.data.category as CategoryTypes,
            smallDescription: validateFields.data.smallDescription,
            description: JSON.parse(validateFields.data.description),
            price: validateFields.data.price,
            images: validateFields.data.images,
            productFile: validateFields.data.productFile,
            userId: user.id
        }
    })

    return redirect(`/product/${data.id}`)
}


export async function UpdateUserSettings(prevState:any ,formData: FormData) {
    const {getUser} = getKindeServerSession();
    const user = await getUser();

    if(!user) throw new Error('Something went wrong')

    const validateFields = userSettingSchema.safeParse({
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
    })

    if(!validateFields.success){
        const state:State = {
            status: 'error',
            errors: validateFields.error.flatten().fieldErrors,
            message: 'Oops, there may be a mistake with your inputs'
        }

        return state;
    }


    await prisma.user.update({
        where: {
            id: user.id
        },
        data: {
            firstName: validateFields.data.firstName,
            lastName: validateFields.data.lastName,
        }
    })

    const state:State = {
        status: 'success',
        message: 'User settings updated!'
    }

    return state
}

export async function BuyProduct(formData: FormData) {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user) throw new Error('Unauthorized');

    const id = formData.get("id") as string;
    const data = await prisma.product.findUnique({
        where: {
            id: id,
        },
        select: {
            name: true,
            smallDescription: true,
            price: true,
            images: true,
            productFile: true,
            User: {
                select: {
                    connectedAccountId: true
                }
            }
        }
    })

    console.log('User creating session:', user);

    const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        line_items: [
            {
                price_data: {
                    currency: 'inr',
                    unit_amount: Math.round((data?.price as number) * 100),
                    product_data: {
                        name: data?.name as string,
                        images: data?.images,
                        description: data?.smallDescription,
                    }
                },
                quantity: 1,
            }
        ],
        metadata: {
            link: data?.productFile as string,
            userId: user.id
          },
        payment_intent_data: {
            application_fee_amount: (Math.round((data?.price as number) * 100)) * 0.1,
            transfer_data: {
                destination: data?.User?.connectedAccountId as string,
            }
        },

        success_url: process.env.NODE_ENV === 'development' ? 'http://localhost:3000/payment/success' : 'https://tailwind-marketplace.saurabhparyani.dev/payment/success',
        cancel_url: process.env.NODE_ENV === 'development' ? 'http://localhost:3000/payment/cancel' : 'https://tailwind-marketplace.saurabhparyani.dev/payment/cancel'
    })

    console.log('Created Stripe session:', session);

    return redirect(session.url as string)
}


export async function createStripeAccountLink() {
    const {getUser} = getKindeServerSession()
    const user = await getUser()

    if(!user) throw new Error('Unauthorized')
    
    const data = await prisma.user.findUnique({
        where: {
            id: user.id
        }, 
        select: {
            connectedAccountId: true
        }
    })

    const accountLink = await stripe.accountLinks.create({
        account: data?.connectedAccountId as string,
        refresh_url: process.env.NODE_ENV === 'development' ?  `http://localhost:3000/billing` : 'https://tailwind-marketplace.saurabhparyani.dev/billing',
        return_url: process.env.NODE_ENV === 'development' ? `http://localhost:3000/return/${data?.connectedAccountId}` : `https://tailwind-marketplace.saurabhparyani.dev/return/${data?.connectedAccountId}`,
        type: 'account_onboarding',
    })

    return redirect(accountLink.url)
    
}

export async function GetStripeDashboardLink() {
    const {getUser} = getKindeServerSession()
    const user = await getUser();

    if(!user) throw new Error('Unauthorized')
    
    const data = await prisma.user.findUnique({
        where: {
            id: user.id
        },
        select: {
            connectedAccountId: true
        }
    })

    const loginLink = await stripe.accounts.createLoginLink(data?.connectedAccountId as string)

    return redirect(loginLink.url)
}