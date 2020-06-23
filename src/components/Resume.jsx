import React from 'react'

export default function Resume() {
    return (
        <div>
            <div className="resume">
                <iframe title="resume" className="iFrameResume" src="https://resume.creddle.io/embed/6nlwnl6iot4"
                    width="850" height="1100" seamless></iframe>
            </div>
            <div className="resumePNG">
                <img className="resumePNG2" src="ResumeImage.png" alt="ResumeImage" width="250px" height="300px" />
            </div>
            <div className="downloadResume">
                <a href="https://docdro.id/drmtDsK">Download Resume (pdf)</a>
            </div>
        </div>
    )
}
