import * as React from "react"
import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
({ className, ...props }, ref) => {
return (
<textarea
ref={ref}
className={cn(
"flex min-h-[120px] w-full rounded-md border border-neutral-300 bg-white/80 px-3 py-2 text-[15px] text-[#333] transition-colors placeholder:text-neutral-400",
"focus-visible:outline-none focus-visible:border-[#003090] focus-visible:ring-1 focus-visible:ring-[#003090]",
"disabled:cursor-not-allowed disabled:opacity-50",
"file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[#333]",
"dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200 dark:placeholder:text-neutral-500",
"md:text-sm",
className
)}
{...props}
/>
)
}
)
Textarea.displayName = "Textarea"

export { Textarea }