'use client'
import React, { useState, useCallback, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'sonner'
import emailjs from '@emailjs/browser'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Button } from '@/components/ui/button'
import { UploadCloud, FileIcon, X } from 'lucide-react'

const FORM_INITIAL = {
name: '',
company: '',
phone: '',
email: '',
type: '',
plan: '',
budget: '',
message: '',
files: [] as File[],
agree: false
}

const TYPE_OPTIONS = [
'잘 모르겠어요',
'기업/브랜드 홈페이지 (랜딩 페이지)',
'쇼핑몰/예약 결제',
'내부용 시스템 (SaaS, ERP 등)',
'구독형 플랫폼',
'콘텐츠 포털/커뮤니티',
'기타'
]

const PLAN_OPTIONS = ['모두 준비됨', '일부만 준비됨', '아직 준비되지 않음']

const BUDGET_OPTIONS = [
'미정/협의 필요',
'100~500만원',
'500~1,500만원',
'1,500~3,000만원',
'3,000만원 이상'
]

const MAX_FILE_SIZE = 2 * 1024 * 1024
const MAX_FILE_COUNT = 3

const styles = {
dropdown: {
trigger: 'flex h-9 w-full items-center justify-between rounded-md border px-3 py-1 text-sm md:text-base text-gray-800 bg-white/80 border-neutral-300 transition-colors cursor-pointer',
triggerActive: 'border-primary ring-1 ring-primary',
menu: 'absolute z-50 w-full mt-1 bg-white border border-neutral-300 rounded-md shadow-md',
item: 'px-3 py-1.5 text-sm md:text-base cursor-pointer hover:bg-primary/10 hover:text-primary',
itemActive: 'bg-primary/10 text-primary'
},
upload: {
zone: 'flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-md cursor-pointer transition-colors border-neutral-300 bg-white/80 hover:bg-neutral-50',
zoneDragging: 'border-primary bg-primary/5',
file: 'flex items-center justify-between border rounded-md px-3 py-2 bg-white/70'
},
text: {
label: 'text-sm md:text-base text-gray-800',
placeholder: 'text-neutral-300',
description: 'text-sm text-gray-500 leading-relaxed',
required: 'text-red-600'
}
}

const ContactForm: React.FC = () => {
const [form, setForm] = useState(FORM_INITIAL)
const [isSubmitting, setIsSubmitting] = useState(false)
const [open, setOpen] = useState<'type' | 'budget' | null>(null)
const [isDragging, setIsDragging] = useState(false)
const typeRef = useRef<HTMLDivElement | null>(null)
const budgetRef = useRef<HTMLDivElement | null>(null)

const handleChange = useCallback((key: keyof typeof form, value: string | boolean | File[] | null) => {
setForm(prev => ({ ...prev, [key]: value }))
}, [])

const handleToggle = useCallback((type: 'type' | 'budget') => {
setOpen(prev => (prev === type ? null : type))
}, [])

const closeDropdown = useCallback(() => setOpen(null), [])

useEffect(() => {
const handleClick = (e: MouseEvent) => {
if (
typeRef.current && !typeRef.current.contains(e.target as Node) &&
budgetRef.current && !budgetRef.current.contains(e.target as Node)
) closeDropdown()
}
document.addEventListener('mousedown', handleClick)
return () => document.removeEventListener('mousedown', handleClick)
}, [closeDropdown])

const isValid = !!form.name && !!form.phone && !!form.email && !!form.message && form.agree

const fileToBase64 = (file: File): Promise<string> => {
return new Promise((resolve, reject) => {
const reader = new FileReader()
reader.onload = () => resolve(reader.result as string)
reader.onerror = reject
reader.readAsDataURL(file)
})
}

const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault()
if (!isValid) {
toast.warning('필수 항목을 모두 입력해주세요.')
return
}
setIsSubmitting(true)
try {
let filesData = '첨부파일 없음'
if (form.files.length > 0) {
const totalSize = form.files.reduce((sum, f) => sum + f.size, 0)
if (totalSize > MAX_FILE_SIZE) {
toast.warning('파일 총 용량이 2MB를 초과합니다.', {
description: '첨부가 어려운 경우 info@pulsewave.kr로 직접 보내주세요.'
})
setIsSubmitting(false)
return
}
const filesPromises = form.files.map(async (file) => {
const base64 = await fileToBase64(file)
return `\n\n파일명: ${file.name}\n크기: ${(file.size / 1024).toFixed(1)}KB\n데이터: ${base64}`
})
const filesArray = await Promise.all(filesPromises)
filesData = filesArray.join('\n---')
}

const templateParams = {
name: form.name,
company: form.company || '미입력',
phone: form.phone,
email: form.email,
type: form.type || '미선택',
budget: form.budget || '미선택',
plan: form.plan || '미선택',
message: form.message,
files: filesData,
time: new Date().toLocaleString('ko-KR'),
agree: form.agree ? '동의함' : '미동의'
}

const attachments = await Promise.all(
form.files.map(async (file) => {
const base64 = await fileToBase64(file)
return { name: file.name, data: base64.split(',')[1] }
})
)

const result = await emailjs.send(
process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
{ ...templateParams, attachments },
process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
)

if (result.status === 200) {
toast.success('문의가 정상적으로 접수되었습니다.', {
description: '빠른 시일 내에 답변드리겠습니다.'
})
setForm(FORM_INITIAL)
} else {
toast.error('오류가 발생했습니다.', {
description: '잠시 후 다시 시도해주세요.'
})
}
} catch (error) {
console.error('EmailJS Error:', error)
toast.error('전송 실패', {
description: '파일 크기를 확인하거나 관리자에게 문의해주세요.'
})
} finally {
setIsSubmitting(false)
}
}, [form, isValid])

const handleFiles = (newFiles: FileList | null) => {
if (!newFiles) return
const selected = Array.from(newFiles)
const totalSize = [...form.files, ...selected].reduce((sum, f) => sum + f.size, 0)
if (totalSize > MAX_FILE_SIZE) {
toast.warning('파일 총 용량이 2MB를 초과합니다.')
return
}
setForm(prev => ({
...prev,
files: [...prev.files, ...selected].slice(0, MAX_FILE_COUNT)
}))
}

const handleRemoveFile = (index: number) => {
setForm(prev => ({
...prev,
files: prev.files.filter((_, i) => i !== index)
}))
}

const renderDropdown = (
type: 'type' | 'budget',
options: string[],
ref: React.RefObject<HTMLDivElement | null>
) => {
const selected = form[type]
const isOpen = open === type
return (
<div className="relative" ref={ref}>
<div
tabIndex={0}
onClick={() => handleToggle(type)}
className={`${styles.dropdown.trigger} ${isOpen ? styles.dropdown.triggerActive : ''}`}
>
<span className={selected ? '' : styles.text.placeholder}>
{selected || '선택'}
</span>
<svg
className={`w-5 h-5 md:w-6 md:h-6 ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`}
viewBox="0 0 20 20"
fill="none"
stroke="currentColor"
strokeWidth="1"
>
<path d="M6 8l4 4 4-4" />
</svg>
</div>
<AnimatePresence>
{isOpen && (
<motion.div
initial={{ opacity: 0, y: -5 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: -5 }}
transition={{ duration: 0.15 }}
className={styles.dropdown.menu}
>
{options.map(opt => (
<div
key={opt}
onClick={() => {
handleChange(type, opt)
closeDropdown()
}}
className={`${styles.dropdown.item} ${selected === opt ? styles.dropdown.itemActive : ''}`}
>
{opt}
</div>
))}
</motion.div>
)}
</AnimatePresence>
</div>
)
}

const totalFileSize = form.files.reduce((sum, f) => sum + f.size, 0)
const fileSizeMB = (totalFileSize / (1024 * 1024)).toFixed(2)

return (
<section className="section-wrapper pt-3">
<motion.div
initial={{ opacity: 0, y: 40 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, ease: 'easeOut' }}
>
<div className="text-left mb-12 flex flex-col items-start gap-4">
<div className="relative w-14 h-14">
<div className="absolute inset-0 rounded-full border-[3px] border-primary/30" />
<div className="absolute inset-0 rounded-full border-[3px] border-t-primary border-r-transparent border-b-transparent border-l-transparent animate-spin" />
</div>
<div>
<h2 className="section-heading !text-left !mb-2.5">CONTACT</h2>
<p className="section-description !text-left !mb-8">
<span className="hidden md:inline">
문의 사항을 남겨주시면 빠르게 답변드리겠습니다.
</span>
<span className="md:hidden">
문의 사항을 남겨주시면<br />
빠르게 답변드리겠습니다.
</span>
</p>
</div>
</div>

<form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-4">
<div>
<Label htmlFor="name" className="flex items-center gap-0.5">
성함<span className={styles.text.required}>*</span>
</Label>
<Input
id="name"
type="text"
value={form.name}
onChange={e => handleChange('name', e.target.value)}
placeholder="이름을 입력해주세요"
/>
</div>
<div>
<Label htmlFor="company">소속회사</Label>
<Input
id="company"
type="text"
value={form.company}
onChange={e => handleChange('company', e.target.value)}
placeholder="회사명을 입력해주세요"
/>
</div>
<div>
<Label htmlFor="phone" className="flex items-center gap-0.5">
연락처<span className={styles.text.required}>*</span>
</Label>
<Input
id="phone"
type="tel"
value={form.phone}
onChange={e => {
const value = e.target.value.replace(/[^0-9-]/g, '')
handleChange('phone', value)
}}
placeholder="010-0000-0000"
/>
</div>
<div>
<Label htmlFor="email" className="flex items-center gap-0.5">
이메일<span className={styles.text.required}>*</span>
</Label>
<Input
id="email"
type="email"
value={form.email}
onChange={e => handleChange('email', e.target.value)}
placeholder="contact@example.com"
/>
</div>
<div>
<Label>프로젝트 유형</Label>
{renderDropdown('type', TYPE_OPTIONS, typeRef)}
</div>
<div>
<Label>프로젝트 예산</Label>
{renderDropdown('budget', BUDGET_OPTIONS, budgetRef)}
</div>
<div className="md:col-span-2">
<Label className="mb-2">프로젝트 기획이 되어있나요?</Label>
<RadioGroup
value={form.plan}
onValueChange={val => handleChange('plan', val)}
className="flex flex-wrap gap-4 md:gap-6"
>
{PLAN_OPTIONS.map(opt => (
<div key={opt} className="flex items-center space-x-2">
<RadioGroupItem id={opt} value={opt} className="translate-y-px" />
<Label htmlFor={opt} className={`${styles.text.label} cursor-pointer translate-y-0.5`}>
{opt}
</Label>
</div>
))}
</RadioGroup>
</div>
<div className="md:col-span-2">
<Label className="mb-2">파일 첨부</Label>
<label
onDragOver={e => { e.preventDefault(); setIsDragging(true) }}
onDragLeave={() => setIsDragging(false)}
onDrop={e => { e.preventDefault(); setIsDragging(false); handleFiles(e.dataTransfer.files) }}
htmlFor="file"
className={`${styles.upload.zone} ${isDragging ? styles.upload.zoneDragging : ''}`}
>
<UploadCloud className="w-10 h-10 text-neutral-400 mb-2" />
<p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300">파일을 드래그하거나 클릭하여 업로드</p>
<p className="text-xs md:text-sm text-neutral-400 mt-1">최대 {MAX_FILE_COUNT}개 파일, 총 2MB 이하</p>
</label>
<Input id="file" type="file" multiple accept=".pdf,.doc,.docx,.ppt,.pptx,.zip,.jpg,.png" className="hidden" onChange={e => handleFiles(e.target.files)} />
{form.files.length > 0 && (
<div className="mt-3 space-y-2">
<p className="text-sm text-neutral-500">
선택된 파일 ({form.files.length}개) - {fileSizeMB}MB / 2MB
</p>
{form.files.map((file, i) => (
<div key={i} className={styles.upload.file}>
<div className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
<FileIcon className="w-4 h-4 text-primary" />
{file.name} ({(file.size / 1024).toFixed(1)}KB)
</div>
<button type="button" onClick={() => handleRemoveFile(i)} className="text-neutral-400 hover:text-neutral-600 transition-colors">
<X className="w-4 h-4" />
</button>
</div>
))}
</div>
)}
</div>
<div className="md:col-span-2">
<Label htmlFor="message" className="flex items-center gap-0.5">
프로젝트에 대해서 자유롭게 설명해주세요<span className={styles.text.required}>*</span>
</Label>
<Textarea
id="message"
value={form.message}
onChange={e => handleChange('message', e.target.value)}
placeholder="아직 정리되지 않은 아이디어라도 괜찮습니다. 편하게 남겨주세요"
className="min-h-40"
/>
</div>
<div className="flex items-start gap-2 text-left md:col-span-2">
<Checkbox
id="agree"
checked={form.agree}
onCheckedChange={val => handleChange('agree', val === true)}
className="mt-0.5 shrink-0"
/>
<div className="flex flex-col">
<Label htmlFor="agree" className={`${styles.text.label} leading-normal cursor-pointer`}>개인정보처리방침에 동의합니다.<span className={styles.text.required}>*</span></Label>
<p className={`${styles.text.description} mt-0.5`}>
수집된 개인정보는 문의 응답 목적에만 사용되며<br />
관련 법령에 따라 안전하게 관리됩니다
</p>
</div>
</div>
<div className="text-center mt-6 md:mt-8 md:col-span-2">
<Button type="submit" disabled={!isValid || isSubmitting}>
{isSubmitting ? '전송 중...' : '제출하기'}
</Button>
</div>
</form>
</motion.div>
</section>
)
}

export default ContactForm