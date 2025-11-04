'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ClipboardList, Wallet, Wrench, TrendingUp } from 'lucide-react'

export default function Core() {
const valueRef=useRef<HTMLDivElement|null>(null)
const isValueInView=useInView(valueRef,{once:true,margin:'-100px'})

const values=[
{icon:<ClipboardList size={42} strokeWidth={1.6}/>,title:'Professional',desc:'기획 단계부터 IR 전략 UX 개발 전문가가 함께 참여해 시장과 사용자의 관점을 통합한 실질적인 전략을 세웁니다 각 분야의 전문성을 바탕으로 비즈니스 목표에 맞는 실행 방향을 제시합니다.'},
{icon:<Wallet size={42} strokeWidth={1.6}/>,title:'Efficient',desc:'불필요한 개발비를 최소화하고 프로젝트 목적에 가장 적합한 노코드 또는 커스텀 개발 방식을 제안합니다 효율적인 자원 운용과 체계적인 실행으로 비용과 리스크를 최소화합니다'},
{icon:<Wrench size={42} strokeWidth={1.6}/>,title:'Sustainable',desc:'지속 가능한 구조로 유지비 부담을 줄이고 장기적인 운영 효율을 높입니다 개발 이후 충분한 기간의 무상 유지보수를 제공하며 이후에는 정기 또는 건별 유지보수 서비스를 통해 안정적인 운영을 지속적으로 지원합니다'},
{icon:<TrendingUp size={42} strokeWidth={1.6}/>,title:'Scalable',desc:'스타트업부터 커스텀 비즈니스까지 단계와 규모에 맞게 설계합니다 초기에는 MVP 구축과 시장 검증에 집중하고 성장 단계에서는 투자와 확장을 고려한 구조적 접근으로 개발 자산이 실제 비즈니스 성과로 이어지도록 만듭니다'}
]

return(
<section className="relative w-full text-white overflow-hidden pb-[100px] font-[Pretendard]">
<div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] pointer-events-none">
<div className="absolute inset-0 rounded-full border-t-[2px] border-[#6fb6ff]/60 border-l-transparent border-r-transparent border-b-transparent opacity-70 animate-spin-slow"/>
</div>

<style jsx global>{`
@keyframes spin-slow{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}
.animate-spin-slow{animation:spin-slow 6s linear infinite;}
.section-wrapper{width:100%;max-width:1300px;margin:0 auto;padding:160px 32px;}
`}</style>

<div ref={valueRef} className="relative overflow-hidden">
<div className="section-wrapper flex flex-col md:flex-row items-center justify-between gap-20 relative z-10">
<div className="md:w-[45%] text-center space-y-6">
<motion.h2
initial={{opacity:0,x:-80}}
animate={isValueInView?{opacity:1,x:0}:{}}
transition={{duration:0.7,ease:'easeOut'}}
className="section-label-w"
>
Our Value
</motion.h2>

<motion.p
initial={{opacity:0,y:40}}
animate={isValueInView?{opacity:1,y:0}:{}}
transition={{duration:0.6,delay:0.15,ease:'easeOut'}}
className="section-description-w"
>
전략, 기획, 디자인, 개발이 한 구조 안에서 움직이며,<br/>가장 효율적인 방법으로 브랜드의 성장을 실현합니다
</motion.p>
</div>

<motion.div
className="md:w-[55%] flex flex-col gap-8"
initial="hidden"
animate={isValueInView?"visible":"hidden"}
variants={{
hidden:{},
visible:{
transition:{staggerChildren:0.15}
}
}}
>
{values.map((v,i)=>(
<motion.div
key={i}
variants={{
hidden:{opacity:0,x:80},
visible:{opacity:1,x:0}
}}
transition={{duration:0.6,ease:'easeOut'}}
className="flex items-start gap-6"
>
<div className="text-[#6fb6ff]">{v.icon}</div>
<div>
<h3 className="text-[28px] font-semibold text-[#6fb6ff] mb-2 tracking-[-0.02em]">{v.title}</h3>
<p className="description-w">{v.desc}</p>
</div>
</motion.div>
))}
</motion.div>
</div>
</div>
</section>
)
}