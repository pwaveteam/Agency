'use client'
import Link from 'next/link'
import { Instagram, Youtube } from 'lucide-react'

export default function Footer(){
const sns=[
{icon:<Instagram size={18}/>,href:'https://www.instagram.com/pulsewave.on/'},
{icon:<Youtube size={18}/>,href:'https://www.youtube.com/channel/UCm1yMT7PlZTpMtNNqu5rASw'}
]

return(
<footer className="w-full bg-black text-white border-t border-white/10">
<div className="section-wrapper py-[60px] max-md:py-[40px]">
<div className="flex flex-col md:flex-row justify-between gap-10 max-md:gap-6">
<div>
<p className="text-[13px] md:text-[14px] text-white/40 leading-[1.7]">
24, Gwanggyohosu-ro 152beon-gil, Yeongtong-gu, Suwon-si,<br/>
Gyeonggi-do, Republic of Korea<br/>
info@pulsewave.kr · 070-4149-3331
</p>
</div>
<div className="flex items-start gap-5">
{sns.map((item,i)=>(
<Link key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#003090] transition-colors duration-300">
{item.icon}
</Link>
))}
</div>
</div>

<div className="border-t border-white/10 mt-[35px] max-md:mt-[25px] pt-[18px]">
<p className="text-[12px] md:text-[14px] text-white/30">© {new Date().getFullYear()} Pulsewave Co. All rights reserved</p>
</div>
</div>
</footer>
)}