import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as null | Record<string, unknown>;
  const required = ["firstName", "lastName", "email", "phone", "profile", "position"];

  if (!body || required.some((field) => typeof body[field] !== "string" || String(body[field]).trim().length === 0)) {
    return NextResponse.json({ message: "Please complete all fields before applying." }, { status: 400 });
  }

  if (!String(body.email).includes("@")) {
    return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
  }

  return NextResponse.json({
    message: "Thank you. We will be in touch soon. This preview stores no applications yet.",
  });
}
