import { OrderMenu } from "@/components/order-menu"
import { MENU_CATEGORIES } from "@/lib/site"

const slug = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")

export default function MenuPage() {
  return (
    <>
      <div className="site-container">
        <div className="menu-header">
          <div className="section-header">
            <p className="section-kicker">Menu</p>
            <h1 className="section-title">What are you craving?</h1>
            <p className="section-lead">
              Every drink is made to order. Pick a category, find your
              favorite, and order it for pickup.
            </p>
          </div>
          <div>
            <OrderMenu />
          </div>
        </div>
      </div>
      <nav className="menu-tabs" aria-label="Menu categories">
        <div className="site-container menu-tabs-inner">
          {MENU_CATEGORIES.map((category) => (
            <a
              key={category.name}
              href={`#${slug(category.name)}`}
              className="menu-tab"
            >
              {category.name}
            </a>
          ))}
        </div>
      </nav>
      <div className="site-container menu-sections">
        {MENU_CATEGORIES.map((category) => (
          <section
            key={category.name}
            id={slug(category.name)}
            className="menu-section"
          >
            <h2 className="subsection-title">{category.name}</h2>
            <div className="menu-grid">
              {category.items.map((item) => (
                <figure key={item.name} className="menu-item">
                  <img
                    src={item.photo}
                    alt={item.name}
                    loading="lazy"
                    className="menu-item-photo"
                  />
                  <figcaption className="menu-item-name">
                    {item.name}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  )
}
