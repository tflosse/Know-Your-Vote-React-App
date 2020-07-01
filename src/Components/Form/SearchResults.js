import React from "react";
import {Link} from "react-router-dom";
import "./Form.css";

function SearchResults(props) {

    let resultsList = props.stateResults.map((member, i) => {
        return (
          <div key={member.id}>
            <h4><Link to={"/member/" + member.last_name}>{member.name}</Link></h4>
            <p>{member.role}, {member.party}</p>
          </div>
        )
      });
    return (
        <div className="results-div">
            <h3>Search Results</h3>
            <div className="search-results">{resultsList}</div>
        </div>
    )
}

export default SearchResults;