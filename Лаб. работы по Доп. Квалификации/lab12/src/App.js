import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './layout/Nav';
import Services from './pages/Services';
import Products from './pages/Products';
import About_us from './pages/About_Us';
import Portfolio from './pages/Portfolio';
import FAQ from './pages/FAQ';
import Contacts from './pages/Contacts';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about_us" element={<About_us />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
