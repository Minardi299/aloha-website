import { useI18n } from "@/lib/i18n"

export function About() {
  const { t } = useI18n()
  return (
    <section id="about" className="section section-dark">
      <div className="site-container split">
        <img
          src="/images/about.jpg"
          alt={t.about.photoAlt}
          className="photo aspect-[4/3]"
        />
        <div className="section-header">
          <p className="section-kicker">{t.about.kicker}</p>
          <h2 className="section-title">{t.about.title}</h2>
          <div className="prose-block">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
