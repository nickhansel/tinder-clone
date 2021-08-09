
import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Header from './Header';
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    <div className="App">
      <Router>
       <Switch>
       <Route path="/chat">
       <Header backButton="/" />
         </Route>
         <Route path="/">
         <Header />

           <TinderCards />
           <SwipeButtons />
         </Route>
       </Switch>
      </Router>
    </div>
  );
}

export default App;

// {/* Header */}
// <Header />
// {/* Tinder Cards */}
      {/* Buttons below tinder cards*/}

      {/* Chat Screen */}
      {/* Individual chat screen */}