import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as null | Record<string, unknown>;
  const required = ["name", "email", "message", "interest", "consent"];

  if (!body || required.some((field) => typeof body[field] !== "string" || String(body[field]).trim().length === 0)) {
    return NextResponse.json({ message: "Please complete all fields." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(body.email))) {
    return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
  }

  const recipient = process.env.CONTACT_RECIPIENT_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  const apiKey = process.env.RESEND_API_KEY;
  if (!recipient || !from || !apiKey) {
    return NextResponse.json({ message: "Contact delivery is temporarily unavailable. Please use WhatsApp." }, { status: 503 });
  }

  const safe = (value: unknown) => String(value).replace(/[<>&"']/g, (character) => ({
    "<": "&lt;", ">": "&gt;", "&": "&amp;", "\"": "&quot;", "'": "&#39;",
  }[character] ?? character));
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [recipient],
      reply_to: String(body.email),
      subject: `Bear Grid enquiry — ${String(body.interest)}`,
      html: `<h2>New Bear Grid enquiry</h2><p><strong>Name:</strong> ${safe(body.name)}</p><p><strong>Company:</strong> ${safe(body.company || "Not provided")}</p><p><strong>Email:</strong> ${safe(body.email)}</p><p><strong>Phone / WhatsApp:</strong> ${safe(body.phone || "Not provided")}</p><p><strong>Area:</strong> ${safe(body.interest)}</p><p><strong>Message:</strong><br>${safe(body.message).replace(/\n/g, "<br>")}</p><p><strong>Consent:</strong> Yes</p>`,
    }),
  });
  if (!response.ok) {
    return NextResponse.json({ message: "We could not send your application. Please use WhatsApp." }, { status: 502 });
  }
  return NextResponse.json({ message: "Thank you. Your application has been sent." });
}
