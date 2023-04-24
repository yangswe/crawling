import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<App />} />
        <Route path="/sayHi" element={
          <div>
            <h3>Hi</h3>
          </div>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
