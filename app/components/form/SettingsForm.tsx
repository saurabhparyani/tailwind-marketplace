"use client";

import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Submitbutton } from "../SubmitButtons";
import { useFormState } from "react-dom";
import { type State, UpdateUserSettings } from "../../actions";
import { toast } from "sonner";
import { useEffect } from "react";
import { redirect } from "next/navigation";

interface iAppProps {
  firstName: string;
  lastName: string;
  email: string;
}

export function SettingsForm({ firstName, lastName, email }: iAppProps) {
  const initialState: State = { message: "", status: undefined };
  const [state, formAction] = useFormState(UpdateUserSettings, initialState);

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
        <CardTitle className="text-3xl">Settings</CardTitle>
        <CardDescription className="text-lg font-medium">
          Update your settings here.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-2">
          <Label className="font-semibold text-lg">First Name</Label>
          <Input
            name="firstName"
            type="text"
            className="text-md"
            defaultValue={firstName}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <Label className="font-semibold text-lg">Last Name</Label>
          <Input
            name="lastName"
            type="text"
            className="text-md"
            defaultValue={lastName}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <Label className="font-semibold text-lg">Email</Label>
          <Input
            name="email"
            type="text"
            className="text-md"
            disabled
            defaultValue={email}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Submitbutton title="Save changes" />
      </CardFooter>
    </form>
  );
}
