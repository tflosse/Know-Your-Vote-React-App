import React from "react";

function About() {
    return (
        <div className="about-div">
            <h4>What do we do?</h4>
            <p>We set out to build an app that would help people, and voters, in particular,
            understand the important of civic action, and better know who represents them
            both in the Senate and in the House of Representatives.</p><br />
            <h4>Where do we get this information?</h4>
            <p>The list of Congress members as well as their information and external links
            are proided by ProPublica API (Application Programming Interface) 
            made available to developers.</p><br />
            {/* <h4>Question</h4>
            <p>Answer</p> */}
            
            <hr className="separator" />
            <h4>About ProPublica</h4>
            <p>ProPublica is an independent nonprofit newsroom that produces 
            investigative journalism in the public interest. In 2010, it became
            the first online news source to win a Pulitzer Prize.<br />
            ProPublica's Congress API provides access to legislative data from 
            the House of Representatives, the Senate, and the Library of Congress. 
            The API, which originated at The New York Times in 2009, includes details 
            about members, votes, bills, nominations and other aspects of 
            congressional activity.
            </p>
        </div>
    )
}
export default About;