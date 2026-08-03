import { NextResponse, type NextRequest } from "next/server";

const productionHost = "beargridsolutions.com";
const legacyProductionHost = "beargrid-site.vercel.app";

export function proxy(request: NextRequest) {
  if (request.nextUrl.hostname === legacyProductionHost) {
    const destination = request.nextUrl.clone();
    destination.protocol = "https:";
    destination.hostname = productionHost;
    destination.port = "";
    return NextResponse.redirect(destination, 308);
  }
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-bear-grid-locale", request.nextUrl.pathname === "/nl" || request.nextUrl.pathname.startsWith("/nl/") ? "nl-NL" : "en");
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
