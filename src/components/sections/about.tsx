export function About() {
  return (
    <section id="about" className="section section-dark">
      <div className="site-container split">
        <img
          src="/images/about.jpg"
          alt="A layered strawberry drink with matcha cream in an Aloha Tea Coffee cup"
          className="photo aspect-[4/3]"
        />
        <div className="section-header">
          <p className="section-kicker">Our story</p>
          <h2 className="section-title">Brewed with aloha, poured with care</h2>
          <div className="prose-block">
            <p>
              Aloha Tea Coffee runs on a simple promise: every cup should be
              worth the trip. We brew our teas in small batches through the
              day, cook our boba fresh, and drip our Vietnamese coffee slow,
              the way it&apos;s meant to be. If a drink isn&apos;t one
              we&apos;d hand to a friend, it doesn&apos;t leave the counter.
            </p>
            <p>
              The name is a promise too. Aloha means you&apos;re greeted like
              a regular from your very first visit, whether you&apos;re
              grabbing a coffee on the way to work or settling in with friends
              over a round of milk teas. Quality in the cup, warmth in the
              room, that&apos;s the whole recipe.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
