import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

export default function ProductEmail({ link }: { link: string }) {
  return (
    <Html>
      <Head />
      <Preview>Your product is here 🎉</Preview>
      <Tailwind>
        <Body className="bg-white font-sans">
          <Container style={container}>
            <Text className="text-3xl font-bold">Hi Friend,</Text>
            <Text className="text-lg text-gray-600">
              Thank you for buying your product at{" "}
              <span className="text-sky-600 font-bold">
                Tailwind Marketplace!
              </span>
            </Text>
            <Section className="w-full flex justify-center mt-7">
              <Button
                href={link}
                className="text-white font-semibold bg-blue-700 rounded-lg px-10 py-4"
              >
                Your Download Link
              </Button>
            </Section>
            <Text className="text-xl font-medium">
              Best, <br /> Tailwind Marketplace
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};
