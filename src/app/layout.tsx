// app/layout.tsx
import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import FooterWrapper from '@/components/common/FooterWrapper'

export const metadata: Metadata = {
title: 'PULSE LAB, 홈페이지 제작부터 플랫폼 MVP 개발까지',
description:
'홈페이지 제작부터 플랫폼 MVP 유지보수까지 비즈니스 단계에 맞춘 효율적이고 확장 가능한 개발 파트너 PULSE LAB',
openGraph: {
title: 'PULSE LAB, 홈페이지 제작부터 플랫폼 MVP 개발까지',
description:
'홈페이지 제작부터 플랫폼 MVP 유지보수까지 비즈니스 단계에 맞춘 효율적이고 확장 가능한 개발 파트너 PULSE LAB',
url: 'https://lab.pulsewave.kr',
siteName: 'PULSE LAB',
images: ['/og-image.png'],
locale: 'ko_KR',
type: 'website'
},
icons: { icon: '/favicon.ico' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="ko">
<body className="relative flex flex-col min-h-screen bg-white text-gray-900 antialiased">

{/* Meta Pixel Code */}
<Script id="fb-pixel" strategy="afterInteractive">
{`
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '824895280150026');
fbq('track', 'PageView');
`}
</Script>

<noscript>
<img
height="1"
width="1"
style={{ display: 'none' }}
src="https://www.facebook.com/tr?id=824895280150026&ev=PageView&noscript=1"
/>
</noscript>
{/* End Meta Pixel Code */}

<div className="fixed top-0 left-0 w-full z-[9999] isolate">
<Header />
</div>

<main className="flex-1 relative z-0">{children}</main>
<FooterWrapper />
</body>
</html>
)
}