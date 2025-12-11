'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
const [isVideoLoaded, setIsVideoLoaded] = useState(false)
const { scrollY } = useScroll()
const scrollIndicatorOpacity = useTransform(scrollY, [0, 300], [1, 0])

useEffect(() => {
const iframe = document.querySelector<HTMLIFrameElement>('#heroVideo')
if (iframe) iframe.addEventListener('load', () => setIsVideoLoaded(true))
}, [])

return (
<section className="container-default mt-[100px] mb-[80px]">
<motion.div
id="mainBanner"
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 1, ease: 'easeOut' }}
className="relative h-[80vh] flex items-center justify-center text-center text-white font-sans overflow-hidden rounded-[36px] shadow-[0_10px_40px_rgba(0,0,0,0.25)] bg-black"
>
{!isVideoLoaded && (
<motion.div
initial={{ opacity: 1 }}
animate={{ opacity: 0 }}
transition={{ duration: 0.8, delay: 0.2 }}
className="absolute inset-0 z-[1] bg-black/80 backdrop-blur-xl rounded-[36px]"
/>
)}

<div className="absolute inset-0 overflow-hidden z-[0] rounded-[36px]">
<iframe
id="heroVideo"
src="https://player.vimeo.com/video/1129940842?background=1&autoplay=1&loop=1&muted=1&byline=0&title=0"
className="absolute top-1/2 left-1/2 w-full h-[56.25vw] min-h-full -translate-x-1/2 -translate-y-1/2"
allow="autoplay; fullscreen; picture-in-picture"
allowFullScreen
/>
</div>

<div className="relative z-[2] w-full px-4">
<motion.h2
initial={{ opacity: 0, y: 60 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, ease: 'easeOut' }}
viewport={{ once: true, amount: 0.3 }}
className="mainbanner-block mb-[30px]"
>
<span className="hidden md:inline">
비즈니스를 설계하고, 기술로 완성합니다.
</span>
<span className="md:hidden">
비즈니스를 설계하고,<br />
기술로 완성합니다.
</span>
</motion.h2>

<motion.p
initial={{ opacity: 0, y: 60 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
viewport={{ once: true, amount: 0.3 }}
className="service-summary mb-[40px]"
>
<span className="hidden md:inline">
아이디어 구상을 넘어, 실행 가능한 전략과 시장을 움직이는 프로덕트까지,<br />
퍼스는 단순 개발사가 아닌, 당신의 A to Z 비즈니스 파트너입니다.
</span>

<span className="md:hidden">
아이디어 구상을 넘어, 실행 가능한 전략과<br />
시장을 움직이는 프로덕트까지,<br />
퍼스는 단순 개발사가 아닌,<br />
당신의 A to Z 비즈니스 파트너입니다.
</span>
</motion.p>

<motion.div
initial={{ opacity: 0, y: 60 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
viewport={{ once: true, amount: 0.3 }}
className="text-center space-x-[20px]"
>
<Button
asChild
variant="primary"
className="md:w-auto max-md:w-full max-md:block [&>a]:max-md:block [&>a]:max-md:w-full max-md:mb-[12px]"
>
<a href="/contact">홈페이지 개발 문의</a>
</Button>

<Button
asChild
variant="whiteOutline"
className="md:w-auto max-md:w-full max-md:block [&>a]:max-md:block [&>a]:max-md:w-full"
>
<a href="/portfolio">포트폴리오 보기</a>
</Button>
</motion.div>
</div>

<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 1, delay: 1 }}
style={{ opacity: scrollIndicatorOpacity }}
className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-1.5 md:gap-2.5 max-md:hidden"
>
<span className="text-[10px] md:text-xs text-white/70 tracking-widest uppercase">Scroll</span>
<div className="w-5 h-9 md:w-5 md:h-9 border border-white/40 rounded-full relative overflow-hidden">
<motion.div
animate={{ y: ['0%', '30%', '0%'] }}
transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
className="absolute top-1 md:top-1 left-1/2 -translate-x-1/2 w-px h-2 md:h-2 bg-white/80 rounded-full"
/>
</div>
<motion.div
animate={{ y: ['0%', '15%', '0%'] }}
transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
className="w-px h-12 md:h-16 bg-gradient-to-b from-white/60 to-transparent"
/>
</motion.div>

</motion.div>
</section>
)
}