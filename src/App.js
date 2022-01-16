import React from "react";
import {
    BrowserRouter as Router,
Routes,    
    Route,
    Link
} from "react-router-dom";

import './App.css';
import CustomHook from "./components/CustomHooks/CustomHook"; 
import ClassApp from "./components/FuncVersusClass/ClassApp";
import InputForm from "./components/InputForm/InputForm";
import Props from "./components/Props/Props";
import RulesOfHooks from "./components/RulesOfHooks/RulesOfHooks";
import State from "./components/State/State";
import StylingComp from "./components/StylingComponents/StylingComp";

function App() {
    return (
        <div className="wrapper">
            <h1>Projects - Sonny Sangha Tutorials</h1>
            <h2>by Hannah Roach</h2>
            <Router>
                <nav>
                    <ul>
                        <li><Link to="/custom-hook">Random Joke</Link></li>
                        <li><Link to="/func-vs-class-app">Functional versus Class Props</Link></li>
                        <li><Link to="/input-form">Input Form</Link></li>
                        <li><Link to="/props">Props</Link></li>
                        <li><Link to="/rules-of-hooks">Rules of Hooks</Link></li>
                        <li><Link to="/state">State</Link></li>
                        <li><Link to="/styling-components">Styling Components</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path='/custom-hook' element={<CustomHook />}/>
                    <Route path='/func-vs-class-app' element={<ClassApp />}/>
                    <Route path='/input-form' element={<InputForm />}/>
                    <Route path='/props' element={<Props />}/>
                    <Route path='/rules-of-hooks' element={<RulesOfHooks />}/>
                    <Route path='/state' element={<State />}/>
                    <Route path='/styling-components' element={<StylingComp />}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;