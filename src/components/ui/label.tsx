"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cn } from "@/lib/utils"

function Label({
className,
...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
return (
<LabelPrimitive.Root
data-slot="label"
className={cn(
"flex items-center gap-2 text-[15px] font-medium text-[#333] leading-none select-none cursor-pointer mb-[6px]",
"group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50",
"peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
className
)}
{...props}
/>
)
}

export { Label }