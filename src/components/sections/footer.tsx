import { Link } from "react-router"
import { Logo } from "@/components/logo"
import { DoorDashIcon, InstagramIcon } from "@/components/social-icons"
import { useI18n } from "@/lib/i18n"
import { SITE } from "@/lib/site"

export function Footer() {
  const { t, path } = useI18n()
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="site-footer-inner">
          <div className="site-footer-brand">
            <div className="site-logo">
              <Logo className="site-logo-mark" />
              {SITE.name}
            </div>
            <p className="site-footer-blurb">{t.footer.blurb}</p>
          </div>
          <div className="site-footer-col">
            <p className="site-footer-heading">{t.footer.explore}</p>
            <Link to={path("/")} className="site-footer-link">
              {t.footer.home}
            </Link>
            <Link to={path("/#about")} className="site-footer-link">
              {t.footer.about}
            </Link>
            <Link to={path("/#gift-cards")} className="site-footer-link">
              {t.footer.giftCards}
            </Link>
            <Link to={path("/catering")} className="site-footer-link">
              {t.footer.catering}
            </Link>
          </div>
          <div className="site-footer-col">
            <p className="site-footer-heading">{t.footer.followUs}</p>
            <div className="social-row">
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={SITE.doordashUrl}
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label="DoorDash"
              >
                <DoorDashIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="site-footer-bottom">
          <p>
            © {new Date().getFullYear()} {SITE.name}. {t.footer.rights}
          </p>
          <Link to={path("/terms")} className="site-footer-link">
            {t.footer.terms}
          </Link>
        </div>
      </div>
    </footer>
  )
}
