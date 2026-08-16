import { Button } from "@/components/ui/button"
import { LOREM, SITE } from "@/lib/site"

const steps = [
  {
    step: "01",
    title: "Sip",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    step: "02",
    title: "Earn",
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    step: "03",
    title: "Enjoy a free drink",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
]

export function GiftLoyalty() {
  return (
    <section id="gift-cards" className="section section-alt">
      <div className="site-container flex flex-col gap-12">
        <div className="section-header">
          <p className="section-kicker">Give &amp; get</p>
          <h2 className="section-title">Gift cards &amp; Aloha Rewards</h2>
          <p className="section-lead">{LOREM.short}</p>
        </div>
        <div className="split items-start">
          <div className="section-header">
            <h3 className="subsection-title">Share a little aloha</h3>
            <div className="prose-block">
              <p>{LOREM.medium}</p>
            </div>
            <div>
              <Button
                variant="outline"
                nativeButton={false}
                render={<a href={SITE.giftCardUrl} />}
              >
                Buy a gift card
              </Button>
            </div>
          </div>
          <div className="section-header">
            <h3 className="subsection-title">Aloha Rewards</h3>
            <div className="perk-list">
              {steps.map((s) => (
                <div key={s.step} className="perk-item">
                  <span className="perk-step">{s.step}</span>
                  <div className="perk-body">
                    <p className="perk-title">{s.title}</p>
                    <p className="perk-text">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
