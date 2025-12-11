'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function AboutSection() {
return (
<section id="about" className="relative overflow-hidden text-gray-900 bg-transparent">
<div className="section-wrapper relative z-10 text-center">
<motion.h2
initial={{ opacity: 0, x: -100 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.6, ease: 'easeOut' }}
viewport={{ once: true, amount: 0.3 }}
className="section-label"
>
About
</motion.h2>

<motion.p
initial={{ opacity: 0, y: 80 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
viewport={{ once: true, amount: 0.3 }}
className="section-heading"
>
사업의 본질에 집중하는 전문가팀
</motion.p>

<motion.p
initial={{ opacity: 0, y: 80 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
viewport={{ once: true, amount: 0.3 }}
className="section-description"
>
<span className="hidden md:inline">
시장에 개발사는 많지만, 든든한 비즈니스 파트너를 찾는다면 퍼스가 정답입니다.<br />
화려한 미사여구보다 견고한 결과물로 증명합니다.
</span>
<span className="md:hidden">
시장에 개발사는 많지만,<br />
든든한 비즈니스 파트너를 찾는다면<br />
퍼스가 정답입니다.<br />
화려한 미사여구보다 견고한 결과물로 증명합니다.
</span>
</motion.p>

<motion.div
initial={{ opacity: 0, y: 60 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
viewport={{ once: true, amount: 0.3 }}
className="flex justify-center"
>
<Button
asChild
variant="primary"
className="text-[16px] rounded-[10px] px-[33px] py-[15px] transition-transform duration-500 hover:-translate-y-[3px]"
>
<a href="#portfolio">포트폴리오 보기</a>
</Button>

</motion.div>
</div>
</section>
)
}