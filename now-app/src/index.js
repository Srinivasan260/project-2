import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout.js";
import Home from "./home.js";
import Aome from "./about.js";
import Fome from "./log.js";
import Skills from "./skills";
import './home.css';





export default function App() {
  return (
    <div className="yt">
   
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Aome />} />
          <Route path="contact" element={<Fome/>} />
          <Route path="skill" element={<Skills/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);