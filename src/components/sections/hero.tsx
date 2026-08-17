import { Link } from "react-router"
import { OrderMenu } from "@/components/order-menu"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"

export function Hero() {
  const { t, path } = useI18n()
  return (
    <section className="hero">
      <div className="site-container hero-inner">
        <div className="hero-copy">
          <p className="hero-eyebrow">{t.hero.eyebrow}</p>
          <h1 className="hero-title">
            {t.hero.titleBefore}
            <span className="hero-title-accent">{t.hero.titleAccent}</span>
            {t.hero.titleAfter}
          </h1>
          <p className="hero-lead">{t.hero.lead}</p>
          <div className="hero-actions">
            <OrderMenu size="lg" />
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<Link to={path("/#locations")} />}
            >
              {t.hero.findLocation}
            </Button>
          </div>
        </div>
        <img
          src="/images/hero.jpg"
          alt={t.hero.photoAlt}
          className="hero-photo"
        />
      </div>
    </section>
  )
}
