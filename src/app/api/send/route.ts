import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { email, subject, message } = await request.json();

    await resend.emails.send({
      from: "Dev. pedrohxiv <contact@pedrohxiv.com>",
      to: [process.env.PERSONAL_EMAIL!, email],
      subject,
      react: EmailTemplate({ subject, message }) as React.ReactElement,
    });

    return NextResponse.json({ status: "Success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
