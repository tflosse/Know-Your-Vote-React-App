import React, {useState, useEffect} from 'react';
import {Route, Link, Switch, Redirect} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import SearchState from "./Form/SearchState";
import SearchResults from "./Form/SearchResults";
import './App.css';
// import styled, {css} from 'styled-components';


function App() {
  const [stateSearch, setStateSearch]= useState('CA')
  const [stateResults, updateStateResults]= useState([])

  const handleChange = event => {
    console.log('Handling state entry', event);
    const state =  event.target.value
    setStateSearch(state)
  };


  const senateApiCall = async () => {
    const res = await fetch(`https://api.propublica.org/congress/v1/members/senate/${stateSearch}/current.json`,
    {
      dataType: "json",
      headers: { "X-API-Key": "ZuPHJPB5SdYllQS7KY4cAVoLY6mdboxoc3nZLOcE" }
    })
    const json = await res.json()
    let resultsArray = json.results
    console.log(resultsArray)
    updateStateResults(resultsArray)
  };

  const handleSenateSubmit = event => {
      event.preventDefault();
      console.log('Senators search submitted');
      senateApiCall()
      setStateSearch('')
  };

  const houseApiCall = async () => {
    const res = await fetch(`https://api.propublica.org/congress/v1/members/house/${stateSearch}/current.json`,
    {
      dataType: "json",
      headers: { "X-API-Key": "ZuPHJPB5SdYllQS7KY4cAVoLY6mdboxoc3nZLOcE" }
    })
    const json = await res.json()
    let resultsArray = json.results
    console.log(resultsArray)
    updateStateResults(resultsArray)
  };

  const handleHouseSubmit = event => {
      event.preventDefault();
      console.log('House Reps search submitted');
      houseApiCall()
      setStateSearch('')
  };

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
        <Link to="/senate" 
        className="dropdown-item nav-options"
        id="nav-search">
          Senate
        </Link>
        <Link to="/house" 
        className="dropdown-item nav-options"
        id="nav-search">
          House
        </Link>
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/senate" 
          render={routerProps =>
            <div>
              <SearchState {...routerProps} 
                 handleChange={handleChange}
                 handleSubmit={handleSenateSubmit}
                 stateSearch={stateSearch}
                 value={"Seach Senators"}/> 
              <SearchResults {...routerProps} 
                 stateResults={stateResults}/> 
            </div> } />
            <Route path="/house" 
          render={routerProps =>
            <div>
              <SearchState {...routerProps} 
                 handleChange={handleChange}
                 handleSubmit={handleHouseSubmit}
                 stateSearch={stateSearch}
                 value={"Seach House Reps"}/> 
              <SearchResults {...routerProps} 
                 stateResults={stateResults}/> 
            </div> } />
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
