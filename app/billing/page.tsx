import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "../lib/db";
import { Button } from "@/components/ui/button";
import { GetStripeDashboardLink, createStripeAccountLink } from "../actions";
import { Submitbutton } from "../components/SubmitButtons";

async function getData(userId: string) {
  const data = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      stripeConnectedLinked: true,
    },
  });

  return data;
}

export default async function BillingRoute() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) throw new Error("Unauthorized");

  const data = await getData(user.id);
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8">
      <Card>
        <CardHeader>
          <CardTitle>Billing</CardTitle>
          <CardDescription>
            Find all your details regarding your payments
          </CardDescription>
        </CardHeader>
        <CardContent>
          {data?.stripeConnectedLinked === false && (
            <form action={createStripeAccountLink}>
              <Submitbutton title="Link your Account to Stripe" />
            </form>
          )}

          {data?.stripeConnectedLinked === true && (
            <form action={GetStripeDashboardLink}>
              <Submitbutton title="View Dashboard" />
            </form>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
