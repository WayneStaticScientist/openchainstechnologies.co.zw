"use client";
import emailjs from "@emailjs/react-native";
export async function SendEmail(pa: any) {
  emailjs.init({
    publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
    limitRate: {
      id: "app",
      throttle: 10000,
    },
  });
  await emailjs.send(
    `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
    `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
    pa,
    {
      publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
    }
  );
}
