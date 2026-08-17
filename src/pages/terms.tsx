import { useI18n } from "@/lib/i18n"
import { LOCATIONS, SITE } from "@/lib/site"

export default function TermsPage() {
  const { t } = useI18n()
  const fill = (text: string) =>
    text
      .replace("{phone}", LOCATIONS[0].phone)
      .replace("{address}", LOCATIONS[0].address)
  return (
    <div className="site-container">
      <div className="page-legal">
        <div className="page-legal-section">
          <h1>{t.terms.title}</h1>
          <p className="page-legal-meta">
            {SITE.name} · {t.terms.meta}
          </p>
        </div>
        <p>{t.terms.intro}</p>
        {t.terms.sections.map((section) => (
          <div key={section.title} className="page-legal-section">
            <h2>{section.title}</h2>
            {section.paragraphs.map((text) => (
              <p key={text}>{fill(text)}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
