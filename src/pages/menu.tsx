import { OrderMenu } from "@/components/order-menu"
import { useI18n } from "@/lib/i18n"
import { MENU_CATEGORIES, type MenuCategory } from "@/lib/site"

function CategoryGrid({ categories }: { categories: MenuCategory[] }) {
  const { t } = useI18n()
  return (
    <div className="menu-grid">
      {categories.map((category) => (
        <figure key={category.name} className="menu-card">
          <img
            src={category.photo}
            alt={category.name}
            loading="lazy"
            className="menu-card-photo"
          />
          <figcaption className="menu-card-name">{category.name}</figcaption>
          {t.menu.descriptions[category.name] && (
            <p className="menu-card-desc">
              {t.menu.descriptions[category.name]}
            </p>
          )}
        </figure>
      ))}
    </div>
  )
}

export default function MenuPage() {
  const { t } = useI18n()
  const drinks = MENU_CATEGORIES.filter((c) => c.group === "drinks")
  const food = MENU_CATEGORIES.filter((c) => c.group === "food")
  return (
    <div className="site-container">
      <div className="menu-header">
        <div className="section-header">
          <p className="section-kicker">{t.menu.kicker}</p>
          <h1 className="section-title">{t.menu.title}</h1>
          <p className="section-lead">{t.menu.lead}</p>
        </div>
        <div>
          <OrderMenu />
        </div>
      </div>
      <div className="menu-groups">
        <section className="menu-group">
          <h2 className="subsection-title">{t.menu.drinksTitle}</h2>
          <CategoryGrid categories={drinks} />
        </section>
        <section className="menu-group">
          <h2 className="subsection-title">{t.menu.foodTitle}</h2>
          <CategoryGrid categories={food} />
        </section>
      </div>
    </div>
  )
}
