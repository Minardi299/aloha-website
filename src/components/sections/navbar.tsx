import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router"
import { MenuIcon, XIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { USFlagIcon, VNFlagIcon } from "@/components/flag-icons"
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
          aria-label={l === "en" ? "English" : "Tiếng Việt"}
          title={l === "en" ? "English" : "Tiếng Việt"}
        >
          {l === "en" ? (
            <USFlagIcon className="lang-flag" />
          ) : (
            <VNFlagIcon className="lang-flag" />
          )}
        </Link>
      ))}
    </div>
  )
}

export function Navbar() {
  const { t, path } = useI18n()
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  const location = useLocation()
  useEffect(() => setOpen(false), [location])
  return (
    <header className="site-header">
      <div className="site-container site-header-inner">
        <Link to={path("/")} className="site-logo" onClick={close}>
          <Logo className="site-logo-mark" />
          {SITE.name}
        </Link>
        <div className="site-header-right">
          <nav className="site-nav">
            <Link to={path("/")} className="site-nav-link">
              {t.nav.home}
            </Link>
            <Link to={path("/menu")} className="site-nav-link">
              {t.nav.menu}
            </Link>
            <Link to={path("/#about")} className="site-nav-link">
              {t.nav.about}
            </Link>
            <LangSwitch />
          </nav>
          <OrderMenu />
          <Button
            variant="ghost"
            size="icon"
            className="site-nav-toggle"
            aria-expanded={open}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setOpen(!open)}
          >
            {open ? <XIcon /> : <MenuIcon />}
          </Button>
        </div>
      </div>
      {open && (
        <div className="site-nav-mobile">
          <nav className="site-container site-nav-mobile-inner">
            <Link to={path("/")} className="site-nav-link" onClick={close}>
              {t.nav.home}
            </Link>
            <Link to={path("/menu")} className="site-nav-link" onClick={close}>
              {t.nav.menu}
            </Link>
            <Link to={path("/#about")} className="site-nav-link" onClick={close}>
              {t.nav.about}
            </Link>
            <LangSwitch />
          </nav>
        </div>
      )}
    </header>
  )
}
