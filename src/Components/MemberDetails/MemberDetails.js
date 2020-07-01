import React from "react";
import './Details.css';

function MemberDetails() {

const [memberDetails, updateMemberDetails]= useState({})

  useEffect(() => {
    const memberApiCall = async () => {
      const res = await fetch(`https://api.propublica.org/congress/v1/members/${memberID}.json`,
      {
        dataType: "json",
        headers: { "X-API-Key": "ZuPHJPB5SdYllQS7KY4cAVoLY6mdboxoc3nZLOcE" }
      })
      const json = await res.json()
      console.log(json)
      let resultsObject = json.results[0]
      updateMemberDetails(resultsObject)
    }
    memberApiCall()
  },[]);

    return (
      <div className="member-info">
        <h3 id="member-name">{memberDetails.info}</h3>
        <p> Role <span className="data">{memberDetails.role}</span></p>
        <p> Party <span className="data">{memberDetails.party}</span></p>
        <p> Next election <span className="data">{memberDetails.next_election}</span></p>
        <p> Sponsored Bills 
            {/* Use the member id to make API call below:
            `https://api.propublica.org/congress/v1/members/${member.id}/bills/introduced.json` 
             Could use < SponsBills /> */}
        </p>
        <p> Lst updated: <span className="data">{memberDetails.last_updated}</span></p>
        <div className="member-links">
            {/* Below links should be written using template literals and site URLs */}
            <button>Visit their page</button>
            <button>Reach out to your Rep.</button>
            <button>Twitter</button>
            <button href="memberDetails.times_topics_url">Related Times Articles</button>
        </div>
      </div>
    );
}

export default MemberDetails;