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
  if (!body) return NextResponse.json({ message: "Vul het formulier in." }, { status: 400 });

  if (String(body.website || "").trim()) {
    return NextResponse.json({ message: "Bedankt. We hebben uw aanvraag ontvangen en nemen binnenkort contact met u op." });
  }

  const startedAt = Number(body.startedAt);
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < 1500 || Date.now() - startedAt > 86_400_000) {
    return NextResponse.json({ message: "Vernieuw de pagina en probeer het opnieuw." }, { status: 400 });
  }

  const required = ["name", "company", "need", "message", "budget", "timeline", "email"];
  if (required.some((field) => typeof body[field] !== "string" || !String(body[field]).trim())) {
    return NextResponse.json({ message: "Vul alle velden in." }, { status: 400 });
  }

  const email = String(body.email).trim().toLowerCase();
  if (!emailPattern.test(email) || String(body.message).trim().length < 20) {
    return NextResponse.json({ message: "Vul een geldig e-mailadres en een korte projectbeschrijving in." }, { status: 400 });
  }

  const smtpUser = process.env.GMAIL_SMTP_USER;
  const appPassword = process.env.GMAIL_APP_PASSWORD;
  const configuredRecipient = process.env.CONTACT_RECIPIENT_EMAIL;
  if (smtpUser !== recipient || configuredRecipient !== recipient || !appPassword) {
    console.error("Contact email configuration is incomplete.");
    return NextResponse.json(
      { message: "E-mailbezorging is tijdelijk niet beschikbaar. Uw gegevens blijven in het formulier staan; probeer het later opnieuw." },
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
      subject: `Bear Grid-aanvraag — ${String(body.company).slice(0, 100)} — ${String(body.need).slice(0, 100)}`,
      text: `Nieuwe aanvraag voor Bear Grid\n\nNaam: ${String(body.name)}\nBedrijf: ${String(body.company)}\nHulpvraag: ${String(body.need)}\nVraagstuk: ${String(body.message)}\nBudget: ${String(body.budget)}\nPlanning: ${String(body.timeline)}\nE-mail: ${email}`,
      html: `<h2>Nieuwe aanvraag voor Bear Grid</h2><p><strong>Naam:</strong> ${safe(body.name)}</p><p><strong>Bedrijf:</strong> ${safe(body.company)}</p><p><strong>Hulpvraag:</strong> ${safe(body.need)}</p><p><strong>Vraagstuk:</strong><br>${safe(body.message).replace(/\n/g, "<br>")}</p><p><strong>Budget:</strong> ${safe(body.budget)}</p><p><strong>Planning:</strong> ${safe(body.timeline)}</p><p><strong>E-mail:</strong> ${safe(email)}</p>${attribution ? `<h3>Herkomst</h3><ul>${attribution}</ul>` : ""}`,
    });

    await transporter.sendMail({
      from: `Bear Grid <${smtpUser}>`,
      to: email,
      replyTo: recipient,
      subject: "We hebben uw aanvraag ontvangen — Bear Grid",
      text: `Bedankt dat u contact hebt opgenomen met Bear Grid.\n\nWe hebben uw aanvraag ontvangen en beoordelen deze zo snel mogelijk. Normaal gesproken reageren we binnen twee werkdagen.\n\nU kunt ons ook bereiken via WhatsApp:\n${whatsappUrl}\n\nBear Grid\n${recipient}\nhttps://beargridsolutions.com`,
      html: `<p>Bedankt dat u contact hebt opgenomen met Bear Grid.</p><p>We hebben uw aanvraag ontvangen en beoordelen deze zo snel mogelijk. Normaal gesproken reageren we binnen twee werkdagen.</p><p>U kunt ons ook bereiken via WhatsApp:<br><a href="${whatsappUrl}">${whatsappUrl}</a></p><p>Bear Grid<br>${recipient}<br><a href="https://beargridsolutions.com">https://beargridsolutions.com</a></p>`,
    });
  } catch (error) {
    logDeliveryError(error);
    return NextResponse.json(
      { message: "We konden uw aanvraag niet bezorgen. Uw gegevens blijven in het formulier staan; probeer het opnieuw." },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: "Bedankt. We hebben uw aanvraag ontvangen en nemen binnenkort contact met u op." });
}
