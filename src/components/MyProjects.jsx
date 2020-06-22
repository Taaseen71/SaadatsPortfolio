import React from 'react';
import ReactPlayer from 'react-player';
import "./MyProjects.css";

export default function MyProjects() {
    return (
        <>
            <h1 className="Heading">MyProjects</h1>
            <div className="projects">
                <div className="videoDescriptionDiv">
                    <div className="videoPlayerDiv" >
                        <h3 className="reactPlayer">
                            Project1: Saad's Pokedex
                    <ReactPlayer url="https://youtu.be/1mbmxeTaXkI" width="100%" />
                        </h3>
                    </div>
                    <div className="projectDescriptionDiv">
                        <p className="projectDescriptionParagraph">This was my first project, and I wanted to apply all the information I learned in 3 weeks. The goal was to make it visually appealing, without compromising functionality, and since this API was solid, it meant the code was less likely to break anytime soon. The project was made with three weeks worth of knowledge of Javascript, and made with only Vanilla JS.</p>
                    </div>
                    <div className="websiteLinks">
                        <a className="linkToWebsite" href="https://pages.git.generalassemb.ly/GA-taaseen71/SaadsPokeDex/">Link To Website</a>
                        <a className="linkToWebsite" href="https://git.generalassemb.ly/GA-taaseen71/SaadsPokeDex">Link To GitHub</a>
                    </div>
                </div>

                <div className="videoDescriptionDiv">
                    <div className="videoPlayerDiv" >
                        <h3 className="reactPlayer">
                            Project2: CoVid19 Tracker
                    <ReactPlayer url="https://youtu.be/J0c6yYG2u9U" width="100%" />
                        </h3>
                    </div>
                    <div className="projectDescriptionDiv">
                        <p className="projectDescriptionParagraph">Used a fairly new API to create this project using React Hooks. This webpage shows the total cases, daily cases, deaths and recoveries, both globally and by country.  I used an "npmjs" package to display graphs for visual comparison. The application consisted of algorithms used to separate the date and time which was displayed together, and focused more on functionality and displaying information.</p>
                    </div>
                    <div className="websiteLinks">
                        <a className="linkToWebsite" href="https://0hsaad-covid19.netlify.app/">Link To Website</a>
                        <a className="linkToWebsite" href="https://github.com/Taaseen71/CoVid19Daily">Link To GitHub</a>
                    </div>

                </div>

                <div className="videoDescriptionDiv">
                    <div className="videoPlayerDiv" >
                        <h3 className="reactPlayer">
                            Project3: ShipDev
                    <ReactPlayer url="https://youtu.be/GxP9U9IJtu0" width="100%" />
                        </h3>
                    </div>
                    <div className="projectDescriptionDiv">
                        <p className="projectDescriptionParagraph">Created a website using MERN stack, with full CRUD and Authentication, while focusing on functionality and design. The project was proposed by a UX/UI team and we had one week to complete it, along with 3 other team members.</p>
                    </div>
                    <div className="websiteLinks">
                        <a className="linkToWebsite" href="http://shiptdev.surge.sh/">Link To Website</a>
                        <a className="linkToWebsite" href="https://github.com/IdiaAmeen/Shipt">Link To GitHub</a>
                    </div>
                </div>

                <div className="videoDescriptionDiv">
                    <div className="videoPlayerDiv" >
                        <h3 className="reactPlayer">
                            Project4: Read-It-Blog
                    <ReactPlayer url="https://youtu.be/qfpoo05eB3E" width="100%" />
                        </h3>
                    </div>
                    <div className="projectDescriptionDiv">
                        <p className="projectDescriptionParagraph">This project consisted of a back-end server using the Ruby on Rails framework, including full CRUD and Authentication and React.js for the font-end. The website created its own JSON files after a user signs up and creates an article. Each article can be updated, and deleted only by the user who created it. Alternatively, the articles are visible to anyone who's on the website, but only users who are signed up can comment on any article.
                        </p>
                    </div>
                    <div className="websiteLinks">
                        <a className="linkToWebsite" href="https://read-it-saad1.surge.sh/">Link To Website</a>
                        <a className="linkToWebsite" href="https://github.com/Taaseen71/ReadIt-Blog">Link To GitHub</a>
                    </div>
                </div>
            </div>

        </>
    )
}
