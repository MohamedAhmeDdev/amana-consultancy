import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import FAQs from './Pages/FAQs';
import Service from './Pages/Service';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={< FAQs />} />
        <Route path="/services" element={< Service />} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
