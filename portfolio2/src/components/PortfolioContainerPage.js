// import React from 'react';
// import profilePic from '';
import React, { useState } from "react";

import About from "./pages/about";
import Portfolio from "./pages/portfolio"
import Resume from "./pages/resume";
import Contact from "./pages/contact";
import Header from "./header";
import Footer from "./footer";



export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');


    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
    };



    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className="body">
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
    );
}

