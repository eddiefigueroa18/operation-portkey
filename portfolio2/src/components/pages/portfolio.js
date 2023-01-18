import React from "react";
import githubLogo from "../../assets/Github Logo";
import weatherDashPhoto from "../../assets/weather-logo";
import passwordGenPhoto from "../../assets/lock";
import iteneraryPhoto from "../../assets/itenerary-logo";
import noteTakerPhoto from "../../assets/note-taker";
import javaQuizPhoto from "../../assets/java-quiz";
import showHeroPhoto from "../../assets/favicon";



const myWork = () => {
    return (
        <section className="myWorkSection">
            <h2 className="myWorkHeader">My Work</h2>


            {/* ========================= ONE ======================== */}
            <div className="work1" id="workSectionImageLinks">
                <h3 className="workTitle1" id="workTitles">Weather Dashboard</h3>
                <a href="https://eddiefigueroa18.github.io/operation-nimbus/" target="blank" className="weatherIcon">
                    <img src={weatherDashPhoto} alt="Image of weather forecast symbol (sun and clouds)" />
                </a>
                <a href="https://github.com/eddiefigueroa18/operation-nimbus" id="githubLogo" className="work1Github" target="blank">
                    <img src={githubLogo} />
                </a>
            </div>


            {/* ========================= TWO ======================== */}
            <div className="work2" id="workSectionImageLinks">
                <h3 className="workTitle2" id="workTitles">Password Generator</h3>
                <a href="https://eddiefigueroa18.github.io/operation-safeguard/" target="blank" className="passwordIcon">
                    <img src={passwordGenPhoto} alt="Image of a padlock" />
                </a>
                <a href="https://github.com/eddiefigueroa18/operation-safeguard" id="githubLogos" className="work2Github" target="blank">
                    <img src={githubLogo} />
                </a>
            </div>


            {/* ========================= Three ======================== */}
            <div className="work3" id="workSectionImageLinks">
                <h3 className="workTitle3" id="workTitles">Itinerary Maker</h3>
                <a href="https://eddiefigueroa18.github.io/operation-itenerary/" target="blank" className="iteneraryIcon">
                    <img src={iteneraryPhoto} alt="Image of a blank Checklist" />
                </a>
                <a href="https://github.com/eddiefigueroa18/operation-itenerary" id="githubLogos" className="work3Github" target="blank">
                    <img src={githubLogo} />
                </a>
            </div>


            {/* ========================= FOUR ======================== */}
            {/* THIS WEBSITE NEEDS TO BE FIXED ON HEROKU */}
            <div className="work4" id="workSectionImageLinks">
                <h3 className="workTitle4" id="workTitles">Note Taker App</h3>
                <a href="https://eddiefigueroa18.github.io/operation-itenerary/" target="blank" className="noteTakerIcon">
                    <img src={noteTakerPhoto} alt="Image of sticky notes with pencil on top" />
                </a>
                <a href="https://github.com/eddiefigueroa18/operation-wordsmith" id="githubLogos" className="work4Github" target="blank">
                    <img src={githubLogo} />
                </a>
            </div>


            {/* ========================= FIVE ======================== */}
            <div className="work5" id="workSectionImageLinks">
                <h3 className="workTitle5" id="workTitles">A Javasript Quiz App</h3>
                <a href="https://eddiefigueroa18.github.io/operation-java-quiz/" target="blank" className="JavaIcon">
                    <img src={javaQuizPhoto} alt="Image of mouse pointer selecting a quiz button" />
                </a>
                <a href="https://github.com/eddiefigueroa18/operation-java-quiz" id="githubLogos" className="work5Github" target="blank">
                    <img src={githubLogo} />
                </a>
            </div>


            {/* ========================= SIX ======================== */}
            <div className="work6" id="workSectionImageLinks">
                <h3 className="workTitle6" id="workTitles">An event finder and hotel booker app</h3>
                <a href="https://abrowncownow.github.io/event-booker/" target="blank" className="showHeroIcon">
                    <img src={showHeroPhoto} alt="Image of standing crowd with raised hands" />
                </a>
                <a href="https://github.com/abrowncownow/event-booker" id="githubLogos" className="work6Github" target="blank">
                    <img src={githubLogo} />
                </a>
            </div>


        </section>
    );
}

export default myWork;