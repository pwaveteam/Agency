'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FloatingButtons() {
const [showScrollTop, setShowScrollTop] = useState(false)

useEffect(() => {
const handleScroll = () => {
setShowScrollTop(window.scrollY > 300)
}
window.addEventListener('scroll', handleScroll)
return () => window.removeEventListener('scroll', handleScroll)
}, [])

const scrollToTop = () => {
window.scrollTo({ top: 0, behavior: 'smooth' })
}

return (
<div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[9999] flex flex-col items-center gap-2 md:gap-3">
<AnimatePresence>
{showScrollTop && (
<motion.button
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
transition={{ duration: 0.4 }}
onClick={scrollToTop}
className="w-10 h-10 md:w-13 md:h-13 bg-neutral-600 rounded-xl flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:bg-neutral-800 transition-all duration-300 cursor-pointer"
>
<span className="text-[10px] md:text-xs font-semibold text-white tracking-wide">TOP</span>
</motion.button>
)}
</AnimatePresence>

<a 
href="http://pf.kakao.com/_DsxbPG/chat" 
target="_blank" 
rel="noopener noreferrer" 
className="w-10 h-10 md:w-13 md:h-13 bg-[#FEE500] rounded-xl flex items-center justify-center shadow-[0_2px_8px_rgba(254,229,0,0.3)] hover:shadow-[0_4px_16px_rgba(254,229,0,0.4)] hover:rotate-[8deg] origin-bottom-right transition-all duration-300 cursor-pointer"
>
<svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6" fill="#3C1E1E">
<path d="M12 3C6.48 3 2 6.58 2 11c0 2.8 1.86 5.25 4.64 6.67-.15.56-.54 2.03-.62 2.34-.1.39.14.39.3.28.12-.08 1.94-1.32 2.73-1.86.62.09 1.26.14 1.95.14 5.52 0 10-3.58 10-8s-4.48-8-10-8z" />
</svg>
</a>
</div>
)
}