import { OrderMenu } from "@/components/order-menu"
import { MENU_CATEGORIES } from "@/lib/site"

export default function MenuPage() {
  return (
    <div className="site-container">
      <div className="menu-header">
        <div className="section-header">
          <p className="section-kicker">Menu</p>
          <h1 className="section-title">What are you craving?</h1>
          <p className="section-lead">
            Every drink is made to order. Find your favorite and order it for
            pickup.
          </p>
        </div>
        <div>
          <OrderMenu />
        </div>
      </div>
      <div className="menu-grid">
        {MENU_CATEGORIES.map((category) => (
          <figure key={category.name} className="menu-card">
            <img
              src={category.photo}
              alt={category.name}
              loading="lazy"
              className="menu-card-photo"
            />
            <figcaption className="menu-card-name">{category.name}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}
