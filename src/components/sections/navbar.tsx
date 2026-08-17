import { Link } from "react-router"
import { Logo } from "@/components/logo"
import { OrderMenu } from "@/components/order-menu"
import { SITE } from "@/lib/site"

export function Navbar() {
  return (
    <header className="site-header">
      <div className="site-container site-header-inner">
        <Link to="/" className="site-logo">
          <Logo className="site-logo-mark" />
          {SITE.name}
        </Link>
        <nav className="site-nav">
          <Link to="/" className="site-nav-link site-nav-link-home">
            Home
          </Link>
          <Link to="/#about" className="site-nav-link">
            About us
          </Link>
          <OrderMenu />
        </nav>
      </div>
    </header>
  )
}
