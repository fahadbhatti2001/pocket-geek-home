import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { HashRouter } from "react-router-dom";
import "tw-elements"
import './Assets/css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)
