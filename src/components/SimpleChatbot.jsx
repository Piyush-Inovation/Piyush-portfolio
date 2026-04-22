import { useEffect, useMemo, useRef, useState } from 'react'
import '../styles/SimpleChatbot.css'

const knowledgeBase = [
  {
    keywords: ['skills', 'tech', 'stack', 'frontend', 'react', 'next', 'typescript', 'javascript'],
    answer:
      'I primarily work in the React ecosystem: React, modern JavaScript, responsive UI architecture, performance-first implementation, and clean component-based code. I also have exposure to Next.js, TypeScript, state management, and API integrations.',
  },
  {
    keywords: ['services', 'offer', 'what do you do', 'website development', 'landing page', 'redesign'],
    answer:
      'I offer three main freelance services: 1) Website Development, 2) Landing Page Design, and 3) Website Redesign. The goal is always business-focused: better trust, better UX, and better lead conversion.',
  },
  {
    keywords: ['availability', 'available', 'start', 'timeline', 'urgent'],
    answer:
      'Yes, I am available for freelance projects. I can usually start quickly for landing pages and short website scopes. If you share your timeline in the contact form, I can confirm delivery windows clearly.',
  },
  {
    keywords: ['pricing', 'price', 'cost', 'budget', 'charges', 'starting'],
    answer:
      'Pricing depends on scope and features, but typical starting points are: Landing Page from ₹8k, Website Redesign from ₹12k, and Website Development from ₹15k. For accurate pricing, share your exact requirements.',
  },
  {
    keywords: ['process', 'how do you work', 'workflow', 'steps'],
    answer:
      'My process is simple and transparent: 1) Discuss, 2) Build, 3) Review, 4) Deliver. You get regular updates and clean handoff-ready code.',
  },
  {
    keywords: ['projects', 'portfolio', 'work', 'case study', 'result'],
    answer:
      'In the Recent Projects section, each project is shown with business context (purpose and functions). The focus is on real-world outcomes: modern UI, responsive behavior, and better customer engagement.',
  },
  {
    keywords: ['contact', 'email', 'hire', 'connect', 'resume'],
    answer:
      'You can hire me directly from the Contact section. The fastest method is the contact form or email at piyush.bramhankar027@gmail.com. You can also download my resume from the navigation/hero buttons.',
  },
  {
    keywords: ['about', 'who are you', 'piyush', 'background', 'journey'],
    answer:
      'I am Piyush Bramhankar, a frontend developer focused on helping businesses launch modern, high-converting websites. My approach combines clean visuals, responsive design, and conversion-focused page structure.',
  },
]

const fallbackAnswer =
  'Great question. For the most accurate answer, please share your exact requirement in the contact form and I will reply with a clear plan. If needed, we can integrate advanced AI services (like ChatGPT/Gemini APIs) for even deeper real-time responses.'

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

  const quickReplies = useMemo(() => ['Skills', 'Services', 'Pricing', 'Availability', 'Process', 'Contact'], [])

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
        <button className="chatbot-launcher" type="button" onClick={() => setOpen(true)}>
          Chat
        </button>
      )}
    </div>
  )
}

export default SimpleChatbot
