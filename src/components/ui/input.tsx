"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
({ className, type, ...props }, ref) => {
return (
<input
type={type}
ref={ref}
className={cn(
"flex h-9 w-full rounded-md border border-neutral-300 bg-white/80 px-3 py-1 text-[15px] text-[#333] transition-colors placeholder:text-neutral-400",
"focus-visible:outline-none focus-visible:border-[#003090] focus-visible:ring-1 focus-visible:ring-[#003090]",
"disabled:cursor-not-allowed disabled:opacity-50",
"file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[#333]",
"dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200 dark:placeholder:text-neutral-500",
"dark:focus-visible:border-[#80aaff] dark:focus-visible:ring-[#80aaff]",
"md:text-sm",
className
)}
{...props}
/>
)
}
)
Input.displayName = "Input"

export { Input }