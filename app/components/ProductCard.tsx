import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import Link from "next/link";

interface iAppProps {
  images: string[];
  name: string;
  price: number;
  smallDescription: string;
  id: string;
}

export function ProductCard({
  images,
  name,
  price,
  smallDescription,
  id,
}: iAppProps) {
  return (
    <div className="rounded-lg">
      <Carousel className="w-full mx-auto">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[230px]">
                <Image
                  alt="Product image"
                  src={image}
                  fill
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-16" />
        <CarouselNext className="mr-16" />
      </Carousel>

      <div className="flex justify-between items-center mt-2">
        <h1 className="font-semibold text-xl">{name}</h1>
        <h3 className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 font-bold text-primary ring-1 ring-inset ring-primary/10">
          ₹{price}
        </h3>
      </div>
      <p className="font-medium text-base line-clamp-2 text-gray-500 mt-2">
        {smallDescription}
      </p>
      <Button asChild className="w-full mt-5 font-medium text-base">
        <Link href={`/product/${id}`}>Learn More</Link>
      </Button>
    </div>
  );
}

export function LoadingProductCard() {
  return (
    <div className="flex flex-col">
      <Skeleton className="w-full h-[230px]" />
      <div className="flex flex-col mt-2 gap-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-6 w-full" />
      </div>
      <Skeleton className="h-10 mt-5 w-full" />
    </div>
  );
}
