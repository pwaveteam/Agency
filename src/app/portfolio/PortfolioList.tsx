'use client'
import Link from'next/link'
import{motion}from'framer-motion'
import Image from'next/image'
import{useState}from'react'
import{portfolioData}from'./data/portfolioData'
import{Button}from'@/components/ui/button'

export default function PortfolioList(){
const[showAll,setShowAll]=useState(false)
const sortedData=[...portfolioData].sort((a,b)=>b.id-a.id)
const displayedData=showAll?sortedData:sortedData.slice(0,6)
return(
<section className="section-wrapper pt-3">
<motion.div initial={{opacity:0,y:40}}animate={{opacity:1,y:0}}transition={{duration:0.8,ease:'easeOut'}}>
<div className="text-left mb-12 flex flex-col items-start gap-4">
<div className="relative w-14 h-14">
<div className="absolute inset-0 rounded-full border-[3px] border-primary/30"/>
<div className="absolute inset-0 rounded-full border-[3px] border-t-primary border-r-transparent border-b-transparent border-l-transparent animate-spin"/>
</div>
<div>
<h2 className="section-heading !text-left !mb-[10px]">PORTFOLIO</h2>
<p className="section-description !text-left !mb-[30px]">기획부터 디자인, 개발까지 완성도 높은 웹사이트 제작 사례를 소개합니다.</p>
</div>
</div>
<motion.div initial={{opacity:0,y:50}}animate={{opacity:1,y:0}}transition={{duration:1,delay:0.3,ease:'easeOut'}}className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
{displayedData.map(item=>(
<Link key={item.id}href={`/portfolio/${item.id}`}>
<motion.div initial={{opacity:0,y:40}}animate={{opacity:1,y:0}}transition={{duration:0.6,delay:0.05*item.id,ease:'easeOut'}}className="group relative bg-white rounded-[14px] overflow-hidden border border-gray-200 transition-all duration-500 cursor-pointer hover:shadow-[0_8px_20px_rgba(0,0,0,0.05)]">
<div className="relative w-full aspect-[16/9] overflow-hidden">
<Image src={item.thumbnail}alt={item.theme}fill className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-[1.05]"/>
</div>
<div className="p-[20px] text-left">
<span className="inline-block text-primary bg-primary/10 text-[13px] md:text-[15px] font-medium px-[10px] md:px-[13px] py-[2px] md:py-[3px] rounded-full mb-[8px] md:mb-[10px] leading-tight tracking-tight">{item.theme}</span>
<p className="text-[13px] md:text-[14px] text-gray-600 leading-snug">{item.summary}</p>
</div>
</motion.div>
</Link>
))}
</motion.div>
{!showAll&&sortedData.length>6&&(
<div className="flex justify-center mt-18">
<Button variant="grayOutline"onClick={()=>setShowAll(true)}className="px-[30px] py-[11px] text-[15px]">더보기</Button>
</div>
)}
</motion.div>
</section>
)}