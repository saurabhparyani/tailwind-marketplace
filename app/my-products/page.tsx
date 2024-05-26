import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "../lib/db";
import { ProductCard } from "../components/ProductCard";

async function getData(userId: string) {
  const data = await prisma.product.findMany({
    where: {
      userId: userId,
    },
    select: {
      name: true,
      images: true,
      price: true,
      smallDescription: true,
      id: true,
    },
  });

  return data;
}

export default async function MyProductsRoute() {
  const { getUser } = await getKindeServerSession();
  const user = await getUser();

  if (!user) throw new Error("Unauthorized");

  const data = await getData(user.id);

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8">
      <h1 className="font-bold text-3xl">My Products</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 sm:grid-cols-2 mt-4">
        {data.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            images={item.images}
            name={item.name}
            price={item.price}
            smallDescription={item.smallDescription}
          />
        ))}
      </div>
    </section>
  );
}
