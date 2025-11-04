"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"
import { cn } from "@/lib/utils"

function Checkbox({
className,
...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
return (
<CheckboxPrimitive.Root
data-slot="checkbox"
className={cn(
"peer size-5 shrink-0 rounded-[4px] border border-neutral-300 bg-white/80 outline-none transition-all duration-200 ease-out cursor-pointer",
"data-[state=checked]:bg-[#003090] data-[state=checked]:border-[#003090] data-[state=checked]:text-white",
"focus-visible:ring-2 focus-visible:ring-[#003090]/40 focus-visible:border-[#003090]",
"disabled:cursor-not-allowed disabled:opacity-50",
className
)}
{...props}
>
<CheckboxPrimitive.Indicator
data-slot="checkbox-indicator"
className="grid place-content-center text-current transition-all duration-200 ease-in-out data-[state=checked]:scale-100 data-[state=unchecked]:scale-90"
>
<CheckIcon className="size-4 stroke-[3.5]" />
</CheckboxPrimitive.Indicator>
</CheckboxPrimitive.Root>
)
}

export { Checkbox }