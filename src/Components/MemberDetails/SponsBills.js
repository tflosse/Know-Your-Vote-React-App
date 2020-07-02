import React, {useState} from "react";
import '../App.css';

function SponsBills(props) {

    const [billsList, updateBillsList]= useState([])
    const [billsButton, setBillsButton]= useState('display')
    const [billsDiv, setBillsDiv]= useState('hidden')

    const billsApiCall = async () => {
        console.log(props.memberID)
        const res = await fetch(`https://api.propublica.org/congress/v1/members/${props.memberID}/bills/introduced.json`,
        {
            dataType: "json",
            headers: { "X-API-Key": "ZuPHJPB5SdYllQS7KY4cAVoLY6mdboxoc3nZLOcE" }
        })
        const json = await res.json()
        console.log('bills api data -', json)
        let billsArray = json.results[0].bills
        console.log('bills Array -', billsArray)
        updateBillsList(billsArray)
    };

    console.log('billsList -', billsList)

    const handleShow = () => {
        console.log('Expanding Bills Section');
        billsApiCall()
        setBillsButton('hidden')
        setBillsDiv('shown')
    }; 
    const handleHide = () => {
        console.log('Hiding Bills Section')
        setBillsButton('display')
        setBillsDiv('hidden')
    };

    let bills = billsList.map((bill, i) => {
        return (
            <div key={bill.bill_id}>
                <h4>{bill.short_title}</h4>
                <h5>Introduced on: {bill.introduced_date}<br />
                {bill.committees}</h5>
                <p>{bill.primary_subject}<br />
                {bill.summary? `${bill.summary}`:"Bill Summary Unavailable"}</p>
                <a target="_blank" rel="noopener noreferrer" href={`${bill.congressdotgov_url}`}>Read more...</a>
                <hr />
            </div>
        )
    })

    return (
      <div className="member-bills">
          <button className={`${billsButton}`} onClick={handleShow}>Show Sponsored Bills</button>
          <button className={`${billsDiv}`} onClick={handleHide}>Hide Sponsored Bills</button>
          <div className={`${billsDiv}`}>
              {bills}
          </div>
      </div>
    );
}

export default SponsBills;