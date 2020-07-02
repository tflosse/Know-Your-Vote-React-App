import React from "react";
import {Link} from "react-router-dom";
import "./App.css";

function Home() {
    return (
    <div className="home-div">
        <h2>Know your Vote :  Home</h2>
        <p>
            Here you can search for the 535 members of the two chambers of Congress.<br /><br />
            <span className="constit-quote">"All legislative Powers herein granted shall be vested in a Congress of the United States, which shall consist of a Senate and House of Representatives." </span><br /><br />
            The House and Senate are equal partners in the legislative process—legislation cannot be enacted without the consent of both chambers. However, the Constitution grants each chamber some unique powers.
            The Senate ratifies treaties and approves presidential appointments while the House initiates revenue-raising bills. The House initiates impeachment cases, while the Senate decides impeachment cases.
        </p><br />
        <h4>Why does it matter?</h4>
        <p>Most incumbents seek re-election, and their historical likelihood of winning subsequent elections exceeds 90 percent. We need to know how our reps use the power we give them as voters and gain a better understanding of their interactions with so-called intermediary institutions such as political parties, civic associations, interest groups, and the mass media, to ensure we continue to elect adequate local representation to the federal government of our congressional districts by House reps and state's at-large representation by senators.
        </p><br />
        <h4>The Senate</h4>
        <p>
        Each state, regardless of population or size, has two senators: 100 senators representing the 50 states. Each senator is elected at-large in their state for a six-year term, with terms staggered, so every two years approximately one-third of the Senate is up for election.
        </p>
        <Link className="nav-options" to="/senate">Search Senators</Link><br />
        <br /><h4>The House</h4>
        <p>
        The members of the House of Representatives serve two-year terms representing the people of a single constituency, known as a district. Congressional districts are apportioned to states by population using the United States Census results, provided that each state has at least one congressional representative.
        </p>
        <Link className="nav-options" to="/house"> Search House Reps</Link><br />
    </div>
    )
}
export default Home;