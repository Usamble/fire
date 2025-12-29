'use client'

import { useState } from 'react'
import { AnimateOnScroll } from './AnimateOnScroll'

interface FAQItem {
  question: string
  answer: string
  id: string
}

const faqData: FAQItem[] = [
  {
    id: 'what-is',
    question: 'What is FireHorse 2026?',
    answer: 'FireHorse 2026 is a community token celebrating the return of the Bing-Wu (FireHorse) cycle in the Chinese zodiac calendar, which occurs once every 60 years.',
  },
  {
    id: 'when-cycle',
    question: 'When does the FireHorse cycle occur?',
    answer: 'The FireHorse cycle occurs every 60 years. Previous cycles were in 1906 and 1966. The next cycle begins in 2026.',
  },
  {
    id: 'what-special',
    question: 'What makes this cycle special?',
    answer: 'The FireHorse (Bing-Wu) combines the Horse zodiac sign with the Fire element, representing passion, energy, and transformation. This rare combination only appears once every six decades.',
  },
  {
    id: 'how-join',
    question: 'How can I join the community?',
    answer: 'You can join our community through Telegram and follow us on X (Twitter). Links are available in the navigation and throughout the site.',
  },
  {
    id: 'presale',
    question: 'Is this a presale or ICO?',
    answer: 'No, this is not a presale or ICO. FireHorse 2026 is a community-driven project focused on celebrating the 60-year cycle tradition.',
  },
  {
    id: 'contract',
    question: 'What is the token contract address?',
    answer: 'Contract details will be announced through official channels. Always verify contract addresses through our official Telegram and X accounts.',
  },
  {
    id: 'financial-advice',
    question: 'Is this financial advice?',
    answer: 'No. This project is for educational and community purposes only. Always do your own research and never invest more than you can afford to lose.',
  },
]

function FAQItem({ item }: { item: FAQItem }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="border-b-4 border-red-300 last:border-b-0 mb-4">
      <button
        onClick={handleToggle}
        className="w-full py-5 px-4 text-left flex justify-between items-center bg-gradient-to-r from-red-100 to-orange-100 hover:from-red-200 hover:to-orange-200 transition-all rounded-xl font-bold"
      >
        <span className="font-black text-xl text-gray-900">{item.question}</span>
        <svg
          className={`w-6 h-6 text-red-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="p-6 bg-white rounded-b-xl border-2 border-red-300">
          <p className="text-gray-900 font-bold text-xl leading-relaxed">{item.answer}</p>
        </div>
      )}
    </div>
  )
}

export function FAQ() {
  return (
    <section
      id="faq"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-red-50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 text-6xl opacity-10">❓</div>
      <div className="absolute bottom-20 right-20 text-6xl opacity-10">💡</div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <AnimateOnScroll direction="down" delay={0}>
          <div className="text-center mb-12">
            <span className="text-6xl mb-4 block animate-bounce-slow">❓</span>
            <h2 className="text-5xl sm:text-6xl font-black mb-6 gradient-fire-text">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll direction="up" delay={200}>
          <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-red-600">
            {faqData.map((item, index) => (
              <AnimateOnScroll key={item.id} direction="fade" delay={300 + index * 100}>
                <FAQItem item={item} />
              </AnimateOnScroll>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}

