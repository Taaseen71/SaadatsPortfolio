import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from "react-router-dom";
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import MyProjects from './components/MyProjects';
import ContactSection from './components/ContactSection';


function App() {
    return (
        <div className="App">
            <h1>hello world</h1>
            <Route exact path="/" component={Home} />
            <Route exact path="/" component={AboutMe} />
            <Route exact path="/" component={MyProjects} />
            <Route exact path="/" component={ContactSection} />
        </div>
    );
}

export default App;
