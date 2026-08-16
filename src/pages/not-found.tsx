import { Link } from "react-router"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { LOREM } from "@/lib/site"

export default function NotFoundPage() {
  return (
    <div className="site-container">
      <div className="page-404">
        <Logo className="page-404-mark" />
        <p className="section-kicker">Error 404</p>
        <h1 className="page-404-title">This cup is empty</h1>
        <p className="page-404-text">{LOREM.short}</p>
        <div className="hero-actions">
          <Button size="lg" nativeButton={false} render={<Link to="/" />}>
            Back to home
          </Button>
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            render={<Link to="/#locations" />}
          >
            Find a location
          </Button>
        </div>
      </div>
    </div>
  )
}
