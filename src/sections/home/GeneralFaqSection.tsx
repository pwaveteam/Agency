'use client'
import { motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function GeneralFaqSection() {
const faqs = [
{
question: '기획이 없어도 가능한가요?',
answer:
'네. 아이디어나 대략적인 방향만 있으셔도 괜찮습니다. 홈페이지 제작의 경우, 빌더로 간결하게 제작할 수 있는지부터 현실적으로 판단해드리고, 불필요한 부분은 줄여 최대한 효율적으로 진행할 수 있도록 제안드립니다. 서비스 목적과 사용자 흐름 중심으로 기획을 함께 정리해드립니다.',
},
{
question: 'MVP도 제작 가능한가요?',
answer:
'가능합니다. 빠른 검증과 투자 준비를 위한 최소 기능 중심의 프로토타입을 설계해드립니다. 단순한 개발을 넘어, 서비스가 시장에서 어떻게 작동할지를 함께 고민하며 현실적인 실행 방향을 제안드립니다.',
},
{
question: '디자인도 같이 진행해주나요?',
answer:
'네. 디자인 파일을 제공하셔도 되고, 저희 UX/UI팀이 처음부터 설계까지 맡을 수도 있습니다. 브랜드 이미지와 사용자 경험을 조화롭게 반영해 완성도 높은 결과물을 만들어드립니다.',
},
{
question: '유지보수는 어떻게 진행되나요?',
answer:
'오픈 후 일정 기간 무상 유지보수를 제공하며, 이후에는 월 단위나 단발성 등 원하는 형태로 지속 지원이 가능합니다. 내부에서 직접 관리하셔도 되고, 저희가 장기 파트너로 함께 운영을 맡을 수도 있습니다.',
},
{
question: '개발 후 직접 관리할 수 있나요?',
answer:
'가능합니다. 관리자 페이지(CMS)를 함께 구축하고 사용법을 안내해드립니다. 별도의 개발 지식이 없어도 콘텐츠 수정이나 이미지 교체가 가능하며, 필요 시 지속적인 지원도 받을 수 있습니다.',
},
{
question: '홈페이지를 계속 운영하고 확장하고 싶다면요?',
answer:
'가능합니다. 초기 구축 이후에도 콘텐츠 추가, 구조 개선, 새로운 서비스 확장 등 단계별 운영을 함께 도와드립니다. 단기 완성보다 장기적인 성장과 업데이트 흐름을 함께 고민하는 방식으로 진행합니다.',
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
FAQ
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