import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as null | Record<string, unknown>;
  const required = ["name", "email", "subject", "message"];

  if (!body || required.some((field) => typeof body[field] !== "string" || String(body[field]).trim().length === 0)) {
    return NextResponse.json({ message: "Please complete all fields." }, { status: 400 });
  }

  if (!String(body.email).includes("@")) {
    return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
  }

  return NextResponse.json({
    message: "We will be back to you shortly. This preview stores no submissions yet.",
  });
}
