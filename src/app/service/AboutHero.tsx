'use client'
import { useEffect } from 'react'
import * as easingUtils from 'easing-utils'
import { motion } from 'framer-motion'

export default function AboutHero() {
useEffect(() => {
class BlackHole {
canvas: HTMLCanvasElement
ctx: CanvasRenderingContext2D
render: any
discs: any[] = []
dots: any[] = []
startDisc: any = {}
frame: number | null = null
frameSkip = 0
constructor(canvas: HTMLCanvasElement) {
this.canvas = canvas
this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D
this.setSizes()
window.addEventListener('resize', this.onResize.bind(this))
this.tick = this.tick.bind(this)
this.frame = requestAnimationFrame(this.tick)
}
onResize() { this.setSizes() }
setSizes() {
const rect=this.canvas.getBoundingClientRect()
const dpr=Math.min(window.devicePixelRatio,1.5)
this.render={width:rect.width,height:rect.height,dpi:dpr}
this.canvas.width=rect.width*dpr
this.canvas.height=rect.height*dpr
this.ctx.scale(dpr,dpr)
this.setGraphics()
}
setGraphics(){ this.setDiscs(); this.setDots() }
setDiscs(){
this.discs=[]
const totalDiscs=100
const w=this.render.width, h=this.render.height
this.startDisc={x:w*0.5,y:0,w,h}
for(let i=0;i<totalDiscs;i++){const p=i/totalDiscs;this.discs.push(this.tweenDisc({p}))}
}
setDots(){
this.dots=[]
const totalDots=5000
for(let i=0;i<totalDots;i++){
const d=this.discs[Math.floor(this.discs.length*Math.random())]
this.dots.push({d,a:0,c:`rgb(${40+Math.random()*20},${120+Math.random()*80},${255-Math.random()*80})`,p:Math.random(),o:0.5+Math.random()*0.5})
}}
tweenDisc(disc:any){
const s=this.startDisc
const sx=this.tweenValue(1,0,disc.p,'outCubic')
const sy=this.tweenValue(1,0,disc.p,'outExpo')
disc.sx=sx;disc.sy=sy;disc.w=s.w*sx;disc.h=s.h*sy;disc.x=s.x;disc.y=s.y+disc.p*s.h
return disc
}
tweenValue(start:number,end:number,p:number,ease:string){
const delta=end-start
const fn=(easingUtils as Record<string,(x:number)=>number>)['ease'+ease.charAt(0).toUpperCase()+ease.slice(1)]||((x:number)=>x)
return start+delta*fn(p)
}
moveDiscs(){
this.discs.forEach(d=>{
d.p=(d.p+0.0004)%1
this.tweenDisc(d)
const p=d.sx*d.sy
d.a=p<0.01?Math.pow(Math.min(p/0.01,1),3):1-Math.min((p-0.2)/0.8,1)
})
}
moveDots(){
this.dots.forEach(dot=>{
const v=this.tweenValue(0,0.001,1-dot.d.sx*dot.d.sy,'inExpo')
dot.p=(dot.p+v)%1
})
}
drawDots(){
const ctx=this.ctx
for(const dot of this.dots){
const{d,a,p,c,o}=dot
ctx.fillStyle=c
const newA=a+Math.PI*2*p
const x=d.x+Math.cos(newA)*d.w
const y=d.y+Math.sin(newA)*d.h
ctx.globalAlpha=d.a*o
ctx.beginPath()
ctx.arc(x,y+d.h,1,0,Math.PI*2)
ctx.fill()
}}
tick(){
if(document.hidden)return
if(++this.frameSkip%2!==0){this.frame=requestAnimationFrame(this.tick);return}
const ctx=this.ctx
ctx.clearRect(0,0,this.render.width,this.render.height)
this.moveDiscs();this.moveDots();this.drawDots()
this.frame=requestAnimationFrame(this.tick)
}
destroy(){
if(this.frame)cancelAnimationFrame(this.frame)
window.removeEventListener('resize',this.onResize)
}}
const canvas=document.querySelector('.js-canvas') as HTMLCanvasElement
if(canvas){const instance=new BlackHole(canvas);return()=>instance.destroy()}
}, [])

return(
<section className="relative w-full h-screen overflow-hidden bg-black font-[Pretendard]">
<canvas className="js-canvas absolute top-0 left-0 w-full h-full" />
<div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
<motion.div
initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}
transition={{duration:0.8,delay:0.3,ease:'easeOut'}}
className="relative z-[2] max-w-[900px] w-full px-4 text-center"
>
<motion.h2
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8,ease:'easeOut'}}
viewport={{once:true,amount:0.3}}
className="main-banner-title-w mb-[30px]"
>
비즈니스가 시장에서 경쟁력을 갖추는<br />결정적 차이를 설계합니다.
</motion.h2>

<motion.p
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8,delay:0.15,ease:'easeOut'}}
viewport={{once:true,amount:0.3}}
className="banner-subtitle-w"
>
기술력은 당연합니다. 우리는 기술을 넘어, 당신의 비즈니스 목표 달성을 위한<br />이기는 전략을 수립하고 그 모든 과정을 설계하여 결과로 증명합니다.
</motion.p>
</motion.div>
</div>
</section>
)
}
