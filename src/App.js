  
import './App.css';
import React from "react";
import Home from './components/Homepage/home';
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