import { About } from "@/components/sections/about"
import { GiftLoyalty } from "@/components/sections/gift-loyalty"
import { Hero } from "@/components/sections/hero"
import { Locations } from "@/components/sections/locations"
import { Pho } from "@/components/sections/pho"
import { Signature } from "@/components/sections/signature"

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Signature />
      <Pho />
      <GiftLoyalty />
      <Locations />
    </>
  )
}
