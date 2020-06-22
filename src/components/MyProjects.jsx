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
                        <h3>
                            Project1: Saad's Pokedex
                    <ReactPlayer url="https://youtu.be/1mbmxeTaXkI" width="500px" />
                        </h3>
                    </div>
                    <div className="projectDescriptionDiv">
                        <p className="projectDescriptionParagraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae maxime ab soluta eos ad, laborum voluptas deserunt consequatur quo harum incidunt quidem minus maiores molestiae cupiditate? Molestias rem doloremque in.</p>
                    </div>
                    <a className="linkToWebsite" href="#">Link To Website</a>
                </div>

                <div className="videoDescriptionDiv">
                    <div className="videoPlayerDiv" >
                        <h3>
                            Project2: CoVid19 Tracker
                    <ReactPlayer url="https://youtu.be/J0c6yYG2u9U" width="500px" />
                        </h3>
                    </div>
                    <div className="projectDescriptionDiv">
                        <p className="projectDescriptionParagraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae maxime ab soluta eos ad, laborum voluptas deserunt consequatur quo harum incidunt quidem minus maiores molestiae cupiditate? Molestias rem doloremque in.</p>

                    </div>
                    <a className="linkToWebsite" href="#">Link To Website</a>

                </div>

                <div className="videoDescriptionDiv">
                    <div className="videoPlayerDiv" >
                        <h3>
                            Project3: ShipDev
                    <ReactPlayer url="https://youtu.be/GxP9U9IJtu0" width="500px" />
                        </h3>
                    </div>
                    <div className="projectDescriptionDiv">
                        <p className="projectDescriptionParagraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae maxime ab soluta eos ad, laborum voluptas deserunt consequatur quo harum incidunt quidem minus maiores molestiae cupiditate? Molestias rem doloremque in.</p>
                    </div>
                    <a className="linkToWebsite" href="#">Link To Website</a>
                </div>

                <div className="videoDescriptionDiv">
                    <div className="videoPlayerDiv" >
                        <h3>
                            Project4: Read-It-Blog
                    <ReactPlayer url="https://youtu.be/qfpoo05eB3E" width="500px" />
                        </h3>
                    </div>
                    <div className="projectDescriptionDiv">
                        <p className="projectDescriptionParagraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae maxime ab soluta eos ad, laborum voluptas deserunt consequatur quo harum incidunt quidem minus maiores molestiae cupiditate? Molestias rem doloremque in.</p>
                    </div>
                    <a className="linkToWebsite" href="#">Link To Website</a>
                </div>
            </div>

        </>
    )
}
