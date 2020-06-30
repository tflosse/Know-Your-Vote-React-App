import React from "react";
import '../App.css';

function MemberDetails(props) {

    return (
      <div className="member-info">
        <h3> Name here  <span className="name">{props.currentChar.info}</span></h3>
        <p> Info here  <span className="data">{props.currentChar.info}</span></p>
        <p> Info here  <span className="data">{props.currentChar.info}</span></p>
        <p> Info here  <span className="data">{props.currentChar.info}</span></p>
        <p> Info here  <span className="data">{props.currentChar.info}</span></p>
        <p> Info here  <span className="data">{props.currentChar.info}</span></p>
        <div className="member-links">
            <button>Visit their page</button>
            <button>Reach out to your Rep.</button>
            <button>Twitter</button>
            <button>Related Times Articles</button>
        </div>
        < SponsBills />
      </div>
    );
}

export default MemberDetails;