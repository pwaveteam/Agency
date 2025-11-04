'use client'
import ContactHero from './ContactHero'
import ContactForm from './ContactForm'

export default function ContactPage() {
  return (
    <main className="w-full text-gray-900 bg-white overflow-hidden">
      <ContactHero />
      <ContactForm />
    </main>
  )
}