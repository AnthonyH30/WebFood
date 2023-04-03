import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import FoodContextProvider from './Context/FoodContext'
import AuthProvider from './Context/AuthContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FoodContextProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </FoodContextProvider>
  </React.StrictMode>,
)
