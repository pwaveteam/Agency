export const runtime = 'nodejs'
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { name, company, phone, email, message } = await req.json()
    if (!name || !phone || !email || !message)
      return NextResponse.json({ ok: false, error: '필수 항목 누락' }, { status: 400 })

    const transporter = nodemailer.createTransport({
      host: 'smtp.worksmobile.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER as string,
        pass: process.env.MAIL_PASS as string
      }
    })

    await transporter.verify() // 연결 테스트 (문제시 에러 발생)

    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      subject: `[홈페이지 문의] ${name} (${company || '개인'})`,
      html: `
        <div style="font-family:'Pretendard',sans-serif;padding:24px;background:#fafafa">
          <h2 style="color:#111;font-size:18px;margin-bottom:20px">새로운 문의가 도착했습니다</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td><b>이름</b></td><td>${name}</td></tr>
            <tr><td><b>회사명</b></td><td>${company || '-'}</td></tr>
            <tr><td><b>연락처</b></td><td>${phone}</td></tr>
            <tr><td><b>이메일</b></td><td>${email}</td></tr>
          </table>
          <div style="margin-top:20px"><b>문의내용</b><div style="margin-top:8px;padding:12px;border:1px solid #e5e5e5;border-radius:6px;background:#fff;line-height:1.6;white-space:pre-wrap">${message}</div></div>
          <p style="font-size:12px;color:#777;margin-top:24px">본 메일은 홈페이지 문의폼을 통해 자동 발송되었습니다.</p>
        </div>`
    })

    return NextResponse.json({ ok: true })
  } catch (err: unknown) {
    console.error('메일 전송 실패:', err)
    return NextResponse.json({ ok: false, error: '메일 전송 실패' }, { status: 500 })
  }
}
