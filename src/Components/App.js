import React, {useState, useEffect} from 'react';
import {Route, Link, Switch, Redirect} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import SearchState from "./Form/SearchState";
import SearchName from "./Form/SearchName"; 
import SearchResults from "./Form/SearchResults";
import './App.css';
// import styled, {css} from 'styled-components';


function App() {
  const [stateSearch, setStateSearch]= useState('')
  const [chamberSearch, setChamberSearch]= useState('Senate')
  const [stateResults, updateStateResults]= useState([])
  const [nameResults, updateNameResults]= useState([])

  const handleChange = event => {
    console.log('Handling state entry', event.target.value);
    const state =  event.target.value
    setStateSearch(state)
  };

  const handleToggle = event => {
    console.log('Handling chamber toggle');
    event.preventDefault();
    const chamber = event.target
    setChamberSearch(chamber)
  };

  const handleSubmit = event => {
      event.preventDefault();
      console.log('State search submitted');
      handleSubmit(stateSearch);
      setStateSearch('')
  };


  useEffect(() => {
    const stateApiCall = async () => {
      const res = await fetch(`https://api.propublica.org/congress/v1/members/${chamberSearch}/${stateSearch}/current.json`,
      {
        dataType: "json",
        headers: { "X-API-Key": "ZuPHJPB5SdYllQS7KY4cAVoLY6mdboxoc3nZLOcE" }
      })
      const json = await res.json()
      console.log(json)
      let resultsArray = json.results
      updateStateResults(resultsArray)
    }
    stateApiCall()
  },[]);


  return (
    <div className="App">
      <nav>
        <Link to="/">
          <h1>Know your Vote</h1>
        </Link>
        {/* <button 
          className="mobile-nav hamburger" 
          onClick={() => setOpen(!isOpen)}>
          ☵</button>
        <button className="mobile-nav close">X</button> */}
        <Link to="/about" 
        className="dropdown-item nav-options"
        id="nav-about">
          About
        </Link>
        <img src="https://i.imgur.com/2GuvUqT.png" alt="Congress Illustration"/>
        <Link to="/bystate" 
        className="dropdown-item nav-options"
        id="nav-search">
          by State
        </Link>
        <Link to="/byname" 
        className="dropdown-item nav-options">
          by Name
        </Link>
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/bystate" 
          render={routerProps =>
            <>
              {/* <SearchName.js {...routerProps} /> */}
              <SearchState.js {...routerProps} 
                 handleChange={handleChange()}
                 handleToggle={handleToggle()}
                 handleSubmit={handleSubmit()}
                 stateSearch={stateSearch}/> 
              <SearchResults.js {...routerProps} 
                 stateResults={stateResults}/> 
            </> } />
          <Route path="/byname" 
          render={routerProps =>
            <>
              <SearchName.js {...routerProps}
              // Props go here
                  />
              <SearchResults.js {...routerProps} 
                nameResults={nameResults}/> 
            </> } />
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
