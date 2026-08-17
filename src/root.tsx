import type { ReactNode } from "react"
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router"
import "./index.css"

export function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  const isVi = pathname === "/vi" || pathname.startsWith("/vi/")
  return (
    <html lang={isVi ? "vi" : "en"}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Aloha Tea Coffee</title>
        <meta
          name="description"
          content={
            isVi
              ? "Trà sữa, cà phê Việt và lời chào ấm áp. Hai cửa hàng tại Glendale và Scottsdale, Arizona."
              : "Boba tea, Vietnamese coffee, and a warm hello. Two locations in Glendale and Scottsdale, Arizona."
          }
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function Root() {
  return <Outlet />
}
