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
                <a href="https://github.com/eddiefigueroa18"  className="githubFooterLogo" target="blank">
                    <img className="githubFooterLogo" src={githubLogo} alt="Github Logo"/>
                </a>
            </div>

            {/* ========================= LINKED-IN ======================== */}
            <div className="contact-links">
                <a href="https://www.linkedin.com/in/eduardo-figueroa-93b425235/" className="linkedFooterLogo" target="blank">
                    <img className="linkedFooterLogo" src={linkedInLogo} alt="Linkedin Logo"/>
                </a>
            </div>

            {/* ========================= INSTAGRAM ======================== */}
            <div className="contact-links">
                <a href="https://www.instagram.com/eddie_figueroa_/" className="instaFooterLogo" target="blank">
                    <img className="instaFooterLogo"src={IgLogo} alt="Instagram Logo" />
                </a>
            </div>

            {/* ========================= GITHUB ======================== */}
            <div className="contact-links">
                <a href="mailto:eddiefigueroa18@gmail.com" className="gmailFooterLogo" target="blank">
                    <img className="gmailFooterLogo" src={gmailLogo} alt="Gmail Logo" />
                </a>
            </div>

            <h3 className="footer-section">Eduardo Figueroa &copy;2023</h3>

        </footer>


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

             
    );
}

export default Footer;



