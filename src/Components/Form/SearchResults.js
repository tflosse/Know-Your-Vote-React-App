import React from "react";
import {Link} from "react-router-dom";
import "./Form.css";

function SearchResults(props) {

    let resultsList = props.stateResults.map((member, i) => {
        return (
          <div key={member.id}
          className={`${member.party==="D"? "dem" : "rep"}`}>
            <Link to={"/member/" + member.id}>
            <h4>{member.name}</h4>
            <p>{member.role}, {member.party}<br />
            {`${member.district? `District ${member.district}` : " "}`}
            </p></Link>
          </div>
        )
      });
    return (
        <div className="results-div">
            <h3>Congress Members</h3>
            <div className="search-results">{resultsList}</div>
        </div>
    )
}

export default SearchResults;