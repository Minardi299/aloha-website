import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import { SITE } from "@/lib/site"

export function Hero() {
  return (
    <section className="hero">
      <div className="site-container hero-inner">
        <div className="hero-copy">
          <p className="hero-eyebrow">Boba tea · Vietnamese coffee · Arizona</p>
          <h1 className="hero-title">
            Say <span className="hero-title-accent">aloha</span> to your new
            favorite cup
          </h1>
          <p className="hero-lead">
            Hand-shaken milk teas, fresh fruit teas, and slow-dripped
            Vietnamese coffee, made to order in Glendale, Arizona. Come in,
            say hello, and find the drink you&apos;ll keep coming back for.
          </p>
          <div className="hero-actions">
            <Button
              size="lg"
              nativeButton={false}
              render={
                <a href={SITE.orderUrl} target="_blank" rel="noreferrer" />
              }
            >
              Order now
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
        <img
          src="/images/hero.jpg"
          alt="The counter at Aloha Tea Coffee"
          className="hero-photo"
        />
      </div>
    </section>
  )
}
