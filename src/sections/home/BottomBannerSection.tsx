'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function BottomBannerSection() {
return(
<section
id="cta"
className="relative w-full overflow-hidden h-[60vh] flex items-center justify-center"
style={{
backgroundImage:"url('/images/home/bottom-banner.jpg')",
backgroundSize:'cover',
backgroundPosition:'center',
backgroundRepeat:'no-repeat',
backgroundAttachment:'fixed'
}}
>
<div className="absolute inset-0 bg-black/85"/>
<div className="container-default relative flex flex-col items-center justify-center text-center text-white font-sans rounded-[36px] px-4 z-10">
<div className="relative z-[2] w-full px-4">
<motion.h2
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8,ease:'easeOut'}}
viewport={{once:true,amount:0.3}}
className="banner-block mb-[30px]"
>
아직 아이디어가 명확하지 않아도 괜찮습니다.<br />
퍼스팀이 가장 합리적인 플랜을 제안해 드립니다.
</motion.h2>

<motion.p
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8,delay:0.15,ease:'easeOut'}}
viewport={{once:true,amount:0.3}}
className="service-summary mb-[40px]"
>
지금 바로 문의해보세요.<br />
아이디어를 구체화하는 가장 빠른 길입니다.
</motion.p>

<motion.div
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8,delay:0.3,ease:'easeOut'}}
viewport={{once:true,amount:0.3}}
className="text-center space-x-[20px]"
>
<Button
asChild
variant="primary"
className="md:w-auto max-md:w-full max-md:block [&>a]:max-md:block [&>a]:max-md:w-full max-md:mb-[12px]"
>
<a href="/contact">홈페이지 개발 문의</a>
</Button>

<Button
asChild
variant="whiteOutline"
className="md:w-auto max-md:w-full max-md:block [&>a]:max-md:block [&>a]:max-md:w-full"
>
<a href="/portfolio">포트폴리오 보기</a>
</Button>

</motion.div>
</div>
</div>
</section>
)
}
