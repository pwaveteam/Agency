'use client'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function PortfolioDetails() {
const { id } = useParams()
const router = useRouter()
const item = portfolioData.find(p => p.id === Number(id))

if (!item)
return (
<div className="py-40 text-center text-gray-500">
해당 포트폴리오를 찾을 수 없습니다.
</div>
)

return (
<section className="section-wrapper py-20">
<motion.div
initial={{ opacity: 0, y: 40 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
className="max-w-6xl mx-auto px-4"
>
<button
onClick={() => router.push('/portfolio')}
className="mb-10 inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors cursor-pointer"
>
<ArrowLeft size={19} strokeWidth={1.9} />
<span className="text-[16px] font-medium">목록으로</span>
</button>

<div className="flex flex-wrap justify-between items-start gap-[100px] mb-[80px]">
<div className="flex-1 min-w-[320px]">
<span className="inline-block text-primary bg-primary/10 text-[15px] font-medium px-[13px] py-[3px] rounded-full mb-3 leading-tight tracking-tight">
{item.theme}
</span>

<p className="text-[18px] text-[#555] mb-8">{item.summary}</p>

<div className="mb-13">
<h3 className="text-[23px] font-bold text-primary mb-1">Overview</h3>
<p className="text-[18px] leading-[1.6] text-[#333] whitespace-pre-line mb-8">
{item.overview}
</p>
</div>

<div>
<h3 className="text-[23px] font-bold text-primary mb-1">Strategy</h3>
<p className="text-[18px] leading-[1.6] text-[#333] whitespace-pre-line">
{item.strategy}
</p>
</div>
</div>
</div>

<div className="relative w-full rounded-xl overflow-hidden border border-gray-200 mb-[60px]">
<Image
src={item.thumbnail}
alt={`${item.theme} 썸네일`}
width={1600}
height={900}
className="object-cover"
priority
/>
</div>

<div className="relative w-full rounded-xl overflow-hidden border border-gray-200">
<Image
src={item.detailImage}
alt={`${item.theme} 상세 이미지`}
width={1600}
height={900}
className="object-cover"
/>
</div>
</motion.div>
</section>
)
}