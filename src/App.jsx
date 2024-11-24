//import React from 'react';
import { BrowserRouter, Routes, Route,  } from "react-router-dom"
//import Home from './components/Pages/Home'; // Adjust path as necessary
//import Services from './components/Pages/Services'; // Adjust path as necessary
import Header from './components/Header/Header'; // Adjust path as necessary
import Muke from './components/Pages/Home'; // Adjust path as necessary
import About from './components/Pages/About'; // Adjust path as necessary
import Services from './components/Pages/Services';
import Footer from './components/Footer/Footer'; // Adjust path as necessary
import Contact from './components/Pages/Contact'; // Adjust path as necessary
import NotFound from './components/Pages/NotFound'; // Adjust path as necessary
const App = () => {
    return (
             <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Muke/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
  
                 <Route path="*" element={<NotFound/>} />
                </Routes>
                <Footer/>
             </BrowserRouter>
    );
};

export default App;