import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // Only protect the /admin route
  if (url.pathname.startsWith("/admin")) {
    const basicAuth = req.headers.get("authorization");

    if (basicAuth) {
      const authValue = basicAuth.split(" ")[1];
      const [user, pwd] = atob(authValue).split(":");

      // In a real app, use environment variables for credentials
      if (user === "admin" && pwd === "rokadmin2024") {
        return NextResponse.next();
      }
    }

    return new NextResponse("Auth required", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Secure Area"',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
