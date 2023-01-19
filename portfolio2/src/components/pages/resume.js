import React from "react";
import ResumePdf from "../../pdf/Eduardo-Figueroa-Resume.pdf";
import pdfImage from "../../assets/pdf-icon.png"



export default function Resume() {
    return (
        <section className="resumePdfSection">
            <h2 className="resumeHeader"></h2>
                <div className="resume-pdf">
                    <a href={ResumePdf}>
                        <img src={pdfImage} alt="Image of PDF"></img> 
                    </a>
                </div>
        </section>



    );
}


