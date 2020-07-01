import React from "react";
import '../App.css';

function SponsBills(props) {

    {/* Use the member id to make API call below:
    `https://api.propublica.org/congress/v1/members/${member.id}/bills/introduced.json` 
    Could use < SponsBills /> */}
    
    return (
      <div className="member-bills">
          <ul className="bills-list">
              <li></li>
              <li></li>
              <li></li>
          </ul>
      </div>
    );
}

export default SponsBills;