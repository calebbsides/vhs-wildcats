import * as React from "react"
import { Heart } from "lucide-react"

import { Button, type ButtonProps } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DonorInfoForm, type DonorInfo } from "@/components/DonorInfoForm"
import { PaymentMethods } from "@/components/PaymentMethods"

/**
 * A donate button that opens a modal. Before any payment method is shown we
 * gather the donor's name, email, and mailing address so every gift can be
 * receipted and acknowledged. Only after that form is submitted do the payment
 * options (PayPal, Cash App, Venmo, Mail a Check) appear.
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
  const [open, setOpen] = React.useState(false)
  const [donor, setDonor] = React.useState<DonorInfo | null>(null)

  // Reset back to the info step whenever the modal closes so each visit starts fresh.
  function handleOpenChange(next: boolean) {
    setOpen(next)
    if (!next) setDonor(null)
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
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
        {donor ? (
          <>
            <p className="text-sm text-muted-foreground">
              Thanks, {donor.name.split(" ")[0]}! Choose how you'd like to give — every gift
              supports Valdosta Wildcats football.
            </p>
            <PaymentMethods />
          </>
        ) : (
          <DonorInfoForm onSubmit={setDonor} />
        )}
      </DialogContent>
    </Dialog>
  )
}
