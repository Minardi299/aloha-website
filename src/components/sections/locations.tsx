import { Clock, MapPin, Phone } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { LOCATIONS } from "@/lib/site"

export function Locations() {
  return (
    <section id="locations" className="section">
      <div className="site-container flex flex-col gap-12">
        <div className="section-header">
          <p className="section-kicker">Come say hi</p>
          <h2 className="section-title">Two homes, one aloha</h2>
        </div>
        <div className="locations-grid">
          {LOCATIONS.map((location) => (
            <div key={location.name} className="location">
              <img
                src={location.photo}
                alt={`Inside the ${location.name} shop`}
                className="location-photo"
              />
              <div className="flex items-center gap-3">
                <h3 className="location-name">{location.name}</h3>
                {location.openingSoon && (
                  <Badge variant="secondary">Opening soon</Badge>
                )}
              </div>
              <div className="location-details">
                <p className="location-detail">
                  <MapPin className="location-detail-icon" />
                  {location.address}
                </p>
                <p className="location-detail">
                  <Phone className="location-detail-icon" />
                  {location.phone}
                </p>
                <div className="location-detail">
                  <Clock className="location-detail-icon" />
                  <span className="flex flex-col gap-1">
                    {location.hours.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <Button
                  size="sm"
                  nativeButton={false}
                  render={
                    <a
                      href={location.orderUrl}
                      target="_blank"
                      rel="noreferrer"
                    />
                  }
                >
                  Order online
                </Button>
                <a
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="location-directions-link"
                >
                  Get directions <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
