'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function ContactHero() {
const [isVideoLoaded, setIsVideoLoaded] = useState(false)

useEffect(() => {
const iframe=document.querySelector<HTMLIFrameElement>('#contactHeroVideo')
if(iframe) iframe.addEventListener('load',()=>setIsVideoLoaded(true))
}, [])

return(
<section className="container-default mt-[100px] mb-[80px]">
<motion.div
id="contactHero"
initial={{opacity:0}}
animate={{opacity:1}}
transition={{duration:1,ease:'easeOut'}}
className="relative h-[50vh] flex items-center justify-center text-center text-white font-sans overflow-hidden rounded-[36px] shadow-[0_10px_40px_rgba(0,0,0,0.25)] bg-black"
>
{!isVideoLoaded&&(
<motion.div initial={{opacity:1}} animate={{opacity:0}} transition={{duration:0.8,delay:0.2}} className="absolute inset-0 z-[1] bg-black/80 backdrop-blur-xl rounded-[36px]" />
)}

<div className="absolute inset-0 overflow-hidden z-[0] rounded-[36px]">
<iframe
id="contactHeroVideo"
src="https://player.vimeo.com/video/1129940842?background=1&autoplay=1&loop=1&muted=1&byline=0&title=0"
className="absolute top-1/2 left-1/2 w-full h-[56.25vw] min-h-full -translate-x-1/2 -translate-y-1/2"
allow="autoplay; fullscreen; picture-in-picture"
allowFullScreen
/>
</div>

<div className="relative z-[2] w-full px-4">
<motion.h2
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8,ease:'easeOut'}}
viewport={{once:true,amount:0.3}}
className="banner-block mb-[30px]"
>
“이런 것도 가능할까?”<br />망설여진다면,<br />가벼운 질문으로 시작해보세요.
</motion.h2>

<motion.p
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8,delay:0.15,ease:'easeOut'}}
viewport={{once:true,amount:0.3}}
className="service-summary"
>
<span className="hidden md:inline">
담당자 검토 후 1~2영업일 이내에 회신드리겠습니다.
</span>
<span className="md:hidden">
담당자 검토 후<br />
1~2영업일 이내에 회신드리겠습니다.
</span>
</motion.p>
</div>
</motion.div>
</section>
)
}