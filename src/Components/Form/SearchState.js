import React from "react";
import "./Form.css";

function SearchState (props) {
    return (
        <div className="search-div">
            <form onSubmit={props.handleSubmit}>
              <label>
                  Search by State
              </label>
              <input
                className='search-input'
                id='state-search-input'
                type='text'
                value={props.stateSearch}
                onChange={props.handleChange}
              />
              <input
                id='submit-search'  
                type='submit'
                value={props.value}
              />
            </form>
        </div>
    )
}

export default SearchState