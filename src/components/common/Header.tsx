'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const menus = [
{ name: '서비스 소개', href: '/service' },
{ name: '포트폴리오', href: '/portfolio' },
]

export default function Header() {
const pathname = usePathname()
const isActive = useCallback((href: string) => pathname === href, [pathname])
const [isScrolled, setIsScrolled] = useState(false)
const [isOpen, setIsOpen] = useState(false)

useEffect(() => {
const handleScroll = () => setIsScrolled(window.scrollY > 10)
window.addEventListener('scroll', handleScroll)
return () => window.removeEventListener('scroll', handleScroll)
}, [])

useEffect(() => {
if (isOpen) {
const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
document.body.style.overflow = 'hidden'
document.body.style.paddingRight = `${scrollBarWidth}px`
} else {
document.body.style.overflow = 'auto'
document.body.style.paddingRight = '0px'
}
}, [isOpen])

return (
<header
className={`fixed top-0 left-0 z-[9999] w-full transition-all duration-500 ${
isScrolled
? 'bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)] border-b border-gray-200/70'
: 'bg-white border-b border-transparent'
}`}
>
<div className="container-default px-4 md:px-8">
<div className="flex h-[80px] items-center justify-between">
<Link href="/" className="flex items-center ml-[2px]" aria-label="홈으로 이동">
<Image src="/logo.svg" alt="펄스웨이브 로고" width={100} height={30} priority />
</Link>
<nav className="hidden md:flex items-center gap-[30px]">
{menus.map(menu => (
<Link
key={menu.href}
href={menu.href}
className={`text-base font-medium transition-all duration-250 focus:outline-none ${
isActive(menu.href) ? 'text-[#003090]' : 'text-gray-700 hover:text-[#003090]'
}`}
>
{menu.name}
</Link>
))}
<div className="pl-[8px] flex items-center gap-2">
<Button asChild variant="primary" className="px-[23px] py-[11px] text-[15px]">
<Link href="/contact">문의하기</Link>
</Button>
</div>
</nav>
<div className="md:hidden flex items-center gap-2">
<button
type="button"
aria-label="메뉴 토글"
onClick={() => setIsOpen(p => !p)}
className="relative flex items-center justify-center w-[32px] h-[32px] flex-shrink-0 overflow-hidden z-[10000]"
>
{isOpen ? (
<X size={22} strokeWidth={2} className="absolute text-gray-800" />
) : (
<Menu size={22} strokeWidth={2} className="absolute text-gray-800" />
)}
</button>
</div>
</div>
</div>
<AnimatePresence>
{isOpen && (
<motion.div
initial={{ y: -15, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
exit={{ y: -10, opacity: 0 }}
transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
className="absolute top-[80px] left-0 w-full bg-white/95 backdrop-blur-sm border-t border-gray-200/70 z-[9998] shadow-[0_6px_16px_rgba(0,0,0,0.08)]"
>
<div className="flex flex-col px-5 py-8 gap-6 ml-[2px]">
{menus.map(menu => (
<Link
key={menu.href}
href={menu.href}
onClick={() => setIsOpen(false)}
className={`text-[15px] md:text-[18px] font-medium transition-colors duration-200 ${
isActive(menu.href) ? 'text-[#003090]' : 'text-[#565C6B] hover:text-[#003090]'
}`}
>
{menu.name}
</Link>
))}
<Button asChild variant="primary" className="w-full mt-2 py-[11px] text-[15px]">
<Link href="/contact" onClick={() => setIsOpen(false)}>
문의하기
</Link>
</Button>
</div>
</motion.div>
)}
</AnimatePresence>
</header>
)
}