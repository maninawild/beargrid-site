import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const recipient = "office@beargridsolutions.com";
const whatsappUrl = "https://wa.me/message/4OIGQ3FHUZQSD1";

function safe(value: unknown) {
  return String(value).replace(/[<>&"']/g, (character) => ({
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    "\"": "&quot;",
    "'": "&#39;",
  }[character] ?? character));
}

function logDeliveryError(error: unknown) {
  const smtpError = error as { code?: string; responseCode?: number; command?: string };
  console.error("Contact email delivery failed.", {
    code: smtpError?.code || "unknown",
    responseCode: smtpError?.responseCode || "unknown",
    command: smtpError?.command || "unknown",
  });
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as null | Record<string, unknown>;
  if (!body) return NextResponse.json({ message: "Please complete the form." }, { status: 400 });

  if (String(body.website || "").trim()) {
    return NextResponse.json({ message: "Thank you. We have received your enquiry and will contact you shortly." });
  }

  const startedAt = Number(body.startedAt);
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < 1500 || Date.now() - startedAt > 86_400_000) {
    return NextResponse.json({ message: "Please refresh the page and try again." }, { status: 400 });
  }

  const required = ["name", "company", "need", "message", "budget", "timeline", "email"];
  if (required.some((field) => typeof body[field] !== "string" || !String(body[field]).trim())) {
    return NextResponse.json({ message: "Please complete all fields." }, { status: 400 });
  }

  const email = String(body.email).trim().toLowerCase();
  if (!emailPattern.test(email) || String(body.message).trim().length < 20) {
    return NextResponse.json({ message: "Please enter a valid email and a short project description." }, { status: 400 });
  }

  const smtpUser = process.env.GMAIL_SMTP_USER;
  const appPassword = process.env.GMAIL_APP_PASSWORD;
  const configuredRecipient = process.env.CONTACT_RECIPIENT_EMAIL;
  if (smtpUser !== recipient || configuredRecipient !== recipient || !appPassword) {
    console.error("Contact email configuration is incomplete.");
    return NextResponse.json(
      { message: "Email delivery is temporarily unavailable. Your details are still here—please try again shortly." },
      { status: 503 },
    );
  }

  const attribution = ["intent", "service", "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]
    .filter((key) => body[key])
    .map((key) => `<li><strong>${safe(key)}:</strong> ${safe(body[key])}</li>`)
    .join("");

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: smtpUser,
      pass: appPassword,
    },
  });

  try {
    await transporter.sendMail({
      from: `Bear Grid Website <${smtpUser}>`,
      to: configuredRecipient,
      replyTo: email,
      subject: `Bear Grid enquiry — ${String(body.company).slice(0, 100)} — ${String(body.need).slice(0, 100)}`,
      text: `New Bear Grid enquiry\n\nName: ${String(body.name)}\nCompany: ${String(body.company)}\nHelp needed: ${String(body.need)}\nChallenge: ${String(body.message)}\nBudget: ${String(body.budget)}\nTimeline: ${String(body.timeline)}\nEmail: ${email}`,
      html: `<h2>New Bear Grid enquiry</h2><p><strong>Name:</strong> ${safe(body.name)}</p><p><strong>Company:</strong> ${safe(body.company)}</p><p><strong>Help needed:</strong> ${safe(body.need)}</p><p><strong>Challenge:</strong><br>${safe(body.message).replace(/\n/g, "<br>")}</p><p><strong>Budget:</strong> ${safe(body.budget)}</p><p><strong>Timeline:</strong> ${safe(body.timeline)}</p><p><strong>Email:</strong> ${safe(email)}</p>${attribution ? `<h3>Attribution</h3><ul>${attribution}</ul>` : ""}`,
    });

    await transporter.sendMail({
      from: `Bear Grid <${smtpUser}>`,
      to: email,
      replyTo: recipient,
      subject: "We received your enquiry — Bear Grid",
      text: `Thanks for contacting Bear Grid.\n\nWe have received your enquiry and will review it shortly. We will normally reply within two business days.\n\nYou can also reach us on WhatsApp:\n${whatsappUrl}\n\nBear Grid\n${recipient}\nhttps://beargridsolutions.com`,
      html: `<p>Thanks for contacting Bear Grid.</p><p>We have received your enquiry and will review it shortly. We will normally reply within two business days.</p><p>You can also reach us on WhatsApp:<br><a href="${whatsappUrl}">${whatsappUrl}</a></p><p>Bear Grid<br>${recipient}<br><a href="https://beargridsolutions.com">https://beargridsolutions.com</a></p>`,
    });
  } catch (error) {
    logDeliveryError(error);
    return NextResponse.json(
      { message: "We could not deliver your enquiry. Your details are still here—please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: "Thank you. We have received your enquiry and will contact you shortly." });
}
