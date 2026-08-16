import { Outlet } from "react-router"
import { Footer } from "@/components/sections/footer"
import { Navbar } from "@/components/sections/navbar"

export default function SiteLayout() {
  return (
    <div className="flex min-h-svh flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
