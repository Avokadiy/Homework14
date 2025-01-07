import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './header/header'
import Main from './main/main'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Main />
  </StrictMode>,
)
