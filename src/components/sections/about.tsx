import { LOREM } from "@/lib/site"

export function About() {
  return (
    <section id="about" className="section">
      <div className="site-container split">
        <img
          src="/images/about.jpg"
          alt="Three friends sharing drinks at Aloha Tea Coffee"
          className="photo aspect-[4/3]"
        />
        <div className="section-header">
          <p className="section-kicker">Our story</p>
          <h2 className="section-title">Brewed with aloha, poured with care</h2>
          <div className="prose-block">
            <p>{LOREM.long}</p>
            <p>{LOREM.medium}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
