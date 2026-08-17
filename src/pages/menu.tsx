import { OrderMenu } from "@/components/order-menu"
import { useI18n } from "@/lib/i18n"
import { MENU_CATEGORIES } from "@/lib/site"

export default function MenuPage() {
  const { t } = useI18n()
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
