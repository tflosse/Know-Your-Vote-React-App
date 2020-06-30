import React, {useState} from 'react';
import {Route, Link, Switch, Redirect} from "react-router-dom";
import About from "./About";
import Search from "./Form/Search"; 
import SenateList from "./CongressLists/SenateList";
import './App.css';

function App() {
  // const [isOpen, setOpen]= useState(false);

  return (
    <div className="App">
      <nav>
        {/* <button 
          className="mobile-nav hamburger" 
          onClick={() => setOpen(!isOpen)}>
          ☵</button>
        <button className="mobile-nav close">X</button> */}
        <Link to="/" className="dropdown-item">
          <h1>Know your Vote</h1>
        </Link>
        <Link to="/about" 
        className="dropdown-item nav-options"
        id="nav-about">
          About
        </Link>
        <img src="https://i.imgur.com/2GuvUqT.png" alt="Congress Illustration"/>
        <Link to="/search" 
        className="dropdown-item nav-options"
        id="nav-search">
          Search
        </Link>
        <Link to="/list" 
        className="dropdown-item nav-options">
          Congress Lists
        </Link>
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/about" component={About} />
          <Route exact path="/search" component={Search} />
          <Route path="/lists" component={SenateList} />
          <Route path="*" 
            render={()=> 
            <Redirect to="/home"/> } 
            />
        </Switch>
      </main>
    </div>
  );
}

export default App;
