'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { MousePointer, Settings, Target, ShieldCheck, MessageCircle } from 'lucide-react'

export default function Philosophy() {
const bgRef=useRef<HTMLDivElement>(null)
const animRef=useRef<number|null>(null)

useEffect(()=>{
if(!bgRef.current)return
const container=bgRef.current
const canvas=document.createElement('canvas')
const ctx=canvas.getContext('2d')
const dpr=Math.min(window.devicePixelRatio,1.5)

const resize=()=>{
canvas.width=window.innerWidth*dpr
canvas.height=window.innerHeight*dpr
canvas.style.width='100%'
canvas.style.height='100%'
ctx?.scale(dpr,dpr)
}

resize()
canvas.style.position='absolute'
canvas.style.top='0'
canvas.style.left='0'
canvas.style.zIndex='0'
container.appendChild(canvas)
if(!ctx)return

const isMobile=window.innerWidth<768
const centerX=window.innerWidth/2
const centerY=isMobile?window.innerHeight/2.2:window.innerHeight/2
let time=0,lastTime=0
const particleCount=isMobile?120:220
const maxRadius=isMobile?Math.min(window.innerWidth,window.innerHeight)/3:Math.min(window.innerWidth,window.innerHeight)/2.5
const spiralArms=4,rotationSpeed=0.08

const particles=Array.from({length:particleCount}).map(()=>{const distanceFactor=Math.pow(Math.random(),0.5)
const distance=distanceFactor*maxRadius
const armIndex=Math.floor(Math.random()*spiralArms)
const armOffset=(armIndex/spiralArms)*Math.PI*2
const spiralTightness=0.2
const spiralAngle=Math.log(distance/5)/spiralTightness
return{distance,angle:spiralAngle+armOffset,armIndex,size:1+Math.random()*1.2,opacity:0.3+Math.random()*0.7,speedFactor:0.8+Math.random()*0.4,color:{r:40+Math.random()*20,g:120+Math.random()*80,b:255-Math.random()*80}}})

let frameSkip=0
const animate=(timestamp:number)=>{
animRef.current=requestAnimationFrame(animate)
if(!lastTime)lastTime=timestamp
const deltaTime=timestamp-lastTime
lastTime=timestamp
time+=deltaTime*0.001
if(!ctx||document.hidden)return
if(++frameSkip%2!==0)return
ctx.clearRect(0,0,window.innerWidth,window.innerHeight)
ctx.beginPath()
ctx.arc(centerX,centerY,3,0,Math.PI*2)
ctx.fillStyle='rgba(255,255,255,0.9)'
ctx.fill()
for(const p of particles){
const rotationFactor=1/Math.sqrt(p.distance/10)
p.angle+=rotationSpeed*rotationFactor*p.speedFactor*deltaTime*0.05
const x=centerX+Math.cos(p.angle)*p.distance
const y=centerY+Math.sin(p.angle)*p.distance
const pulseFactor=Math.sin((time*0.5+p.armIndex/spiralArms)*Math.PI*2)*0.3+0.7
ctx.beginPath()
ctx.arc(x,y,p.size*pulseFactor,0,Math.PI*2)
ctx.fillStyle=`rgba(${p.color.r},${p.color.g},${p.color.b},${p.opacity*pulseFactor})`
ctx.fill()
}}
animRef.current=requestAnimationFrame(animate)
window.addEventListener('resize',resize)
return()=>{
if(animRef.current)cancelAnimationFrame(animRef.current)
window.removeEventListener('resize',resize)
if(container.contains(canvas))container.removeChild(canvas)
}},[])

const items=[
{label:'Usability',icon:MousePointer},
{label:'Functionality',icon:Settings},
{label:'Accuracy',icon:Target},
{label:'Security',icon:ShieldCheck},
{label:'Communication',icon:MessageCircle}
]

return(
<section className="relative w-full text-white overflow-hidden min-h-screen flex flex-col justify-center items-center bg-black font-[Pretendard]">
<div ref={bgRef} className="absolute inset-0"/>
<div className="section-wrapper flex flex-col items-center text-center space-y-8 relative z-10">
<motion.h2
initial={{opacity:0,x:-80}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.7,ease:'easeOut'}}
viewport={{once:true,amount:0.3}}
className="section-label-w"
>
Philosophy
</motion.h2>
<motion.p
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6,delay:0.15,ease:'easeOut'}}
viewport={{once:true,amount:0.3}}
className="section-description-w text-center"
>
퍼스는 사용성 기능성 정확성 보안 그리고 소통<br/>다섯 가지 가치의 균형으로 프로젝트의 본질을 완성합니다
</motion.p>

<div className="relative w-full justify-center items-center h-[420px] hidden md:flex">
<div className="relative flex justify-center items-center">
{items.map((item,i)=>(
<div key={i} className="absolute flex flex-col items-center justify-center text-center" style={{transform:`translateX(${(i-2)*260}px)`,width:'280px',height:'280px'}}>
<motion.div animate={{scale:[1,1.06,1],opacity:[0.9,1,0.9]}} transition={{duration:3.8+i*0.3,repeat:Infinity,ease:'easeInOut'}} className="absolute inset-0 rounded-full bg-[#6fb6ff]/8 border-[3px] border-[#6fb6ff]/70 shadow-[0_0_12px_2px_rgba(111,182,255,0.2)]"/>
<div className="absolute inset-0 rounded-full bg-black/65"/>
<div className="relative z-10 flex flex-col items-center justify-center">
<item.icon size={46} strokeWidth={1.4} className="text-[#6fb6ff] mb-3 drop-shadow-[0_0_4px_rgba(111,182,255,0.4)]"/>
<h3 className="service-content">{item.label}</h3>
</div>
</div>
))}
</div>
</div>

<div className="md:hidden flex flex-col items-center relative z-10 mt-6">
{items.map((item,i)=>(
<div key={i} className={`flex flex-col items-center justify-center text-center relative ${i!==0?'-mt-[35px]':''}`}>
<motion.div animate={{scale:[1,1.06,1],opacity:[0.9,1,0.9]}} transition={{duration:3.8+i*0.3,repeat:Infinity,ease:'easeInOut'}} className="w-[200px] h-[200px] rounded-full bg-[#6fb6ff]/8 border-[3px] border-[#6fb6ff]/70 shadow-[0_0_12px_2px_rgba(111,182,255,0.2)]"/>
<div className="absolute w-[200px] h-[200px] rounded-full bg-black/70"/>
<div className="absolute flex flex-col items-center justify-center">
<item.icon size={40} strokeWidth={1.3} className="text-[#6fb6ff] mb-2 drop-shadow-[0_0_4px_rgba(111,182,255,0.4)]"/>
<h3 className="text-[18px] font-medium">{item.label}</h3>
</div>
</div>
))}
</div>
</div>
</section>
)
}