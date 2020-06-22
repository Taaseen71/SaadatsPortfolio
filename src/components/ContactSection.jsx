import React from 'react';
import "./ContactSection.css";
import JotformEmbed from "react-jotform-embed";

export default function ContactSection() {
    return (
        <div>
            <h1 className="Heading">Contact Section</h1>
            <h3 >
                <ul>
                    <li className="socialMediaList">
                        <a className="socialMediaLink" href="https://www.linkedin.com/in/taaseen71/">LinkedIn</a><br />
                    </li>
                    <li className="socialMediaList">
                        <a className="socialMediaLink" href="https://www.instagram.com/ohsaad/">Instagram</a><br />
                    </li>
                </ul>
            </h3>

            <h3>
                <br /><br /><br />
                OR
            </h3>
            <div className="iframeDivWrapper">
                <div className="iframeDiv">
                    <iframe className="iframe" id="JotFormIFrame-201731473395153" title="General Inquiry Contact Form" onload="window.parent.scrollTo(0,0)" allowtransparency="true" allowfullscreen="true" allow="geolocation; microphone; camera" src="https://form.jotform.com/201731473395153" frameborder="0"  > </iframe>
                </div>
            </div>
        </div>
    )
}

{/* <script type="text/javascript" src="https://form.jotform.com/jsform/201731473395153"></script> */ }





{/* <form
                className="contactMeForm"
            // onSubmit={(e) => {
            //     // e.preventDefault();
            //     this.props.handleCreateArticle(this.state);
            //     this.props.history.push('/');
            //     this.setState({
            //         title: "",
            //         description: ""
            //     })
            //     // window.location.reload(false);
            //     //? need to refresh page because page not updating upon
            // }}
            >
                <label className="labelText" htmlFor="title"> Name:<br />
                    <TextareaAutosize onResize={(e) => { }}
                        id="title"
                        type="text"
                        name="title"
                    // value={this.state.title}
                    // onChange={this.handleChange}
                    />
                </label>
                <div>
                    <label className="labelText" htmlFor="description"> Description:<br />
                        <TextareaAutosize onResize={(e) => { }}
                            id="description" rows="20" cols="30"
                            className="createArticleTextArea"
                            name="description"
                            placeholder="TEXT AREA UNDER CONSTRUCTION. PLEASE USE SOCIAL MEDIA TO CONTACT ME WHILE THIS IS FIXED."
                        // value={this.state.description}
                        // onChange={this.handleChange}
                        />
                    </label>
                </div>
                <button className="CreateArticleButton">Submit</button>
            </form> */}