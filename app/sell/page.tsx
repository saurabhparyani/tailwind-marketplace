import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectCategory } from "../components/SelectCategory";
import { Textarea } from "@/components/ui/textarea";
import { RichEditor } from "../components/Editor";

export default function SellRoute() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-14">
        <Card>
          <form>
            <CardHeader>
              <CardTitle className="text-3xl">
                Sell your product with ease
              </CardTitle>
              <CardDescription className="text-lg">
                Please describe your product in detail to be sold easily
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-y-10">
              <div className="flex flex-col gap-y-2">
                <Label className="font-semibold text-lg">Name</Label>
                <Input
                  type="text"
                  placeholder="Name of your product"
                  className="text-md"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <Label className="font-semibold text-lg">Category</Label>
                <SelectCategory />
              </div>

              <div className="flex flex-col gap-y-2">
                <Label className="font-semibold text-lg">Price</Label>
                <Input type="number" placeholder="₹750" className="text-md" />
              </div>
              <div className="flex flex-col gap-y-2">
                <Label className="font-semibold text-lg">Product Bio</Label>
                <Textarea
                  placeholder="Summarize your product briefly"
                  className="text-md"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <Label className="font-semibold text-lg">
                  Product Description
                </Label>
                <RichEditor />
              </div>
            </CardContent>
          </form>
        </Card>
      </section>
    </div>
  );
}
