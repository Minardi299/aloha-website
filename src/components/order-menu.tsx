import { ChevronDownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useI18n } from "@/lib/i18n"
import { LOCATIONS } from "@/lib/site"

export function OrderMenu({ size }: { size?: "sm" | "lg" }) {
  const { t } = useI18n()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button size={size} />}>
        {t.orderNow}
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
