  
import './App.css';
import React from "react";
import Homepage from './components/Homepage/homepage';
import Projects from './components/Projects/projects';
import Experience from './components/Experience/experience';
import Contact from './components/Contact/contact';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
      <Switch>
      `   <Route exact path='/' component={Homepage}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/projects' component={Projects}/>
          <Route exact path='/experience' component={Experience}/>
      </Switch>
        
      </div>
      

      
    </Router>
    
  );
}

export default App;