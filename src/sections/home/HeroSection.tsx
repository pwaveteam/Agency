'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
const [isVideoLoaded, setIsVideoLoaded] = useState(false)

useEffect(() => {
const iframe=document.querySelector<HTMLIFrameElement>('#heroVideo')
if(iframe) iframe.addEventListener('load',()=>setIsVideoLoaded(true))
}, [])

return(
<section className="container-default mt-[100px] mb-[80px]">
<motion.div
id="mainBanner"
initial={{opacity:0}}
animate={{opacity:1}}
transition={{duration:1,ease:'easeOut'}}
className="relative h-[80vh] flex items-center justify-center text-center text-white font-sans overflow-hidden rounded-[36px] shadow-[0_10px_40px_rgba(0,0,0,0.25)] bg-black"
>
{!isVideoLoaded&&(
<motion.div
initial={{opacity:1}}
animate={{opacity:0}}
transition={{duration:0.8,delay:0.2}}
className="absolute inset-0 z-[1] bg-black/80 backdrop-blur-xl rounded-[36px]"
/>
)}

<div className="absolute inset-0 overflow-hidden z-[0] rounded-[36px]">
<iframe
id="heroVideo"
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
className="main-banner-title-w mb-[30px]"
>
비즈니스를 설계하고, 기술로 완성합니다.
</motion.h2>

<motion.p
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8,delay:0.15,ease:'easeOut'}}
viewport={{once:true,amount:0.3}}
className="banner-subtitle-w mb-[40px]"
>
아이디어 구상을 넘어, 실행 가능한 전략과 시장을 움직이는 프로덕트까지,<br />
퍼스는 단순 개발사가 아닌, 당신의 A to Z 비즈니스 파트너입니다.
</motion.p>

<motion.div
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8,delay:0.3,ease:'easeOut'}}
viewport={{once:true,amount:0.3}}
className="text-center space-x-[20px]"
>
<Button asChild variant="primary">
<a href="/contact">홈페이지 개발 문의</a>
</Button>
<Button asChild variant="whiteOutline">
<a href="/portfolio">포트폴리오 보기</a>
</Button>
</motion.div>
</div>
</motion.div>
</section>
)
}