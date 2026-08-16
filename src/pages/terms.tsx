import { LOREM, SITE } from "@/lib/site"

const sections = [
  "1. Acceptance of terms",
  "2. Gift cards",
  "3. Aloha Rewards program",
  "4. Online orders",
  "5. Intellectual property",
  "6. Limitation of liability",
  "7. Changes to these terms",
  "8. Contact us",
]

export default function TermsPage() {
  return (
    <div className="site-container">
      <div className="page-legal">
        <div className="page-legal-section">
          <h1>Terms &amp; Conditions</h1>
          <p className="page-legal-meta">
            {SITE.name} · Last updated August 16, 2026
          </p>
        </div>
        <p>{LOREM.long}</p>
        {sections.map((title) => (
          <div key={title} className="page-legal-section">
            <h2>{title}</h2>
            <p>{LOREM.medium}</p>
            <p>{LOREM.short}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
