"use client";
import { Card, CardHeader } from "@/components/ui/card";
import { categorItems } from "../lib/categoryItems";
import { useState } from "react";

export function SelectCategory() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {categorItems.map((item) => (
        <div key={item.id} className="cursor-pointer">
          <Card
            className={
              selectedCategory === item.name
                ? "border-primary border-2"
                : "border-2 border-primary/10"
            }
            onClick={() => setSelectedCategory(item.name)}
          >
            <CardHeader>
              {item.image}
              <h3 className="font-semibold text-xl">{item.title}</h3>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  );
}
