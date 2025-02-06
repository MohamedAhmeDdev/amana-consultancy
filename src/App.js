import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import FAQs from './Pages/FAQs';
import Service from './Pages/Service';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={< FAQs />} />
        <Route path="/services" element={< Service />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
