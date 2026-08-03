import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function safe(value: unknown) {
  return String(value).replace(/[<>&"']/g, (character) => ({
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    "\"": "&quot;",
    "'": "&#39;",
  }[character] ?? character));
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as null | Record<string, unknown>;
  if (!body) return NextResponse.json({ message: "Please complete the form." }, { status: 400 });

  if (String(body.website || "").trim()) {
    return NextResponse.json({ message: "We'll review your request and reply within two business days." });
  }

  const startedAt = Number(body.startedAt);
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < 1500 || Date.now() - startedAt > 86_400_000) {
    return NextResponse.json({ message: "Please refresh the page and try again." }, { status: 400 });
  }

  const required = ["name", "company", "need", "message", "budget", "timeline", "email"];
  if (required.some((field) => typeof body[field] !== "string" || !String(body[field]).trim())) {
    return NextResponse.json({ message: "Please complete all fields." }, { status: 400 });
  }
  if (!emailPattern.test(String(body.email)) || String(body.message).trim().length < 20) {
    return NextResponse.json({ message: "Please enter a valid email and a short project description." }, { status: 400 });
  }

  const recipient = process.env.CONTACT_RECIPIENT_EMAIL || "office@beargridsolutions.com";
  const from = process.env.CONTACT_FROM_EMAIL;
  const apiKey = process.env.RESEND_API_KEY;
  if (!recipient || !from || !apiKey) {
    return NextResponse.json({ message: "Message delivery is temporarily unavailable. Please try again shortly." }, { status: 503 });
  }

  const attribution = ["intent", "service", "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]
    .filter((key) => body[key])
    .map((key) => `<li><strong>${safe(key)}:</strong> ${safe(body[key])}</li>`)
    .join("");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [recipient],
      reply_to: String(body.email),
      subject: `Bear Grid enquiry — ${String(body.company).slice(0, 100)} — ${String(body.need).slice(0, 100)}`,
      html: `<h2>New Bear Grid enquiry</h2><p><strong>Name:</strong> ${safe(body.name)}</p><p><strong>Company:</strong> ${safe(body.company)}</p><p><strong>Help needed:</strong> ${safe(body.need)}</p><p><strong>Challenge:</strong><br>${safe(body.message).replace(/\n/g, "<br>")}</p><p><strong>Budget:</strong> ${safe(body.budget)}</p><p><strong>Timeline:</strong> ${safe(body.timeline)}</p><p><strong>Email:</strong> ${safe(body.email)}</p>${attribution ? `<h3>Attribution</h3><ul>${attribution}</ul>` : ""}`,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ message: "We could not send your message. Please try again." }, { status: 502 });
  }
  return NextResponse.json({ message: "We'll review your request and reply within two business days." });
}
