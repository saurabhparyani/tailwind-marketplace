import Link from "next/link";
import { ProductRow } from "./components/ProductRow";

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
      <div className="max-w-3xl mx-auto text-2xl sm:text-5xl lg:text-6xl font-semibold text-center">
        <h1>
          <span>Your marketplace for all things </span>
          <Link
            href="https://tailwindcss.com"
            target="_blank"
            className="underline underline-offset-8 text-primary"
          >
            Tailwind
          </Link>
        </h1>
        <p className="lg:text-xl text-muted-foreground mx-auto mt-5 w-[90%] font-normal text-base">
          Find the perfect Tailwind templates, UI kits, and icons to accelerate
          your development and create stunning web experiences.
        </p>
      </div>
      <ProductRow category="newest" />
      <ProductRow category="templates" />
      <ProductRow category="icons" />
      <ProductRow category="uikits" />
    </section>
  );
}
