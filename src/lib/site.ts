export const SITE = {
  name: "Aloha Tea Coffee",
  tagline: "Boba tea, Vietnamese coffee, and a warm hello.",
  orderUrl:
    "https://www.doordash.com/store/aloha-tea-&-coffee-glendale-624890/",
  giftCardUrl: "#",
  instagramUrl: "https://www.instagram.com/aloha.teacoffee/",
}

export type Location = {
  name: string
  address: string
  phone: string
  hours: string[]
  mapsUrl: string
  photo: string
  openingSoon?: boolean
}

export const LOCATIONS: Location[] = [
  {
    name: "Glendale",
    address: "6766 W Glendale Ave, Glendale, AZ 85303",
    phone: "(623) 934-9298",
    hours: [
      "Mon – Thu · 10 am – 9 pm",
      "Fri – Sat · 10 am – 10 pm",
      "Sun · 10 am – 9:30 pm",
    ],
    mapsUrl: "https://maps.google.com/?q=6766+W+Glendale+Ave,+Glendale,+AZ+85303",
    photo: "/images/location-glendale.jpg",
  },
  {
    name: "Scottsdale",
    address: "1234 N Placeholder Rd, Scottsdale, AZ 85251",
    phone: "(480) 000-0000",
    hours: ["Hours coming soon"],
    mapsUrl: "https://maps.google.com/?q=Scottsdale,+AZ",
    photo: "/images/location-scottsdale.jpg",
    openingSoon: true,
  },
]

export const LOREM = {
  short:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  medium:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  long:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
}
