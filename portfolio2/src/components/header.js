import React from "react";


function Header ({ currentPage, handlePageChange}) {
    return (
        <nav className="headerSection">
            <ul className="headerList">

                {/* ============ ABOUT ============= */}
                <li className="nav-item">
                    <a 
                    href="#about"
                    onClick={() => handlePageChange('About')}
                    className={currentPage ==='About' ? 'nav-link active' : 'nav-link'}
                    >
                        About
                    </a>
                </li>

                {/* ========== PORTFOLIO ========== */}
                <li className="nav-item">
                    <a 
                    href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage ==='Portfolio' ? 'nav-link active' : 'nav-link'}
                    >
                        Portfolio
                    </a>
                </li>

                {/* ============ RESUME =========== */}
                <li className="nav-item">
                    <a 
                    href="#resume"
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage ==='Resume' ? 'nav-link active' : 'nav-link'}
                    >
                        Resume
                    </a>
                </li>

                {/* =========== Contact ========== */}
                 <li className="nav-item">
                    <a 
                    href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage ==='Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact
                    </a>
                </li>


            </ul>
        </nav>
    );
}

export default Header;