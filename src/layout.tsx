import { Outlet, useParams } from "react-router"
import { Footer } from "@/components/sections/footer"
import { Navbar } from "@/components/sections/navbar"
import { LangProvider } from "@/lib/i18n"
import NotFoundPage from "@/pages/not-found"

export default function SiteLayout() {
  const { lang } = useParams()
  const known = lang === undefined || lang === "vi"
  return (
    <LangProvider lang={lang === "vi" ? "vi" : "en"}>
      <div className="flex min-h-svh flex-col">
        <Navbar />
        <main className="flex-1">{known ? <Outlet /> : <NotFoundPage />}</main>
        <Footer />
      </div>
    </LangProvider>
  )
}
