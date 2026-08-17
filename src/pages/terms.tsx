import { LOCATIONS, SITE } from "@/lib/site"

const sections = [
  {
    title: "1. Acceptance of terms",
    paragraphs: [
      "By using this website, you accept these terms. If you do not agree with them, please do not use the site.",
      "These terms apply to the website only. Purchases in our shops and orders through third-party services have their own terms.",
    ],
  },
  {
    title: "2. Gift cards",
    paragraphs: [
      "Gift cards can be redeemed for drinks and other items at our shops. They cannot be exchanged for cash, except where the law requires it.",
      "Please treat a gift card like cash. We cannot replace a card that is lost or stolen.",
    ],
  },
  {
    title: "3. Aloha Rewards program",
    paragraphs: [
      "Aloha Rewards is our free loyalty program. Rewards have no cash value and cannot be transferred or sold.",
      "We may change how the program works from time to time. The details in effect at the time of your visit apply. Ask at the counter for the current program details.",
    ],
  },
  {
    title: "4. Online orders",
    paragraphs: [
      "Online orders are placed through third-party services such as DoorDash. Those services have their own terms, prices, and fees, which can differ from our in-store menu.",
      "For questions about an online order, contact the service you ordered through. For everything else, contact us directly.",
    ],
  },
  {
    title: "5. Intellectual property",
    paragraphs: [
      "The Aloha Tea Coffee name, our logo, and the content on this site belong to us. Please do not reuse them without our written permission.",
    ],
  },
  {
    title: "6. Limitation of liability",
    paragraphs: [
      "This website is provided as is. We work to keep the information on it accurate and current, but we make no guarantees.",
      "To the extent the law allows, we are not liable for losses that result from your use of this site.",
    ],
  },
  {
    title: "7. Changes to these terms",
    paragraphs: [
      "We may update these terms from time to time. When we do, we update the date at the top of this page.",
      "If you keep using the site after a change, you accept the updated terms.",
    ],
  },
  {
    title: "8. Contact us",
    paragraphs: [
      `Questions about these terms? Call our Glendale shop at ${LOCATIONS[0].phone}, or stop by at ${LOCATIONS[0].address}.`,
    ],
  },
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
        <p>
          These terms cover your use of this website and the programs we
          describe on it: gift cards, Aloha Rewards, and online orders. Please
          read them before you use the site. If anything is unclear, contact
          us and we&apos;ll be happy to help.
        </p>
        {sections.map((section) => (
          <div key={section.title} className="page-legal-section">
            <h2>{section.title}</h2>
            {section.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
