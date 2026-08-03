import { NextResponse, type NextRequest } from "next/server";

const productionHost = "beargridsolutions.com";
const legacyProductionHost = "beargrid-site.vercel.app";

export function proxy(request: NextRequest) {
  if (request.nextUrl.hostname !== legacyProductionHost) {
    return NextResponse.next();
  }

  const destination = request.nextUrl.clone();
  destination.protocol = "https:";
  destination.hostname = productionHost;
  destination.port = "";
  return NextResponse.redirect(destination, 308);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
