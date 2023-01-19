import React from "react";
import githubLogo from "../../assets/Github-Logo.png";
import weatherDashPhoto from "../../assets/weather-logo.png";
import passwordGenPhoto from "../../assets/lock.png";
import iteneraryPhoto from "../../assets/itenerary-logo.png";
import noteTakerPhoto from "../../assets/note-taker.png";
import javaQuizPhoto from "../../assets/java-quiz.png";
import showHeroPhoto from "../../assets/favicon.png";



const myWork = () => {
    return (
        <section className="myWorkSection">
            <h2 className="myWorkHeader">My Work</h2>


            {/* ========================= ONE ======================== */}
            <div className="work1" id="workSectionImageLinks">
                <h3 className="workTitle1" id="workTitles">Weather Dashboard</h3>
                        <a href="https://eddiefigueroa18.github.io/operation-nimbus/" target="blank" >
                            <img className="weatherIcon" src={weatherDashPhoto} alt="Image of weather forecast symbol (sun and clouds)" />
                        </a>
                        <a href="https://github.com/eddiefigueroa18/operation-nimbus" className="work1Github" id="githubLinks"  target="blank">Github Repository 
                            {/* <img  src={githubLogo} alt="github logo"/> */}
                        </a>
                    
            </div>


            {/* ========================= TWO ======================== */}
            <div className="work2" id="workSectionImageLinks">
                <h3 className="workTitle2" id="workTitles">Password Generator</h3>
                <a href="https://eddiefigueroa18.github.io/operation-safeguard/" target="blank" >
                    <img className="passwordIcon" src={passwordGenPhoto} alt="Image of a padlock" />
                </a>
                <a href="https://github.com/eddiefigueroa18/operation-safeguard" id="githubLinks"  target="blank">Github Repository
                    {/* <img className="work2Github" src={githubLogo} /> */}
                </a>
            </div>


            {/* ========================= Three ======================== */}
            <div className="work3" id="workSectionImageLinks">
                <h3 className="workTitle3" id="workTitles">Itinerary Maker</h3>
                <a href="https://eddiefigueroa18.github.io/operation-itenerary/" target="blank" >
                    <img className="iteneraryIcon" src={iteneraryPhoto} alt="Image of a blank Checklist" />
                </a>
                <a href="https://github.com/eddiefigueroa18/operation-itenerary" id="githubLinks"  target="blank">Github Repository
                    {/* <img className="work3Github" src={githubLogo} /> */}
                </a>
            </div>


            {/* ========================= FOUR ======================== */}
            {/* THIS WEBSITE NEEDS TO BE FIXED ON HEROKU */}
            <div className="work4" id="workSectionImageLinks">
                <h3 className="workTitle4" id="workTitles">Note Taker App</h3>
                <a href="https://eddiefigueroa18.github.io/operation-itenerary/" target="blank" >
                    <img className="noteTakerIcon" src={noteTakerPhoto} alt="Image of sticky notes with pencil on top" />
                </a>
                <a href="https://github.com/eddiefigueroa18/operation-wordsmith" id="githubLinks"  target="blank">Github Repository
                    {/* <img className="work4Github" src={githubLogo} /> */}
                </a>
            </div>


            {/* ========================= FIVE ======================== */}
            <div className="work5" id="workSectionImageLinks">
                <h3 className="workTitle5" id="workTitles">A Javasript Quiz App</h3>
                <a href="https://eddiefigueroa18.github.io/operation-java-quiz/" target="blank" >
                    <img className="JavaIcon" src={javaQuizPhoto} alt="Image of mouse pointer selecting a quiz button" />
                </a>
                <a href="https://github.com/eddiefigueroa18/operation-java-quiz" id="githubLinks"  target="blank">Github Repository
                    {/* <img className="work5Github" src={githubLogo} /> */}
                </a>
            </div>


            {/* ========================= SIX ======================== */}
            <div className="work6" id="workSectionImageLinks">
                <h3 className="workTitle6" id="workTitles">An event finder and hotel booker app</h3>
                <a href="https://abrowncownow.github.io/event-booker/" target="blank" >
                    <img className="showHeroIcon" src={showHeroPhoto} alt="Image of standing crowd with raised hands" />
                </a>
                <a href="https://github.com/abrowncownow/event-booker" id="githubLinks"  target="blank">Github Repository
                    {/* <img className="work6Github" src={githubLogo} /> */}
                </a>
            </div>


        </section>
    );
}

export default myWork;