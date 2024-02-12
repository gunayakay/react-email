import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

export default function OTPTest({ otp }) {
  return (
    <Html>
      <Head>
        <title>Test</title>
      </Head>
      <Preview>Test maili için geldi</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#007291",
              },
            },
          },
        }}>
        <Body
          style={{
            borderTopWidth: 4,
            borderTopStyle: "solid",
          }}
          className="bg-[#fafafa]  border-[#6b4fbb] py-6 font-sans">
          <Container>
            <Section className="flex justify-center mb-6">
              <Img
                src="https://images.ctfassets.net/xz1dnu24egyd/3FbNmZRES38q2Sk2EcoT7a/a290dc207a67cf779fc7c2456b177e9f/press-kit-icon.svg"
                height={55}
                width={55}
              />
            </Section>
            <Section className="bg-white text-center border border-[#ededed]">
              <Heading as="h4">Help us protect your account</Heading>
              <Text className="text-sm px-14">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
                explicabo deleniti harum dolor, neque nostrum dolore possimus
                doloremque. Eum ducimus iste animi minima neque dicta in! Rerum
                blanditiis corrupti illo!
              </Text>
              <Section className="w-[207px] h-[53px] bg-zinc-100 font-semibold text-lg tracking-widest">
                {otp}
              </Section>
              <Text className="text-[10px] leading-4 px-14">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                natus neque similique ipsa quidem!{" "}
                <Button href="#"> Maxime</Button>, alias consequatur officiis
                sapiente accusamus iure expedita exercitationem laboriosam vitae
                possimus! Minima est molestiae eius.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
