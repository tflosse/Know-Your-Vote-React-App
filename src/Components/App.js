import React, {useState} from 'react';
import {Route, Link, Switch, Redirect} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import SearchState from "./Form/SearchState";
import SearchResults from "./Form/SearchResults";
import MemberDetails from "./MemberDetails/MemberDetails";
import './App.css';
// import styled, {css} from 'styled-components';


function App() {
  const [stateSearch, setStateSearch]= useState('')
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

  const [mobileMenu, setMobileMenu]= useState('close')
  const [hamburger, setHamburger]= useState('displaying')

  const setOpen = () => {
    console.log('Expanding Mobile Menu');
    setHamburger('hidden')
    setMobileMenu('open')
  }; 
  const setClose = () => {
      console.log('Hiding Mobile Menu')
      setHamburger('displaying')
      setMobileMenu('close') 
  };

  return (
    <div className="App">
      <nav>
        <Link to="/" 
        className="home-title">
          Know your Vote
        </Link>
        <img src="https://i.imgur.com/2GuvUqT.png" alt="Congress Illustration"/>
        <button 
          className={`${hamburger} mobile-nav hamburger`} 
          onClick={setOpen}>
          ☵</button>
        <div className={`${mobileMenu} sticky-nav`}>  
          <button className="mobile-nav x-button" onClick={setClose}>X</button>  
          <Link to="/senate" 
          className="nav-options"
          id="nav-search"
          onClick={setClose}>
            Senate 
          </Link>
          <Link to="/house" 
          className="nav-options"
          id="nav-search"
          onClick={setClose}>
            House
          </Link>
          <Link to="/about" 
          className="nav-options"
          id="nav-about"
          onClick={setClose}>
            About
          </Link>
        </div> 
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
              {stateResults?
              <SearchResults {...routerProps} 
                 stateResults={stateResults}
                 stateSearch={stateSearch}/>:<h4>{"Please enter a valid two-letter state abbriviation."}</h4>}
            </div> } />
            <Route path="/house" 
          render={routerProps =>
            <div>
              <SearchState {...routerProps} 
                 handleChange={handleChange}
                 handleSubmit={handleHouseSubmit}
                 stateSearch={stateSearch}
                 value={"Seach House Reps"}/> 
              {stateResults?
              <SearchResults {...routerProps} 
                 stateResults={stateResults}
                 stateSearch={stateSearch}/>:<h4>{"Please enter a valid two-letter state abbriviation."}</h4>}
            </div> } />
            <Route path="/member/:id"
              render={routerProps =>
                <MemberDetails {...routerProps} 
                /> } />
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
