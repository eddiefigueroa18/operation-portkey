// import React from 'react';
// import profilePic from '';
import React, { useState } from "react";

import About from "./pages/about";
import Portfolio from "../components/pages/portfolio"
import Resume from "../components/pages/resume";
import Contact from "../components/pages/contact";
import Header from "../components/header";
import Footer from "../components/footer";

export default function PortfolioContainer () {
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

