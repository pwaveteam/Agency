'use client'
import { motion } from 'framer-motion'

export default function PlanSection() {
const plans=[
{name:'랜딩페이지',info:'기업 · 브랜드의 핵심 가치와 메시지를 명확히 전달하는 프로모션 중심 랜딩페이지 제작',price:'100만원~',list:['반응형 웹 구축','개발기획 및 설계','무료 스톡 이미지 포함','문의폼 및 고객상담 채널','검색 노출 최적화(SEO)','호스팅 SSL: 6개월 무료']},
{name:'자사몰/기업 홈페이지',info:'결제 · 예약 · 회원관리 등 핵심 비즈니스 기능을 구현하고 브랜드 신뢰도를 강화하는 공식 웹사이트 및 자사몰 구축',price:'300만원~',best:true,list:['반응형 웹 구축','개발기획 및 설계','결제, 예약, 회원관리 등 핵심 기능','기본 관리자 페이지 구축','검색 노출 최적화(SEO)','호스팅 SSL: 1년 무료']},
{name:'시스템 개발',info:'SaaS · ERP · AI · API 연동 등 고도화된 기능을 포함한 MVP 및 플랫폼 개발',price:'별도 협의',highlight:true,list:['서비스 전체 구조 및 시스템 아키텍처 설계','모바일 앱(안드로이드, iOS) 개발','외부 시스템 및 API 연동, 맞춤형 기능 개발','전담 PM 배정 및 QA(품질 관리)']}
]

return(
<section id="plan" className="relative text-white overflow-hidden" style={{backgroundImage:"url('https://i.imgur.com/5gkMDob.jpeg')",backgroundPosition:'center',backgroundSize:'cover'}}>
<div className="section-wrapper">
<div className="mb-[60px] text-left">
<motion.h2 initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}} transition={{duration:0.6,ease:'easeOut'}} viewport={{once:true,amount:0.3}} className="section-label-w">PLAN</motion.h2>
<motion.p initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.6,delay:0.15,ease:'easeOut'}} viewport={{once:true,amount:0.3}} className="section-heading-w">부담없이 시작하는 합리적인 제작 플랜</motion.p>
<motion.p
  initial={{opacity:0,y:60}}
  whileInView={{opacity:1,y:0}}
  transition={{duration:0.6,delay:0.3,ease:'easeOut'}}
  viewport={{once:true,amount:0.3}}
  className="section-description-w"
>
  <span className="hidden md:inline">
    초기 투자 부담은 낮추고, 단계에 맞게 선택할 수 있는 플랜<br/>
    가볍게 시작해도, 원하는 결과로 이어집니다.
  </span>
  <span className="md:hidden">
    초기 투자 부담은 낮추고, 단계에 맞게<br/>
    선택할 수 있는 플랜<br/>
    가볍게 시작해도, 원하는 결과로 이어집니다.
  </span>
</motion.p></div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px]">
{plans.map((plan,i)=>(
<motion.div
key={i}
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6,delay:i*0.15,ease:'easeOut'}}
viewport={{once:true,amount:0.3}}
whileHover={{y:-6,scale:1.01,transition:{duration:0.4,ease:'easeOut'}}}
className="relative flex flex-col bg-white/15 backdrop-blur-xl border border-white/10 rounded-[28px] overflow-hidden shadow-[0_6px_24px_rgba(0,0,0,0.2)] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] hover:shadow-[0_10px_40px_rgba(255,255,255,0.1)] min-h-[520px]"
>
<div className="bg-white text-black px-[32px] pt-[38px] pb-[30px] text-left rounded-t-[28px] flex flex-col justify-between min-h-[250px]">
<div>
<div className="flex items-center justify-between mb-[12px]">
<div className="card-topic">{plan.name}</div>
{plan.best&&(
<motion.div animate={{opacity:[0.7,1,0.7],scale:[1,1.08,1]}} transition={{duration:1.8,repeat:Infinity,ease:'easeInOut'}} className="bg-[#003090] text-white text-[12px] font-medium px-[12px] py-[4px] rounded-full shadow-md">BEST</motion.div>
)}
</div>
<p className="card-text mb-[16px] min-h-[60px]" dangerouslySetInnerHTML={{__html:plan.info}}/>
</div>
<div className={`card-topic ${plan.highlight?'text-[#0d6efd]':'text-[#003090]'}`}>{plan.price}</div>
</div>

<div className="flex-1 px-[32px] pt-[22px] pb-[30px] bg-gradient-to-b from-white/10 to-transparent flex flex-col justify-between">
<ul className="card-text-w space-y-[8px] min-h-[200px]">
{plan.list.map((item,j)=>(
<li key={j} className="transition-all duration-300 hover:text-white hover:translate-x-[4px]">{item}</li>
))}
</ul>
</div>
</motion.div>
))}
</div>
</div>
</section>
)
}