import React from "react"
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage.jsx'
import AboutPage from "./AboutPage.jsx";
import BoardPage from "./BoardPage.jsx";

import '../styles/App.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      
        <Router>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/who-we-are" element={<BoardPage/>} />

          </Routes>
        </Router>
        
    
  </React.StrictMode>
);
