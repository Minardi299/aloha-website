import { Link } from "react-router"
import { Logo } from "@/components/logo"
import { FacebookIcon, InstagramIcon } from "@/components/social-icons"
import { SITE } from "@/lib/site"

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="site-footer-inner">
          <div className="site-footer-brand">
            <div className="site-logo">
              <Logo className="site-logo-mark" />
              {SITE.name}
            </div>
            <p className="site-footer-blurb">
              Boba tea and Vietnamese coffee, made with care and served with
              aloha in Glendale, Arizona.
            </p>
          </div>
          <div className="site-footer-col">
            <p className="site-footer-heading">Explore</p>
            <Link to="/" className="site-footer-link">
              Home
            </Link>
            <Link to="/#about" className="site-footer-link">
              About us
            </Link>
            <Link to="/#gift-cards" className="site-footer-link">
              Gift cards
            </Link>
            <Link to="/catering" className="site-footer-link">
              Catering
            </Link>
          </div>
          <div className="site-footer-col">
            <p className="site-footer-heading">Follow us</p>
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
                href={SITE.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="site-footer-bottom">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <Link to="/terms" className="site-footer-link">
            Terms &amp; Conditions
          </Link>
        </div>
      </div>
    </footer>
  )
}
