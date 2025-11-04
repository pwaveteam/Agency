import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[10px] text-[16px] font-semibold tracking-[-0.03em] leading-[1.3] transition-colors duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring",
{
variants: {
variant: {
primary: "bg-primary text-white hover:bg-[var(--midnight)]",
whiteOutline: "border border-white text-white bg-transparent hover:bg-white/30",
dark: "bg-black text-white hover:bg-[#333]",
default: "bg-gray-100 text-gray-800 hover:bg-gray-200",
grayOutline: "border border-[#aaa] text-[#999] bg-white hover:border-[#999] hover:text-[#666]",
},
size: {
default: "px-[33px] py-[15px]",
sm: "px-[26px] py-[12px] text-[15px]",
lg: "px-[40px] py-[18px] text-[18px]",
},
},
defaultVariants: { variant: "primary", size: "default" },
}
)

function Button({
className,
variant,
size,
asChild = false,
...props
}: React.ComponentProps<"button"> &
VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
const Comp = asChild ? Slot : "button"
return (
<Comp
data-slot="button"
className={cn(buttonVariants({ variant, size }), className)}
{...props}
/>
)
}

export { Button, buttonVariants }