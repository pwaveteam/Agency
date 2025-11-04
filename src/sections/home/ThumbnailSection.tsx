'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const thumbnails = Array.from({ length: 10 }, (_, i) => `/thumbnail/thumbnail-${i + 1}.png`)

export default function ThumbnailSection() {
return (
<section className="w-full overflow-x-hidden py-[30px]">
<motion.div
className="flex gap-8 w-max"
animate={{ x: ['0%', '-50%'] }}
transition={{ duration: 60, ease: 'linear', repeat: Infinity }}
>
{[...thumbnails, ...thumbnails].map((src, i) => (
<motion.div
key={i}
whileHover={{ scale: 1.04 }}
transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
className="flex-shrink-0 rounded-[18px] overflow-hidden cursor-pointer shadow-[0_0_40px_rgba(0,0,0,0.08)]"
>
<Image
src={src}
alt={`Thumbnail ${i + 1}`}
width={460}
height={295}
className="w-[460px] h-[295px] object-cover"
/>
</motion.div>
))}
</motion.div>
</section>
)
}