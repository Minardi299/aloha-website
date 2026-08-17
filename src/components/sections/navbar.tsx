import { Link, useLocation } from "react-router"
import { Logo } from "@/components/logo"
import { OrderMenu } from "@/components/order-menu"
import { useI18n, type Lang } from "@/lib/i18n"
import { SITE } from "@/lib/site"

function LangSwitch() {
  const { lang } = useI18n()
  const { pathname } = useLocation()
  const base =
    pathname === "/vi" ? "/" : pathname.startsWith("/vi/") ? pathname.slice(3) : pathname
  const target = (l: Lang) => (l === "vi" ? (base === "/" ? "/vi" : "/vi" + base) : base)
  return (
    <div className="lang-switch">
      {(["en", "vi"] as Lang[]).map((l) => (
        <Link
          key={l}
          to={target(l)}
          className="lang-switch-link"
          aria-current={lang === l ? "true" : undefined}
        >
          {l.toUpperCase()}
        </Link>
      ))}
    </div>
  )
}

export function Navbar() {
  const { t, path } = useI18n()
  return (
    <header className="site-header">
      <div className="site-container site-header-inner">
        <Link to={path("/")} className="site-logo">
          <Logo className="site-logo-mark" />
          {SITE.name}
        </Link>
        <nav className="site-nav">
          <Link to={path("/")} className="site-nav-link site-nav-link-home">
            {t.nav.home}
          </Link>
          <Link to={path("/menu")} className="site-nav-link">
            {t.nav.menu}
          </Link>
          <Link to={path("/#about")} className="site-nav-link">
            {t.nav.about}
          </Link>
          <LangSwitch />
          <OrderMenu />
        </nav>
      </div>
    </header>
  )
}
