import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route } from "react-router-dom";

import AboutMe from './components/AboutMe';
import MyProjects from './components/MyProjects';
import ContactSection from './components/ContactSection';
import Nav from './components/Nav';


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

            </main>
        </div>
    );
}

export default App;
