import React, { useState } from 'react';
import "./AboutMe.css";
import { Document, Page, pdfjs } from "react-pdf";
import { Link } from "react-router-dom";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function AboutMe() {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [showResume, setShowResume] = useState(false);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const showResumeClick = () => {
        setShowResume(!showResume);
        console.log(showResume);
    }

    return (
        <div>
            <h1 className="Heading">About Me</h1>
            <div className="aboutMeDiv">
                <p className="aboutMeParagraph">
                    Hi there, welcome! My name is Saadat. <br /> <br />
                    I’m a full stack developer based in New York city. I love creating e-commerce sites and design/create anything related animation. I like creating minimalistic, visually appealing websites that run seamlessly across platforms, using React, Vanilla javascript, Ruby or Node.js and other languages <br /><br />

                    I left my career as a chemist because I have always been drawn to technology. I am drawn to coding  because I love building things and want to transfer the same fun experience on to the user. <br /><br />

                    When i’m not working I am creating things in the world of music.
                    <br /><br />
                </p>
            </div>

            <button className="showResumeButton">
                <Link to="/resume"> View My Resume </Link>
            </button>

            {/* //! FULLY FUNCTIONAL BUTTON PRESS RESUME SHOW HERE: JUST UNCOMMENT */}
            {/* <div>
                <button className="showResumeButton" onClick={showResumeClick}>Show Resume</button>
                {showResume && (
                    <div className="AboutMeResume">
                        <Document
                            file="Resume.pdf"
                            onLoadSuccess={onDocumentLoadSuccess}
                        >
                            <Page pageNumber={pageNumber} />
                        </Document>
                    </div>
                )}
            </div> */}
        </div>
    )
}
