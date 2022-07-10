  
import './App.css';
import React from "react";
import Homepage from './components/Homepage/homepage';
import Projects from './components/Projects/projects';
import Home from './components/Homepage/home';
import Experience from './components/Experience/experience';
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
      `   <Route exact path='/' component={Home}/>
      </Switch>
        
      </div>
      

      
    </Router>
    
  );
}

export default App;