# Tailwind Marketplace: A digital marketplace for buying and selling TailwindCSS templates, UI kits and icons!

![Tailwind Marketplace homepage](https://github.com/saurabhparyani/tailwind-marketplace/assets/52228485/4a8e3fb6-9628-4674-adc7-cf0b4c1b9899)


## Features/Stack

* 🌐 **Next.js App Router**: Utilizes **Next.js** for **server-side rendering** and **static site generation**, providing a robust routing system.
* 🔐 **Kinde Authentication**: Implements **Kinde Auth** for **secure authentication**, ensuring user data protection, **supporting passwordless authentication** for a seamless and secure login experience and **integrates OAuth** for easy login using **Google** and **GitHub** accounts.
* 💰 **Payments using Stripe**: Facilitates **secure payments** through **Stripe**, handling transactions efficiently and uses **Stripe webhooks** to handle events like **account updates** and **checkout sessions**.
* 🏪 **Marketplace Functionality using Stripe Connect**: Enables **marketplace features** with **Stripe Connect**, allowing **users to buy and sell products**.
* 💿 **Supabase Database**: Leverages **Supabase** for a scalable and secure database solution.
* 💨 **Prisma ORM**: Utilizes **Prisma ORM** for seamless database interactions and migrations.
* ✅ **Server Validation using Zod**: Ensures data integrity with server-side validation using **Zod**.
* ✍️ **Rich Text Editing with TipTap Editor**: Implements **TipTap Editor** on the **sell product page** for detailed product descriptions, supporting **rich text features** like **bold** and **italics**.
* 🗂️ **File Upload with Uploadthing**: Provides **file upload** capabilities using the **Uploadthing** library.
* 🎨 **Styling with Tailwindcss and Shadcn UI**: Implements **Tailwind CSS** and **Shadcn UI** for modern and responsive design.
* 📧 **Sending Emails with Resend**: Sends **transactional emails** using the **Resend** library and the **React-Email** library to **design visually appealing emails**.
* 🚀 **React Streaming**: **Enhances performance** with **faster page loads** and progressive content rendering, leveraging features like **Suspense** for efficient asynchronous data handling.

## Try it on your own

https://tailwind-marketplace.saurabhparyani.dev/

### Buy a Product
* Buying a product is simple on Tailwind Marketplace. Simply click on a Product, then click on the Buy Product.
* You will be directed to a Stripe checkout page where you can enter the below test credentials:
* **Email**: Enter the **email address** that you **wish to receive the product in**. This is **important** because the product will be sent to this email only.
* **Card**: 4242 4242 4242 4242. **MM/YY**: 04/42. **CVV**: 424 [This are the test card details. Do not worry, you will not be paid]
* **Cardholder Name**: This does not matter what you put because Stripe is in test mode.
  
![checkout page](https://github.com/saurabhparyani/tailwind-marketplace/assets/52228485/4941a025-32c0-4546-a386-50a84f7fd477)


* When you click on Pay, you will be directed to a success page. Currently, the product bought is being sent to my personal email, and the functionality of sending the email to the user is a WIP.
* Similarly, if you click on the back button, you will be directed to a cancel page. 

### Sell a product
* Selling a product requires you to sign up as a user.
* Once signed up, you need to first **link your account to Stripe.** This takes you to the Stripe Connect dashboard. The following are the details you can put:
* **Email**: "Email is not needed in test mode". **Mobile Number**: You can click on "**the test phone number** which is US 0000000000.
* **Verification Code**: **000 000**
* **Country: United States** **Type of Business: Individual**. Click on Continue.
* **Legal first name, last name**: You can put your first and last names. Do not worry, since it's in dev mode, nothing really is a big deal. **Your website**: You can just add a **www.github.com**
* **Select an account for payouts**: **Test Institution**. Agree and Continue. Connect Accounts.
* **Save Account with Link**: It shows the email address you signed up with, and asks for a US number. Ignore the number and click on "**Not Now**". 
* **Select an account for payouts**: Shows a list of linked accounts. You can ignore them as they are all test banks. Click on Continue.
* **Review and Submit**: **Agree and Submit**
* Now you would get an "Account onboarded" followed by a success page saying "Linking was Successful"
* Click on your **nav-bar on the top right** and click on **Sell a Product** again.
* This gives you a complete Dashboard allowing you to sell a product.
* Once you create your product, you can see it on the homepage! 


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
