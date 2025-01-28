import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

function App() {
  return (
      <BrowserRouter>
        <Header/>

        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>

        <Footer/>
      </BrowserRouter>
  );
}

export default App;
