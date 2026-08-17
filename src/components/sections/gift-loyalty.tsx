const steps = [
  {
    step: "01",
    title: "Sip",
    text: "Order whatever you're craving: milk tea, fruit tea, or coffee.",
  },
  {
    step: "02",
    title: "Earn",
    text: "Every visit counts toward your next reward.",
  },
  {
    step: "03",
    title: "Enjoy a free drink",
    text: "Once you've earned it, your next cup is on us.",
  },
]

export function GiftLoyalty() {
  return (
    <section id="gift-cards" className="section section-alt">
      <div className="site-container flex flex-col gap-12">
        <div className="section-header">
          <p className="section-kicker">Give &amp; get</p>
          <h2 className="section-title">Gift cards &amp; Aloha Rewards</h2>
          <p className="section-lead">
            A little aloha goes a long way. Treat someone to their next drink,
            or let your own orders add up to something free.
          </p>
        </div>
        <div className="split items-start">
          <div className="section-header">
            <h3 className="subsection-title">Share a little aloha</h3>
            <div className="prose-block">
              <p>
                An Aloha gift card is an easy way to say thanks, happy
                birthday, or just thinking of you. Pick one up at the counter
                and let them choose their own favorite.
              </p>
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
