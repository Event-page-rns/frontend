import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DocumentContextProvider from './Contexts/DocumentContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <DocumentContextProvider>
     <React.StrictMode>
    <App />
  </React.StrictMode>
  </DocumentContextProvider>
)
