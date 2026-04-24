import { useEffect, useMemo, useRef, useState } from 'react'
import '../styles/SimpleChatbot.css'
import chatbotIcon from '../assets/chatbot.png'

const knowledgeBase = [
  {
    keywords: ['skills', 'tech', 'stack', 'frontend', 'react', 'next', 'typescript', 'javascript'],
    answer:
      'I work with React, Next.js, Node.js, TypeScript, and API integrations to build fast, scalable web solutions.',
  },
  {
    keywords: ['services', 'offer', 'what do you do', 'website development', 'landing page', 'redesign'],
    answer:
      'I offer website development, landing page design, and website redesign focused on better conversion and user experience.',
  },
  {
    keywords: ['availability', 'available', 'start', 'timeline', 'urgent'],
    answer:
      'Yes, I’m currently available for freelance work. Share your timeline and I’ll confirm scope and delivery quickly.',
  },
  {
    keywords: ['delivery', 'deliver', 'how fast', 'deadline', 'speed'],
    answer:
      'Delivery time depends on scope, but most landing pages are delivered quickly. I confirm timelines before starting.',
  },
  {
    keywords: ['pricing', 'price', 'cost', 'budget', 'charges', 'starting'],
    answer:
      'Pricing depends on scope. Typical starting ranges are ₹8k–₹15k+, and I provide a clear quote after reviewing your requirements.',
  },
  {
    keywords: ['process', 'how do you work', 'workflow', 'steps'],
    answer:
      'My process: Discuss → Build → Review → Deliver. You get clear updates and milestone-based progress throughout.',
  },
  {
    keywords: ['projects', 'portfolio', 'work', 'case study', 'result'],
    answer:
      'Recent projects highlight business goals, implementation approach, and outcomes—so you can see how I solve real product problems.',
  },
  {
    keywords: ['scratch', 'from scratch', 'full project', 'complete website', 'full stack'],
    answer:
      'Yes, I can build your project from scratch, including frontend, backend, and deployment support.',
  },
  {
    keywords: ['maintenance', 'support', 'after delivery', 'post launch'],
    answer:
      'Yes, I provide post-delivery support and maintenance plans based on your project needs.',
  },
  {
    keywords: ['contact', 'email', 'hire', 'connect', 'resume'],
    answer:
      'You can hire me via the Contact form, email, or WhatsApp. I usually respond within 24–48 hours.',
  },
  {
    keywords: ['about', 'who are you', 'piyush', 'background', 'journey'],
    answer:
      'I’m Piyush Bramhankar, a full stack developer focused on building modern websites and web apps that support business growth.',
  },
]

const fallbackAnswer =
  'Thanks for the question. Share your requirement in the contact form, and I’ll reply with a clear plan and estimate.'

const findBestAnswer = (question) => {
  const normalized = question.toLowerCase()

  let bestScore = 0
  let bestAnswer = fallbackAnswer

  for (const entry of knowledgeBase) {
    const score = entry.keywords.reduce((acc, keyword) => (normalized.includes(keyword) ? acc + 1 : acc), 0)
    if (score > bestScore) {
      bestScore = score
      bestAnswer = entry.answer
    }
  }

  return bestAnswer
}

function SimpleChatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      from: 'bot',
      text: 'Hi, I’m Piyush’s portfolio assistant. Ask me about skills, services, pricing, process, projects, availability, or how to hire.',
    },
  ])
  const [input, setInput] = useState('')
  const messagesContainerRef = useRef(null)

  const quickReplies = useMemo(
    () => [
      'What services do you offer?',
      'What is your pricing?',
      'How fast can you deliver?',
      'Can you build my project from scratch?',
      'Do you provide maintenance after delivery?',
      'How can I contact you quickly?',
    ],
    []
  )

  const respond = (value) => {
    const reply = findBestAnswer(value)

    setMessages((prev) => [...prev, { from: 'user', text: value }, { from: 'bot', text: reply }])
    setInput('')
  }

  const scrollToLatestMessage = (behavior = 'smooth') => {
    if (!messagesContainerRef.current) return

    messagesContainerRef.current.scrollTo({
      top: messagesContainerRef.current.scrollHeight,
      behavior,
    })
  }

  useEffect(() => {
    if (!open) return
    scrollToLatestMessage('auto')
  }, [open])

  useEffect(() => {
    if (!open) return
    scrollToLatestMessage('smooth')
  }, [messages, open])

  return (
    <div className="chatbot-shell">
      {open && (
        <div className="chatbot-panel">
          <div className="chatbot-header">
            <div>
              <strong>Project Assistant</strong>
              <p>Ask anything about my freelance profile</p>
            </div>
            <button type="button" className="chatbot-close" onClick={() => setOpen(false)}>Close</button>
          </div>

          <div className="chatbot-messages" ref={messagesContainerRef}>
            {messages.map((message, index) => (
              <div key={`${message.from}-${index}`} className={`chatbot-message ${message.from}`}>
                {message.text}
              </div>
            ))}
          </div>

          <div className="chatbot-quick-replies">
            {quickReplies.map((reply) => (
              <button key={reply} type="button" onClick={() => respond(reply)}>{reply}</button>
            ))}
          </div>

          <form
            className="chatbot-form"
            onSubmit={(event) => {
              event.preventDefault()
              if (input.trim()) respond(input.trim())
            }}
          >
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask a question..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}

      {!open && (
        <button className="chatbot-launcher" type="button" onClick={() => setOpen(true)} aria-label="Open chat assistant">
          <img src={chatbotIcon} alt="Chat assistant" className="chatbot-launcher-image" />
        </button>
      )}
    </div>
  )
}

export default SimpleChatbot
