import { About } from "@/components/sections/about"
import { GiftLoyalty } from "@/components/sections/gift-loyalty"
import { Hero } from "@/components/sections/hero"
import { Locations } from "@/components/sections/locations"

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <GiftLoyalty />
      <Locations />
    </>
  )
}
