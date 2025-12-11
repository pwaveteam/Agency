'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ProcessSection() {
const steps = [
{
step: 'STEP 1',
title: '상담 및 계약',
desc: '프로젝트의 방향성과 목적을 확인하고 견적 및 일정을 확정합니다.',
},
{
step: 'STEP 2',
title: '기획 및 자료 공유',
desc: '프로젝트 방향과 레퍼런스를 확인하며 기획안을 구성하고 자료를 공유받습니다.',
},  
{
step: 'STEP 3',
title: '시안 제작 및 피드백',
desc: '제작될 사이트의 시안을 구성하고, 피드백에 따라 수정이 이루어집니다.',
},
{
step: 'STEP 4',
title: '개발 착수',
desc: '확정된 시안을 바탕으로 본격적인 개발을 시작합니다.',
},
{
step: 'STEP 5',
title: '테스트 및 품질 점검',
desc: '기능과 반응형, 브라우저 호환성 등을 종합적으로 테스트합니다.',
},
{
step: 'STEP 6',
title: '배포 및 유지보수',
desc: '도메인 연결, 세팅을 완료하고 사이트를 배포하며, 이후 유지보수 서비스를 제공합니다.',
},
]

const ref = useRef<HTMLDivElement | null>(null)
const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
const y1 = useTransform(scrollYProgress, [0, 1], ['-30px', '30px'])
const y2 = useTransform(scrollYProgress, [0, 1], ['20px', '-20px'])

return (

<section id="process" className="w-full text-gray-900 overflow-hidden">
<div ref={ref} className="section-wrapper">
<div className="text-left mb-[60px]">
<motion.h2
initial={{ opacity: 0, x: -100 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.6, ease: 'easeOut' }}
viewport={{ once: true, amount: 0.3 }}
className="section-label"
>
Flow
</motion.h2>
<motion.p
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
viewport={{ once: true, amount: 0.3 }}
className="section-heading text-left"
>
효율성과 체계를 갖춘 제작 과정
</motion.p>
<motion.p
initial={{ opacity: 0, y: 60 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
viewport={{ once: true, amount: 0.3 }}
className="section-description text-left"
>
<span className="hidden md:inline">
과정마다 고객의 의견을 세심히 반영하며 완성도를 높여갑니다.<br />
각 단계에서 방향을 확인하고, 결과에 집중합니다.
</span>
<span className="md:hidden">
과정마다 고객의 의견을 세심히 반영하며<br />
완성도를 높여갑니다.<br />
각 단계에서 방향을 확인하고, 결과에 집중합니다.
</span>
</motion.p>
</div>

<motion.div
style={{ y: y1 }}
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] mt-[60px]"
>
{steps.map((item, i) => (
<motion.div
key={i}
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
viewport={{ once: true, amount: 0.3 }}
whileHover={{
scale: 1.03,
transition: { duration: 0.4, ease: 'easeOut' },
}}
className="group bg-white/60 backdrop-blur-md border border-gray-200 rounded-2xl p-10 flex flex-col justify-between h-full transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] hover:border-primary/20"
>
<motion.div
style={{ y: y2 }}
className="flex flex-col items-start text-left w-full gap-3"
>
<div className="flex items-center justify-start gap-3">
<div className="flex items-center justify-center px-4 py-[6px] rounded-full border border-primary/20 text-primary text-[13px] font-medium tracking-tight transition-all duration-500 group-hover:border-primary group-hover:text-primary">
{item.step}
</div>
<h6 className="card-topic group-hover:text-primary transition-colors duration-300">
{item.title}
</h6>
</div>

<p className="card-text mt-2 group-hover:text-gray-800 transition-colors duration-300">
{item.desc}
</p>
</motion.div>
</motion.div>
))}
</motion.div>
</div>
</section>
)
}