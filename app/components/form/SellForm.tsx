"use client";

import { SellProduct, type State } from "@/app/actions";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { type JSONContent } from "@tiptap/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import { SelectCategory } from "../SelectCategory";
import { Textarea } from "@/components/ui/textarea";
import { RichEditor } from "../Editor";
import { UploadDropzone } from "@/app/lib/uploadthing";
import { Submitbutton } from "../SubmitButtons";

export function SellForm() {
  const initialState: State = { message: "", status: undefined };
  const [state, formAction] = useFormState(SellProduct, initialState);
  const [json, setJson] = useState<null | JSONContent>(null);
  const [images, setImages] = useState<null | string[]>(null);
  const [productFile, SetProductFile] = useState<null | string>(null);

  useEffect(() => {
    if (state.status === "success") {
      toast.success(state.message);
    } else if (state.status === "error") {
      toast.error(state.message);
    }
  }, [state]);
  return (
    <form action={formAction}>
      <CardHeader>
        <CardTitle className="text-3xl">Sell your product with ease</CardTitle>
        <CardDescription className="text-lg font-medium">
          Please describe your product in detail to be sold easily
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-2">
          <Label className="font-semibold text-lg">Name</Label>
          <Input
            name="name"
            type="text"
            placeholder="Name of your product"
            className="text-md"
            required
            minLength={3}
          />
          {state?.errors?.["name"]?.[0] && (
            <p className="text-destructive font-medium text-lg">
              {state?.errors?.["name"]?.[0]}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-y-2">
          <Label className="font-semibold text-lg">Category</Label>
          <SelectCategory />
          {state?.errors?.["category"]?.[0] && (
            <p className="text-destructive font-medium text-lg">
              {state?.errors?.["category"]?.[0]}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-y-2">
          <Label className="font-semibold text-lg">Price</Label>
          <Input
            name="price"
            type="number"
            placeholder="₹750"
            className="text-md"
            required
            min={1}
          />
          {state?.errors?.["price"]?.[0] && (
            <p className="text-destructive font-medium text-lg">
              {state?.errors?.["price"]?.[0]}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-y-2">
          <Label className="font-semibold text-lg">Product Bio</Label>
          <Textarea
            name="smallDescription"
            placeholder="Summarize your product briefly"
            className="text-md"
            required
            minLength={10}
          />
          {state?.errors?.["smallDescription"]?.[0] && (
            <p className="text-destructive font-medium text-lg">
              {state?.errors?.["smallDescription"]?.[0]}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-y-2">
          <input
            type="hidden"
            name="description"
            value={JSON.stringify(json)}
          />
          <Label className="font-semibold text-lg">Product Description</Label>
          <RichEditor json={json} setJson={setJson} />
          {state?.errors?.["description"]?.[0] && (
            <p className="text-destructive font-medium text-lg">
              {state?.errors?.["description"]?.[0]}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-y-2">
          <input type="hidden" name="images" value={JSON.stringify(images)} />
          <Label className="font-semibold text-lg">Product Images</Label>
          <UploadDropzone
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              setImages(res.map((item) => item.url));
              toast.success("Image(s) uploaded successfully!");
            }}
            onUploadError={(error: Error) => {
              toast.error("Something went wrong, try again!");
            }}
          />
          {state?.errors?.[`images`]?.[0] && (
            <p className="text-destructive font-medium text-lg">
              {state?.errors?.[`images`]?.[0]}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-y-2">
          <input type="hidden" name="productFile" value={productFile ?? ""} />
          <Label>Product File</Label>
          <UploadDropzone
            onClientUploadComplete={(res) => {
              SetProductFile(res[0].url);
              toast.success("Your Product file has been uploaded!");
            }}
            endpoint="productFileUpload"
            onUploadError={(error: Error) => {
              toast.error("Something went wrong, try again");
            }}
          />
          {state?.errors?.["productFile"]?.[0] && (
            <p className="text-destructive">
              {state?.errors?.["productFile"]?.[0]}
            </p>
          )}
        </div>
      </CardContent>
      <CardFooter className="mt-5">
        <Submitbutton title="Create your Product" />
      </CardFooter>
    </form>
  );
}
