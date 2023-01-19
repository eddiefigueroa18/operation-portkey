import React from "react";

import gmailLogo from "../assets/Gmail.png";
import githubLogo from "../assets/Github-Logo.png";
import linkedInLogo from "../assets/Linked.png";
import IgLogo from "../assets/IG-logo.png";





function Footer() {
    return (
        <footer className="flex-contact-links">

            {/* ========================= GMAIL ======================== */}
            <div className="contact-links">
                <a href="mailto:eddiefigueroa18@gmail.com" target="blank">
                    <img src={githubLogo} alt="Gmail Logo"/>
                </a>
            </div>

            {/* ========================= LINKED-IN ======================== */}
            <div className="contact-links">
                <a href="https://www.linkedin.com/in/eduardo-figueroa-93b425235/" target="blank">
                    <img src={linkedInLogo} alt="Linkedin Logo"/>
                </a>
            </div>

            {/* ========================= INSTAGRAM ======================== */}
            <div className="contact-links">
                <a href="https://www.instagram.com/eddie_figueroa_/" target="blank">
                    <img src={IgLogo} alt="Instagram Logo" />
                </a>
            </div>

            {/* ========================= GITHUB ======================== */}
            <div className="contact-links">
                <a href="https://github.com/eddiefigueroa18" target="blank">
                    <img src={gmailLogo} alt="Github Logo" />
                </a>
            </div>
            <h3 className="footer-section">Eduardo Figueroa &copy;2023</h3>

        </footer>
             
    );
}

export default Footer;



//  <footer className="text-center text-white" style={{backgroundColor: '#252934'}}>
//             <div className="container pt-4">
//                 <section className="mb-4">
//                     <a
//                         className="btn text-white btn-floating m-1"
//                         style={{backgroundColor: '1c9690'}}
//                         href="mailto:eddiefigueroa18@gmail.com"
//                         target='_blank'
//                         role="button"
//                         ><i class="bi bi-google"></i>
//                     </a>
//                     <a
//                         className="btn text-white btn-floating m-1"
//                         style={{backgroundColor: '187841'}}
//                         href="https://www.linkedin.com/in/eduardo-figueroa-93b425235/"
//                         target='_blank'
//                         role="button"
//                         ><i class="bi bi-linkedin"></i>
//                     </a>


//                 </section>
//             </div>
//         </footer>  