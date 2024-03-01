import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './views/Home.jsx';
import About from './views/About.jsx';

// DEVELOPER //

import Header from './views/components/Header.jsx';
import Footer from './views/components/Header.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />} />
                {/* DEVELOPER */}
                <Route path='header' element={<Header />} />
                <Route path='footer' element={<Footer />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);
