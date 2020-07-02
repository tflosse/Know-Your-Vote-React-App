import React, {useState, useEffect} from "react";
import SponsBills from "./SponsBills";
import './Details.css';

function MemberDetails(props) {

const [memberDetails, updateMemberDetails]= useState({})
const [memberRole, setMemberRole]= useState({})
// const [committees, updateCommittees]= ([])

  useEffect(() => {
    const memberApiCall = async () => {
    console.log(props)
      const res = await fetch(`https://api.propublica.org/congress/v1/members/${props.match.params.id}.json`,
      {
        dataType: "json",
        headers: { "X-API-Key": "ZuPHJPB5SdYllQS7KY4cAVoLY6mdboxoc3nZLOcE" }
      })
      const json = await res.json()
      let resultsObject = json.results[0]
      let role = json.results[0].roles[0]
    //   let comm = json.results[0].roles[0].committees
      updateMemberDetails(resultsObject)
      setMemberRole(role)
    //   updateCommittees(comm)
    }
    memberApiCall()
  }, []); 

  const currentParty = (p) => {
    if (p==="D") {
        return ("Democrat")
    } else if (p==="R") {
        return ("Republican")
    } else {
        return ("Other")
    }
  };
 currentParty();

 const memberID = memberDetails.id

console.log('memberID -', memberID)
console.log('memberDetails -', memberDetails)
console.log('memberRole -', memberRole)

// const committeesList = committees.map(e => {
//     return (
//     <li>{e.name}</li>
//     )
// });

    return (
      <div className="member-info">
        <h3 id="member-name">{memberRole.short_title} {memberDetails.first_name} {memberDetails.last_name}</h3>
        <p>{currentParty(memberDetails.current_party)}<br />
        In role since: {memberRole.start_date}<br />
        Next election: {memberRole.next_election}</p><br />
        {/* <ul className="committees">
            {committeesList}
        </ul> */}
        <div className="member-links">
            {/* URL for the contact form and phone number below are contained in "roles" array*/}
            <a target="_blank" rel="noopener noreferrer" href={`${memberDetails.url}`}>
                <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                Visit their page </a><br />
            <a target="_blank" rel="noopener noreferrer" href={`${memberRole.contact_form}`}>
                <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                Contact Form </a><br />
            <a href=""><svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            {memberRole.phone} </a><br /><br />
            <a target="_blank" rel="noopener noreferrer" href={`https://www.twitter.com/${memberDetails.twitter_account}`}>
                <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                Twitter</a><br />
            <a target="_blank" rel="noopener noreferrer" href={`https://www.facebook.com/${memberDetails.facebook_account}`}>
                <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                Facebook</a><br /><br />
            <a target="_blank" rel="noopener noreferrer" href={`${memberDetails.times_topics_url}`}>
                <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                Related Times Articles</a>
        </div><br />
        <SponsBills 
            memberID={memberID}/>
        <p id="updated"> Last updated: {memberDetails.last_updated}</p>
      </div>
    );
}

export default MemberDetails;