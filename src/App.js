import './App.css';
import React from "react";
import Navbar from "./components/Navbar/Navbar"
import Homepage from './components/Homepage/homepage';
import Projects from './components/Projects/projects';
import Resume from './components/Resume/resume';
import AboutMe from './components/AboutMe/aboutMe';
import Contact from './components/Contact/contact';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  
  return (
    <Router>
      <div className="App">
      <Switch>
      `   <Route exact path='/' component={Homepage}/>
          <Route exact path='/about' component={AboutMe}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/projects' component={Projects}/>
          <Route exact path='/resume' component={Resume}/>
      </Switch>
        
      </div>
      

      
    </Router>
    
  );
}

export default App;
