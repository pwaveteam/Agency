'use client'
import { motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function BusinessFaqSection() {
const faqs = [
{
question: '홈페이지 제작',
answer: `브랜드의 목적과 방향에 맞춘 맞춤형 홈페이지를 제작합니다.
차별화된 디자인과 효율적인 구조로 경쟁력을 높이며 요구에 따라 빌더나 직접 개발 방식으로 유연하게 구축해
빠르고 합리적인 비용으로 완성도 높은 결과를 제공합니다.`,
},
{
question: 'MVP 개발',
answer: `단순한 의뢰형 개발이 아닌, 비즈니스 전략 전문가와 함께하는 실질적 설계 과정으로 시작합니다.
아이디어를 시장 검증이 가능한 형태로 구체화하고 MVP 기획부터 개발까지 함께 완성합니다.`,
},
{
question: '커스텀 개발',
answer: `필요한 기능과 서비스를 맞춤형으로 구현합니다.
웹 서비스부터 앱까지, 비즈니스 흐름에 맞춘 유연한 구조로 설계하며
최신 기술 스택과 안정적인 아키텍처를 기반으로 확장성과 유지보수성이 뛰어난 환경으로 구축합니다.`,
},
{
question: '유지보수 및 업데이트',
answer: `내부 개발 인력이 없는 기업도 안정적으로 운영할 수 있도록
전담 유지보수팀이 인건비 부담 없이 지속적인 관리와 업데이트를 지원합니다.`,
},
{
question: '웹 디자인/기획',
answer: `단순한 외형보다 본질을 디자인합니다.
사용자 경험과 브랜드 방향을 함께 고려해, 고객의 반응을 이끌어내는 결과물로 제공합니다.`,
},
]

return (
<section id="business" className="section-wrapper text-gray-900">
<motion.h2
initial={{ opacity: 0, x: -100 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.6, ease: 'easeOut' }}
viewport={{ once: true, amount: 0.3 }}
className="section-label"
>
What we do
</motion.h2>

<div className="flex justify-end">
<motion.div
initial={{ opacity: 0, x: 60 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.6, ease: 'easeOut' }}
viewport={{ once: true, amount: 0.3 }}
className="w-full max-w-[800px]"
>
<Accordion type="single" collapsible className="space-y-4">
{faqs.map((faq, i) => (
<motion.div
key={i}
initial={{ opacity: 0, x: 40 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
viewport={{ once: true, amount: 0.3 }}
>
<AccordionItem value={`item-${i}`} className="border-b border-gray-200">
<AccordionTrigger className="py-5">
<span className="flex-1 text-left">{faq.question}</span>
</AccordionTrigger>
<AccordionContent className="mt-4">
<p className="card-text whitespace-pre-line">{faq.answer}</p>
</AccordionContent>
</AccordionItem>
</motion.div>
))}
</Accordion>

</motion.div>
</div>
</section>
)
}