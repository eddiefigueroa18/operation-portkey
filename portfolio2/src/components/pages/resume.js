import React from "react";
import ResumePdf from "../../pdf/Eduardo-Figueroa-Resume.pdf";
import pdfImage from "../../assets/pdf-icon.png"



export default function Resume() {
    return (
        <section className="resumePdfSection">
            <h2 className="resumeHeader">Resume</h2>
            <p className="resumeDesc">Click PDF to open resume</p>

                <div className="resume-pdf">
                    <a href={ResumePdf} target="blank">
                        <img className="pdfImage" src={pdfImage} alt="Image of PDF"></img> 
                    </a>
                </div>

                <div className="skillSection">
                    <p className="skillSectionFront">
                        <h3 className="fronEndTitle">Front End</h3>
                        <ul className="skillListFront">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>JQuery</li>
                            <li>React</li>
                            <li>Responsive Design</li>
                        </ul>
                    </p>

                    <p className="skillSectionBack">
                        <h3 className="backEndTitle">Back End</h3>
                        <ul className="skillListBack">
                            <li>MySql</li>
                            <li>Sequelize</li>
                            <li>MongoDb</li>
                            <li>Mongoose</li>
                            <li>Express</li>
                            <li>Node</li>
                            <li>APIs</li>
                        </ul>
                    </p>
                </div>


        </section>

        



    );
}


