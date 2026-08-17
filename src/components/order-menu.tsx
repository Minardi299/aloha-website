import { ChevronDownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LOCATIONS } from "@/lib/site"

export function OrderMenu({ size }: { size?: "sm" | "lg" }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button size={size} />}>
        Order now
        <ChevronDownIcon data-icon="inline-end" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          {LOCATIONS.map((location) => (
            <DropdownMenuItem
              key={location.name}
              render={
                <a href={location.orderUrl} target="_blank" rel="noreferrer" />
              }
            >
              {location.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
