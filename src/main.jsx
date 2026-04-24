import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const ghRedirectPath = window.location.search.match(/^\?\/(.*)$/)
if (ghRedirectPath) {
  const decodedPath = ghRedirectPath[1].replace(/~and~/g, '&')
  const newUrl = `${window.location.pathname}${decodedPath}${window.location.hash}`
  window.history.replaceState(null, '', newUrl)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
