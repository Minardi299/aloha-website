import { useI18n } from "@/lib/i18n"

export function Signature() {
  const { t } = useI18n()
  return (
    <section id="signature" className="section">
      <div className="site-container split">
        <div className="section-header">
          <p className="section-kicker">{t.signature.kicker}</p>
          <h2 className="section-title">{t.signature.title}</h2>
          <div className="prose-block">
            <p>{t.signature.p1}</p>
            <p>{t.signature.p2}</p>
          </div>
        </div>
        <img
          src="/images/signature.jpg"
          alt={t.signature.photoAlt}
          className="photo aspect-[4/3]"
        />
      </div>
    </section>
  )
}
