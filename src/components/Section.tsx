import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

interface SectionProps {
  id: string
  eyebrow?: string
  title: string
  description?: string
  children: ReactNode
  className?: string
}

export function Section({ id, eyebrow, title, description, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-20 py-12 sm:py-24", className)}>
      <div className="container">
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
          {eyebrow && (
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
              {eyebrow}
            </p>
          )}
          <h2 className="text-2xl font-bold xs:text-3xl sm:text-4xl">{title}</h2>
          {description && (
            <p className="mt-3 text-muted-foreground">{description}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  )
}
