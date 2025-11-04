// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import FooterWrapper from '@/components/common/FooterWrapper'

export const metadata: Metadata = {
title: '펄스웨이브',
description: '기획부터 개발까지',
icons: { icon: '/favicon.ico' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="ko">
<body className="relative flex flex-col min-h-screen bg-white text-gray-900 antialiased">
<div className="fixed top-0 left-0 w-full z-[9999] isolate">
<Header />
</div>
<main className="flex-1 relative z-0">{children}</main>
<FooterWrapper />
</body>
</html>
)
}