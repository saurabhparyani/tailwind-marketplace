"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

export function Submitbutton({ title }: { title: string }) {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button className="font-semibold text-lg" disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait...
        </Button>
      ) : (
        <Button className="font-semibold text-lg" type="submit">
          {title}
        </Button>
      )}
    </>
  );
}

export function BuyButton({ price }: { price: number }) {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button
          className="w-full mt-10 font-semibold text-lg"
          disabled
          size="lg"
        >
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait...
        </Button>
      ) : (
        <Button
          type="submit"
          size={"lg"}
          className="w-full font-semibold mt-10"
        >
          Buy For ₹{price}
        </Button>
      )}
    </>
  );
}
