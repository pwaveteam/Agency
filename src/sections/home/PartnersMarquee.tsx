'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

function generateLogos(count:number):string[]{
return Array.from({length:count},(_,i)=>`/images/partners/partner-logo${i+1}.png`)
}

export default function PartnersMarquee(){
const logos=generateLogos(9)
return(
<div className="w-full bg-[#f8f8f8] py-10 max-md:py-6 overflow-x-hidden">
<motion.div
className="flex items-center justify-start gap-28 max-md:gap-14 w-max"
animate={{x:['0%','-50%']}}
transition={{duration:40,repeat:Infinity,ease:'linear'}}
>
{logos.concat(logos).map((logo,idx)=>(
<div
key={idx}
className="flex-shrink-0 w-[120px] h-[60px] max-md:w-[90px] max-md:h-[45px] flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
>
<Image
src={logo}
alt={`partner-${idx+1}`}
width={100}
height={50}
className="object-contain w-auto h-full"
/>
</div>
))}
</motion.div>
</div>
)}