import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Greeting from './Greeting.jsx'
import { Merch } from './Merch.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
    <Merch />
  </StrictMode>
)
