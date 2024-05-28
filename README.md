# Tailwind Marketplace: A digital marketplace for buying and selling TailwindCSS templates, UI kits and icons!

## Features/Stack

* 🌐 **Next.js App Router**: Utilizes **Next.js** for **server-side rendering** and **static site generation**, providing a robust routing system.
* 🔐 **Kinde Authentication**: Implements **Kinde Auth** for **secure authentication**, ensuring user data protection, **supporting passwordless authentication** for a seamless and secure login experience and **integrates OAuth** for easy login using **Google** and **GitHub** accounts.
* 💰 **Payments using Stripe**: Facilitates **secure payments** through **Stripe**, handling transactions efficiently and uses **Stripe webhooks** to handle events like **account updates** and **checkout sessions**.
* 🏪 **Marketplace Functionality using Stripe Connect**: Enables **marketplace features** with **Stripe Connect**, allowing **users to buy and sell products**.
* 💿 **Supabase Database**: Leverages **Supabase** for a scalable and secure database solution.
* 💨 **Prisma ORM**: Utilizes **Prisma ORM** for seamless database interactions and migrations.
* ✅ **Server Validation using Zod**: Ensures data integrity with server-side validation using **Zod**.
* 🗂️ **File Upload with Uploadthing**: Provides **file upload** capabilities using the **Uploadthing** library.
* 🎨 **Styling with Tailwindcss and Shadcn UI**: Implements **Tailwind CSS** and **Shadcn UI** for modern and responsive design.
* 📧 **Sending Emails with Resend**: Sends **transactional emails** using the **Resend** library and the **React-Email** library to **design visually appealing emails**.
* 🚀 **React Streaming**: **Enhances performance** with **faster page loads** and progressive content rendering, leveraging features like **Suspense** for efficient asynchronous data handling.

## Try it on your own
### Buy a Product
* Buying a product is simple on Tailwind Marketplace. Simply click on a Product, then click on the Buy Product.
* You will be directed to a Stripe checkout page where you can enter the below test credentials:
















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
