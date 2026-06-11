import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        default: "border-transparent gold-gradient text-wildcat-black",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        outline: "text-foreground border-wildcat-gold/40",
        win: "border-transparent bg-green-600/20 text-green-400",
        loss: "border-transparent bg-red-600/20 text-red-400",
        tie: "border-transparent bg-zinc-600/30 text-zinc-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
