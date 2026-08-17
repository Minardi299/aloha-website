import { useI18n } from "@/lib/i18n"

const STEP_NUMBERS = ["01", "02", "03"]

export function GiftLoyalty() {
  const { t } = useI18n()
  return (
    <section id="gift-cards" className="section section-alt">
      <div className="site-container flex flex-col gap-12">
        <div className="section-header">
          <p className="section-kicker">{t.gift.kicker}</p>
          <h2 className="section-title">{t.gift.title}</h2>
          <p className="section-lead">{t.gift.lead}</p>
        </div>
        <div className="split items-start">
          <div className="section-header">
            <h3 className="subsection-title">{t.gift.shareTitle}</h3>
            <div className="prose-block">
              <p>{t.gift.shareBody}</p>
            </div>
            {/* <div>
              <Button
                variant="outline"
                nativeButton={false}
                render={<a href={SITE.giftCardUrl} />}
              >
                Buy a gift card
              </Button>
            </div> */}
          </div>
          <div className="section-header">
            <h3 className="subsection-title">{t.gift.rewardsTitle}</h3>
            <div className="perk-list">
              {t.gift.steps.map((s, i) => (
                <div key={STEP_NUMBERS[i]} className="perk-item">
                  <span className="perk-step">{STEP_NUMBERS[i]}</span>
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
