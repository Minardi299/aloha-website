export const SITE = {
  name: "Aloha Tea Coffee",
  tagline: "Boba tea, Vietnamese coffee, and a warm hello.",
  giftCardUrl: "#",
  instagramUrl: "https://www.instagram.com/aloha.teacoffee/",
  facebookUrl: "#",
  cateringEmail: "catering@alohateacoffee.com",
}

export type MenuItem = {
  name: string
  price: string
  photo: string
}

export type MenuCategory = {
  name: string
  items: MenuItem[]
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    name: "Aloha Food",
    items: [
      { name: "Pho", price: "$16.00", photo: "/images/menu/aloha-food--pho.jpg" },
      { name: "Pho Kid", price: "$11.00", photo: "/images/menu/aloha-food--pho-kid.jpg" },
      { name: "Pho Shrimp", price: "$18.00", photo: "/images/menu/aloha-food--pho-shrimp.jpg" },
      { name: "Pho with No Meat", price: "$11.00", photo: "/images/menu/aloha-food--pho-with-no-meat.jpg" },
      { name: "Plain Bubble Waffle", price: "$5.95", photo: "/images/menu/aloha-food--plain-bubble-waffle.jpg" },
      { name: "Spring Rolls", price: "$8.50", photo: "/images/menu/aloha-food--spring-rolls.jpg" },
    ],
  },
  {
    name: "Aloha Lemonade",
    items: [
      { name: "Dragonfruit green tea lemonade", price: "$6.95", photo: "/images/menu/aloha-lemonade--dragonfruit-green-tea-lemonade.jpg" },
      { name: "Mango Lemonade", price: "$6.95", photo: "/images/menu/aloha-lemonade--mango-lemonade.jpg" },
      { name: "Passionfruit Lemonade", price: "$6.95", photo: "/images/menu/aloha-lemonade--passionfruit-lemonade.jpg" },
      { name: "Pineapple Lemonade", price: "$6.95", photo: "/images/menu/aloha-lemonade--pineaaple-lemonade.jpg" },
      { name: "Strawberry Lemonade", price: "$6.95", photo: "/images/menu/aloha-lemonade--strawberry-lemonade.jpg" },
    ],
  },
  {
    name: "Cheese Foam Tea",
    items: [
      { name: "Japanese Uji Matcha Cheese Foam", price: "$7.25", photo: "/images/menu/cheese-foam-tea--japanese-uji-matcha-cheese-foam.jpg" },
      { name: "Chrysanthemum Green Oolong Cheese Foam", price: "$7.25", photo: "/images/menu/cheese-foam-tea--chrysanthemum-green-oolong-cheese-foam.jpg" },
      { name: "Brown Rice Roasted Oolong Cheese Foam", price: "$7.25", photo: "/images/menu/cheese-foam-tea--brown-rice-roasted-oolong-cheese-foam.jpg" },
      { name: "Dragonfruit Green Tea Cheese Foam", price: "$7.25", photo: "/images/menu/cheese-foam-tea--dragonfruit-green-tea-cheese-foam.jpg" },
      { name: "Matcha Roasted Rice Oolong Cheese Foam", price: "$7.25", photo: "/images/menu/cheese-foam-tea--matcha-roasted-rice-oolong-cheese-foam.jpg" },
      { name: "Hawaiian Bluemint Cheese Foam", price: "$7.25", photo: "/images/menu/cheese-foam-tea--hawaiian-bluemint-cheese-foam.jpg" },
      { name: "Earl Grey Premium Cheese Foam", price: "$7.25", photo: "/images/menu/cheese-foam-tea--earl-grey-premium-cheese-foam.jpg" },
      { name: "Oolong Cheese Foam", price: "$7.25", photo: "/images/menu/cheese-foam-tea--oolong-cheese-foam.jpg" },
      { name: "Black Chrysanthemum Oolong Cheese Foam", price: "$7.25", photo: "/images/menu/cheese-foam-tea--black-chrysanthemum-oolong-cheese-foam.jpg" },
      { name: "Peach Oolong Tea Cheese Foam", price: "$7.25", photo: "/images/menu/cheese-foam-tea--peach-oolong-tea-cheese-foam.jpg" },
      { name: "Lychee Green Tea Cheese Foam", price: "$7.25", photo: "/images/menu/cheese-foam-tea--lychee-green-tea-cheese-foam.jpg" },
      { name: "Rose Oolong Tea", price: "$7.25", photo: "/images/menu/cheese-foam-tea--rose-oolong-tea.jpg" },
      { name: "Jasmine Green Tea Cheese Foam", price: "$7.25", photo: "/images/menu/cheese-foam-tea--jasmine-green-tea-cheese-foam.jpg" },
      { name: "Mango Green Tea Cheese Foam", price: "$7.25", photo: "/images/menu/cheese-foam-tea--mango-green-tea-cheese-foam.jpg" },
      { name: "Oolong Tea Cheese Foam", price: "$6.75", photo: "/images/menu/cheese-foam-tea--oolong-tea-cheese-foam.jpg" },
    ],
  },
  {
    name: "Matcha",
    items: [
      { name: "Matcha Brown Sugar Milk", price: "$7.95", photo: "/images/menu/matcha--matcha-brown-sugar-milk.jpg" },
      { name: "Matcha Coconut Milk", price: "$7.95", photo: "/images/menu/matcha--matcha-coconut-milk.jpg" },
      { name: "Matcha Cream Coffee", price: "$7.95", photo: "/images/menu/matcha--matcha-cream-coffee.jpg" },
      { name: "Matcha Mango Coffee", price: "$7.95", photo: "/images/menu/matcha--matcha-mango-coffee.jpg" },
      { name: "Matcha Strawberry Latte", price: "$7.95", photo: "/images/menu/matcha--matcha-strawberry-latte.jpg" },
      { name: "Matcha Taro Latte", price: "$7.95", photo: "/images/menu/matcha--matcha-taro-latte.jpg" },
    ],
  },
  {
    name: "Milk Tea",
    items: [
      { name: "Aloha Milk Tea Original", price: "$5.75", photo: "/images/menu/milk-tea--aloha-milk-tea-original.jpg" },
      { name: "Blue Mint Milk Tea", price: "$5.75", photo: "/images/menu/milk-tea--blue-mint-milk-tea.jpg" },
      { name: "Brown Sugar + Creme Brulee (Pearls Included)", price: "$8.25", photo: "/images/menu/milk-tea--brown-sugar-creme-brulee-pearls-included.jpg" },
      { name: "Brown Sugar Milk Tea (Pearls Included)", price: "$6.75", photo: "/images/menu/milk-tea--brown-sugar-milk-tea-pearls-included.jpg" },
      { name: "Honeydew Milk Tea", price: "$5.75", photo: "/images/menu/milk-tea--honeydew-milk-tea.jpg" },
      { name: "Jasmine Milk Tea", price: "$5.75", photo: "/images/menu/milk-tea--jasmine-milk-tea.jpg" },
      { name: "Mango Milk Tea", price: "$5.75", photo: "/images/menu/milk-tea--mango-milk-tea.jpg" },
      { name: "Matcha Milk Tea", price: "$5.75", photo: "/images/menu/milk-tea--matcha-milk-tea.jpg" },
      { name: "Strawberry Milk Tea", price: "$5.75", photo: "/images/menu/milk-tea--strawberry-milk-tea.jpg" },
      { name: "Taro Milk Tea w/real Taro", price: "$5.75", photo: "/images/menu/milk-tea--taro-milk-tea-w-real-taro.jpg" },
    ],
  },
  {
    name: "Smoothie",
    items: [
      { name: "Oreo Smoothie", price: "$7.95", photo: "/images/menu/smoothie--oreo-smoothie.jpg" },
      { name: "Red Bean Smoothie", price: "$7.95", photo: "/images/menu/smoothie--red-bean-smoothie.jpg" },
      { name: "Strawberry Smoothie", price: "$7.95", photo: "/images/menu/smoothie--strawberry-smoothie.jpg" },
      { name: "Mango Smoothie", price: "$7.95", photo: "/images/menu/smoothie--mango-smoothie.jpg" },
      { name: "Avocado Smoothie", price: "$7.95", photo: "/images/menu/smoothie--avocado-smoothie.jpg" },
      { name: "Taro Smoothie", price: "$7.95", photo: "/images/menu/smoothie--taro-smoothie.jpg" },
      { name: "Mango Passionfruit Smoothie", price: "$7.95", photo: "/images/menu/smoothie--mango-passionfruit-smoothie.jpg" },
      { name: "Honeydew Smoothie", price: "$7.95", photo: "/images/menu/smoothie--honeydew-smoothie.jpg" },
      { name: "Strawberry Banana Smoothie", price: "$7.95", photo: "/images/menu/smoothie--strawberry-banana-smoothie.jpg" },
      { name: "Green Tea Matcha Smoothie", price: "$7.95", photo: "/images/menu/smoothie--green-tea-matcha-smoothie.jpg" },
      { name: "Strawberry Blueberry Smoothie", price: "$7.95", photo: "/images/menu/smoothie--strawberry-blueberry-smoothie.jpg" },
      { name: "Honeydew Pineapple Smoothie", price: "$7.95", photo: "/images/menu/smoothie--honeydew-pineapple-smoothie.jpg" },
      { name: "Mango Avocado Smoothie", price: "$7.95", photo: "/images/menu/smoothie--mango-avocado-smoothie.jpg" },
      { name: "Coconut Avocado Smoothie", price: "$7.95", photo: "/images/menu/smoothie--coconut-avocado-smoothie.jpg" },
      { name: "Avocado Durian Smoothie", price: "$10.50", photo: "/images/menu/smoothie--avocado-durian-smoothie.jpg" },
      { name: "Smash Avocado Durian", price: "$14.50", photo: "/images/menu/smoothie--smash-avocado-durian.jpg" },
      { name: "Smashed Avocado", price: "$10.50", photo: "/images/menu/smoothie--smashed-avocado.jpg" },
    ],
  },
  {
    name: "Coffee",
    items: [
      { name: "Original Vietnamese Coffee", price: "$5.25", photo: "/images/menu/coffee--original-vietnamese-coffee.jpg" },
      { name: "Vietnamese Cheese Foam Coffee", price: "$5.95", photo: "/images/menu/coffee--vietnamese-cheese-foam-coffee.jpg" },
      { name: "Coconut Cheese Foam Coffee", price: "$5.95", photo: "/images/menu/coffee--coconut-cheese-foam-coffee.jpg" },
      { name: "Caramel Cheese Foam Coffee", price: "$5.95", photo: "/images/menu/coffee--caramel-cheese-foam-coffee.jpg" },
      { name: "Bluemint Cheese Foam Coffee", price: "$5.95", photo: "/images/menu/coffee--bluemint-cheese-foam-coffee.jpg" },
      { name: "Vanilla Cheese Foam Coffee", price: "$5.95", photo: "/images/menu/coffee--vanilla-cheese-foam-coffee.jpg" },
      { name: "Mocha Cheese Foam Coffee", price: "$5.95", photo: "/images/menu/coffee--mocha-cheese-foam-coffee.jpg" },
      { name: "Irish Cream Cheese Foam Coffee", price: "$5.95", photo: "/images/menu/coffee--irish-cream-cheese-foam-coffee.jpg" },
      { name: "Hazelnut Cheese Foam Coffee", price: "$5.95", photo: "/images/menu/coffee--hazelnut-cheese-foam-coffee.jpg" },
      { name: "Chai Cheese Foam Coffee", price: "$5.95", photo: "/images/menu/coffee--chai-cheese-foam-coffee.jpg" },
    ],
  },
  {
    name: "Fruit Tea",
    items: [
      { name: "Exotic Tropical #1 Fruit Tea 24oz", price: "$7.95", photo: "/images/menu/fruit-tea--exotic-tropical-1-fruit-tea-24oz.jpg" },
      { name: "Island Spring Fruit Tea 24oz", price: "$7.95", photo: "/images/menu/fruit-tea--island-spring-fruit-tea-24oz.jpg" },
      { name: "Hawaiian Fever Fruit Tea", price: "$7.95", photo: "/images/menu/fruit-tea--hawaiian-fever-fruit-tea.jpg" },
      { name: "Purple Sunset Fruit Tea 24oz", price: "$7.95", photo: "/images/menu/fruit-tea--purple-sunset-fruit-tea-24oz.jpg" },
      { name: "Peachie Teasie Fruit Tea 24oz", price: "$7.95", photo: "/images/menu/fruit-tea--peachie-teasie-fruit-tea-24oz.jpg" },
      { name: "Icie Blue Berries Cheese Foam 24oz", price: "$7.95", photo: "/images/menu/fruit-tea--icie-blue-berries-cheese-foam-24oz.jpg" },
      { name: "Exotic Tropical #2 Fruit Tea 24oz", price: "$7.95", photo: "/images/menu/fruit-tea--exotic-tropical-2-fruit-tea-24oz.jpg" },
      { name: "Icie Lychee Cheese Foam 24oz", price: "$7.95", photo: "/images/menu/fruit-tea--icie-lychee-cheese-foam-24oz.jpg" },
      { name: "Icie Blue Moon Cheese Foam 24oz", price: "$7.95", photo: "/images/menu/fruit-tea--icie-blue-moon-cheese-foam-24oz.jpg" },
      { name: "Icie Strawberry Cheese Foam 24oz", price: "$7.95", photo: "/images/menu/fruit-tea--icie-strawberry-cheese-foam-24oz.jpg" },
      { name: "Exotic Tropical #3 Fruit Tea 24oz", price: "$7.95", photo: "/images/menu/fruit-tea--exotic-tropical-3-fruit-tea-24oz.jpg" },
      { name: "Icie Dragon fruit Cheese Foam 24oz", price: "$7.95", photo: "/images/menu/fruit-tea--icie-dragon-fruit-cheese-foam-24oz.jpg" },
      { name: "Icie Mango Cheese Foam 24oz", price: "$7.95", photo: "/images/menu/fruit-tea--icie-mango-cheese-foam-24oz.jpg" },
    ],
  },
  {
    name: "Tea",
    items: [
      { name: "Iced Tea L", price: "$6.25", photo: "/images/menu/tea--iced-tea-l.jpg" },
      { name: "Iced Tea M", price: "$5.25", photo: "/images/menu/tea--iced-tea-m.jpg" },
    ],
  },
  {
    name: "Dessert & Snack",
    items: [
      { name: "Fresh Coconut", price: "$6.00", photo: "/images/menu/dessert-snack--fresh-coconut.jpg" },
      { name: "Macaron", price: "$2.00", photo: "/images/menu/dessert-snack--macaron.jpg" },
    ],
  },
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
