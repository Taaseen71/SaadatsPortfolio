import React from 'react';
import './App.css';
import { Route } from "react-router-dom";

import AboutMe from './components/AboutMe';
import MyProjects from './components/MyProjects';
import ContactSection from './components/ContactSection';
import Nav from './components/Nav';
import Resume from './components/Resume';


function App() {
    return (
        <div className="App">
            <header>
                <Nav />
            </header>
            <main>
                <Route exact path="/" component={AboutMe} />
                <Route exact path="/my-projects" component={MyProjects} />
                <Route exact path="/contact-section" component={ContactSection} />
                <Route exact path="/resume" component={Resume} />

            </main>
        </div>
    );
}

export default App;
