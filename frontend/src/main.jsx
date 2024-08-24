import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }

  #root{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
    height: 100vh;
    background-color: #292929;
  }
`

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <GlobalStyle/>
  </StrictMode>,
)
