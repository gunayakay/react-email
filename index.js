import { Hono } from "hono";
import { Resend } from "resend";
import OTPTest from "./react-email/emails/otp-test";

const app = new Hono();

app.get("/", (c) => c.text("hono calisti"));

app.get("/send-email", async (c) => {
  const resend = new Resend("re_jkKbhGN6_LwtBQriZ4JWDcYxQpsBc2qCu");

  const { data, error } = await resend.emails.send({
    // we need domain to here
    from: "example.com",
    to: "ga@makesosimple.com",
    subject: "Test",
    react: <OTPTest otp="123asd" />,
  });
  if (error) {
    console.log({ error });
    return c.text("Eposta gönderilemedi");
  }

  return c.text("eposta başarıyla gönderildi");
});

Bun.serve({
  port: 3001,
  fetch: app.fetch,
});

console.log("http://localhost:3001 Bun calısti");
