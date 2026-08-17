import type { FormEvent } from "react"
import { Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useI18n } from "@/lib/i18n"
import { LOCATIONS, SITE } from "@/lib/site"

export default function CateringPage() {
  const { t } = useI18n()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = `Catering inquiry from ${data.get("name")}`
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      `Event date: ${data.get("date")}`,
      "",
      `${data.get("message")}`,
    ].join("\n")
    window.location.href = `mailto:${SITE.cateringEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section className="section">
      <div className="site-container split items-start">
        <div className="section-header">
          <p className="section-kicker">{t.catering.kicker}</p>
          <h2 className="section-title">{t.catering.title}</h2>
          <div className="prose-block">
            <p>{t.catering.p1}</p>
            <p>{t.catering.p2}</p>
          </div>
          <div className="location-details">
            <p className="location-detail">
              <Mail className="location-detail-icon" />
              {SITE.cateringEmail}
            </p>
            <p className="location-detail">
              <Phone className="location-detail-icon" />
              {LOCATIONS[0].phone}
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">{t.catering.formName}</FieldLabel>
              <Input id="name" name="name" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">{t.catering.formEmail}</FieldLabel>
              <Input id="email" name="email" type="email" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="phone">{t.catering.formPhone}</FieldLabel>
              <Input id="phone" name="phone" type="tel" />
            </Field>
            <Field>
              <FieldLabel htmlFor="date">{t.catering.formDate}</FieldLabel>
              <Input id="date" name="date" type="date" />
            </Field>
            <Field>
              <FieldLabel htmlFor="message">{t.catering.formMessage}</FieldLabel>
              <Textarea id="message" name="message" rows={5} required />
              <FieldDescription>{t.catering.formHint}</FieldDescription>
            </Field>
            <div>
              <Button type="submit">{t.catering.submit}</Button>
            </div>
          </FieldGroup>
        </form>
      </div>
    </section>
  )
}
