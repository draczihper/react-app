import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ClassComponent from './components/ClassComponent.jsx';
import Form from './components/FormComponent.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Form />
  </StrictMode>,
)
