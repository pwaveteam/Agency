'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function PortfolioHero() {
const [isVideoLoaded, setIsVideoLoaded] = useState(false)

useEffect(() => {
const iframe=document.querySelector<HTMLIFrameElement>('#portfolioHeroVideo')
if(iframe) iframe.addEventListener('load',()=>setIsVideoLoaded(true))
}, [])

return(
<section className="container-default mt-[100px] mb-[80px]">
<motion.div
id="portfolioHero"
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
id="portfolioHeroVideo"
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
<span className="hidden md:inline">
다양한 산업분야, 45개 이상의 프로젝트 수행<br />
퍼스가 수행한 프로젝트 포트폴리오를 확인해 보세요.
</span>
<span className="md:hidden">
다양한 산업분야,<br />
45개 이상의 프로젝트 수행<br />
퍼스가 수행한 포트폴리오를 확인해 보세요.
</span>
</motion.h2>

<motion.p
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8,delay:0.15,ease:'easeOut'}}
viewport={{once:true,amount:0.3}}
className="service-summary"
>
<span className="hidden md:inline">
기획부터 개발까지, 퍼스가 수행한 주요 프로젝트 사례를 소개합니다.
</span>
<span className="md:hidden">
기획부터 개발까지,<br />
퍼스가 수행한 주요 프로젝트 사례를 소개합니다.
</span>
</motion.p>
</div>
</motion.div>
</section>
)
}