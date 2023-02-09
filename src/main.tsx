import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import FoodContextProvider from './Context/FoodContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FoodContextProvider>
      <App />
    </FoodContextProvider>
  </React.StrictMode>,
)
