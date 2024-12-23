import React from "react"
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage.jsx'
import AboutPage from "./AboutPage.jsx";
import BoardPage from "./BoardPage.jsx";
import TripsPage from "./TripsPage.jsx"
import SupportPage from "./SupportPage.jsx";


import ScrollToTop from '../components/Scrolltotop.jsx'; // Import the ScrollToTop component
import '../styles/App.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      
        <Router>
        <ScrollToTop/>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/who-we-are" element={<BoardPage/>} />
            <Route path="/trips" element={<TripsPage/>} />
            <Route path ="/support-us" element = {<SupportPage/>} />

          </Routes>
        </Router>
        
    
  </React.StrictMode>
);
