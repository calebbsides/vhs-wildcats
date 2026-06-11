import { Heart } from "lucide-react"

import { Button, type ButtonProps } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { PaymentMethods } from "@/components/PaymentMethods"

/**
 * A donate button that opens a modal listing all payment methods (PayPal,
 * Cash App, Venmo, Mail a Check) instead of jumping straight to one service.
 */
export function DonateButton({
  label = "Donate Now",
  title = "Support the Wildcats",
  ...buttonProps
}: {
  label?: string
  /** Modal heading. */
  title?: string
} & ButtonProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="px-10 text-base" {...buttonProps}>
          <Heart className="h-5 w-5" />
          {label}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <p className="text-sm text-muted-foreground">
          Choose how you'd like to give — every gift supports Valdosta Wildcats football.
        </p>
        <PaymentMethods />
      </DialogContent>
    </Dialog>
  )
}
