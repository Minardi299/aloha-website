import { Link } from "react-router"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"

export default function NotFoundPage() {
  const { t, path } = useI18n()
  return (
    <div className="site-container">
      <div className="page-404">
        <Logo className="page-404-mark" />
        <p className="section-kicker">{t.notFound.kicker}</p>
        <h1 className="page-404-title">{t.notFound.title}</h1>
        <p className="page-404-text">{t.notFound.text}</p>
        <div className="hero-actions">
          <Button
            size="lg"
            nativeButton={false}
            render={<Link to={path("/")} />}
          >
            {t.notFound.backHome}
          </Button>
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            render={<Link to={path("/#locations")} />}
          >
            {t.notFound.findLocation}
          </Button>
        </div>
      </div>
    </div>
  )
}
