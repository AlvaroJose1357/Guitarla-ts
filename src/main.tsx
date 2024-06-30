import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
// ! -> non-null assertion operator - Assertion non-null - Operador de afirmación de no nulo
// significa que estamos seguros de que el elemento no es nulo y que no se puede lanzar una excepción de tipo null o undefined.