import { Link } from "react-router"
import { OrderMenu } from "@/components/order-menu"
import { Button } from "@/components/ui/button"

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
            <OrderMenu size="lg" />
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
