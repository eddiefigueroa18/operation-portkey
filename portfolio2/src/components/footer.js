import React from "react";

import gmailLogo from "../assets/Gmail.png";
import githubLogo from "../../assets/Github Logo.png";
import linkedInLogo from "../assets/Linked.png";
import IgLogo from "../assets/Ig logo.png";



function Footer() {
    return (
        <footer className="flex-contact-links">

            {/* ========================= GMAIL ======================== */}
            <div className="contact-links">
                <a href="mailto:eddiefigueroa18@gmail.com" target="blank">
                    <img src={githubLogo} alt="Gmail Logo" style="width:80px;height:68px;padding:10px" />
                </a>
            </div>

            {/* ========================= LINKED-IN ======================== */}
            <div className="contact-links">
                <a href="https://www.linkedin.com/in/eduardo-figueroa-93b425235/" target="blank">
                    <img src={linkedInLogo} alt="Linkedin Logo" style="width:80px;height:75px;padding:5px" />
                </a>
            </div>

            {/* ========================= INSTAGRAM ======================== */}
            <div className="contact-links">
                <a href="https://www.instagram.com/eddie_figueroa_/" target="blank">
                    <img src={IgLogo} alt="Instagram Logo" style="width:80px;height:80px;padding:5px" />
                </a>
            </div>

            {/* ========================= GITHUB ======================== */}
            <div className="contact-links">
                <a href="https://github.com/eddiefigueroa18" target="blank">
                    <img src={gmailLogo} alt="Github Logo" style="width:71px;height:71px;padding:5px" />
                </a>
            </div>
            <h3 className="footer-name-date">Eduardo Figueroa &copy;2023</h3>

        </footer>
    );
}

export default Footer;