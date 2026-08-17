export const SITE = {
  name: "Aloha Tea Coffee",
  tagline: "Boba tea, Vietnamese coffee, and a warm hello.",
  giftCardUrl: "#",
  instagramUrl: "https://www.instagram.com/aloha.teacoffee/",
  doordashUrl:
    "https://www.doordash.com/store/aloha-tea-&-coffee-glendale-624890/853210/",
  cateringEmail: "catering@alohateacoffee.com",
}

export type MenuCategory = {
  name: string
  photo: string
}

export const MENU_CATEGORIES: MenuCategory[] = [
  { name: "Aloha Food", photo: "/images/menu/aloha-food.jpg" },
  { name: "Aloha Lemonade", photo: "/images/menu/aloha-lemonade.jpg" },
  { name: "Cheese Foam Tea", photo: "/images/menu/cheese-foam-tea.jpg" },
  { name: "Matcha", photo: "/images/menu/matcha.jpg" },
  { name: "Milk Tea", photo: "/images/menu/milk-tea.jpg" },
  { name: "Smoothie", photo: "/images/menu/smoothie.jpg" },
  { name: "Coffee", photo: "/images/menu/coffee.jpg" },
  { name: "Fruit Tea", photo: "/images/menu/fruit-tea.jpg" },
  { name: "Tea", photo: "/images/menu/tea.jpg" },
  { name: "Dessert & Snack", photo: "/images/menu/dessert-snack.jpg" },
]

export type Location = {
  name: string
  address: string
  phone: string
  hours: string[]
  mapsUrl: string
  orderUrl: string
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
    orderUrl: "https://alohaglendale.magsoft.us/order/online/desktop",
    photo: "/images/location-glendale.jpg",
  },
  {
    name: "Scottsdale",
    address: "1234 N Placeholder Rd, Scottsdale, AZ 85251",
    phone: "(480) 000-0000",
    hours: ["Hours coming soon"],
    mapsUrl: "https://maps.google.com/?q=Scottsdale,+AZ",
    orderUrl: "https://aloha2.magsoft.us/order/online/desktop",
    photo: "/images/location-scottsdale.jpg",
    openingSoon: true,
  },
]
