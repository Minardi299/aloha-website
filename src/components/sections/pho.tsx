import { useI18n } from "@/lib/i18n"

export function Pho() {
  const { t } = useI18n()
  return (
    <section id="pho" className="section section-dark">
      <div className="site-container split">
        <img
          src="/images/pho.jpg"
          alt={t.pho.photoAlt}
          className="photo aspect-[4/3]"
        />
        <div className="section-header">
          <p className="section-kicker">{t.pho.kicker}</p>
          <h2 className="section-title">{t.pho.title}</h2>
          <div className="prose-block">
            <p>{t.pho.p1}</p>
            <p>{t.pho.p2}</p>
            <p>{t.pho.p3}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
