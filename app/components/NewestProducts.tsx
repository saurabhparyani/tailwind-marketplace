import Link from "next/link";
import prisma from "../lib/db";
import { ProductCard } from "./ProductCard";

async function getData() {
  const data = await prisma.product.findMany({
    select: {
      price: true,
      smallDescription: true,
      name: true,
      category: true,
      images: true,
      id: true,
    },
    take: 4,
    orderBy: { createdAt: "desc" },
  });

  return data;
}

export async function NewestProducts() {
  const data = await getData();

  return (
    <section className="mt-12">
      <div className="md:flex md:items-center md:justify-between">
        <h2 className="text-2xl font-extrabold">Newest Products</h2>
        <Link
          href="#"
          className="hidden font-semibold text-primary hover:text-primary/90 md:block"
        >
          All Products <span>&rarr;</span>
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 mt-4 gap-10">
        {data.map((product) => (
          <ProductCard
            id={product.id}
            name={product.name}
            price={product.price}
            smallDescription={product.smallDescription}
            images={product.images}
            key={product.id}
          />
        ))}
      </div>
    </section>
  );
}
