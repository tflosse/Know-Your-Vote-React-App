import React, {useState} from "react";

function SearchState (props) {
    return (
        <div className="state-search-div">
            <form onSubmit={props.handleSubmit}>
              <label>
                  Search by State (two letter abbreviation)
              </label>
              <input
                className='search-input'
                id='state-search-input'
                type='text'
                value={props.stateSearch}
                onChange={props.handleChange}
              />
              <input
                className='search-input'  
                type='submit'
                value='Search Senate'
                onToggle={props.handleToggle}
              />
              <input
                className='search-input'  
                type='submit'
                value='Search House'
                onToggle={props.handleToggle}
              />
            </form>
        </div>
    )
}

export default SearchState