
# Project Overview

This React App aims at using the ProPublica API to allow users and voters to easily access information about their House Representatives and Senate Members, as well as direct links to articles, contact forms, and involvement in various Bills.

​ 
![VOTE Smart](https://s.yimg.com/ny/api/res/1.2/3NaIFgeWkaXIf91cfAKjGQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/cosmopolitan_438/5eb0e5bbd540b600ee183bfb0bddc529)

## Project Links


- [Github Repo](https://github.com/tflosse/React-Project)

- [Github Page](https://tflosse.github.io/React-Project/)

​

## Project Description

This React App will feature lists of Congress members, both house and Senate along with basic information about their roles and direct links to their contact forms and recent Time magazine articles when available.

The goal of this app is to increase political engagement by making this information more accessible and easier to navigate.​


## API

ProPublica's Congress API allows developers to retrieve legislative data from the House of Representatives, the Senate and the Library of Congress. The API, which originated at The New York Times in 2009, includes details about members, votes, bills, nominations and other aspects of congressional activity.

ProPublica is an independent nonprofit newsroom that aims to produce investigative journalism in the public interest. In 2010, it became the first online news source to win a Pulitzer Prize.

    Accessible data includes:

    - Member data: Along with general biographical information for current and past members of Congress, the API returns data about members’ Congressional roles. 
    Role data includes the Congress number and chamber, as well as the member’s title, state and party. 
    A single member may have more than one role in a particular Congress (for example, the member may switch parties or move from the House to the Senate). 
    Member data is available for every member who has served in Congress, with more information for those who have served since 1995.
    - Bill data: Along with standard bill summaries and details, the API returns bill subjects, amendments and related bills.
    - Lobbying data: The API returns data about filings from registered lobbyists.

More details about this API can be found [here](https://projects.propublica.org/api-docs/congress-api/)

```js
    // Example API Call
        fetch("https://api.propublica.org/congress/v1/members/H001075.json", 
        {
        dataType: "json",
        headers: { "X-API-Key": "ZuPHJPB5SdYllQS7KY4cAVoLY6mdboxoc3nZLOcE" }
        })
```

```json

Object {status: "OK", copyright: "Copyright (c) 2020 Pro Publica Inc. All Rights Reserved.", results: Array[1]}

results: Array[1]
0: Object
id: "H001075"
member_id: "H001075"
first_name: "Kamala"
middle_name: null
last_name: "Harris"
suffix: null
date_of_birth: "1964-10-20"
gender: "F"
url: "https://www.harris.senate.gov"
votesmart_id: "120012"
twitter_account: "SenKamalaHarris"
facebook_account: "SenatorKamalaHarris"
google_entity_id: "/m/08sry2"
in_office: true
current_party: "D"
most_recent_vote: "2020-06-25"
last_updated: "2020-06-26 09:49:38 -0400"
roles: Array[2]
0: Object
1: Object
congress: "115"
chamber: "Senate"
title: "Senator, 3rd Class"
short_title: "Sen."
state: "CA"
(...)
office: "112 Hart Senate Office Building"
phone: "202-224-3553"
contact_form: "https://www.harris.senate.gov/content/contact-senator"
next_election: "2022"
bills_sponsored: 52
bills_cosponsored: 396
votes_with_party_pct: 85.71
votes_against_party_pct: 14.29
committees: Array[5]
subcommittees: Array[8]

```


## Wireframes

![Simplified Wireframes](https://i.imgur.com/pcnVlyp.png)

![React architecture & API Calls](https://i.imgur.com/NXX21Sv.png)



## MVP/PostMVP

The functionalities will then be divided into two separate lists: MPV and PostMVP.  

#### MVP OBJECTIVES

- Use Propublica API to render a list of Congress members in two tabs for the House and Senate respectively

- Allow user to interact with the page with the following:
    - Add a toggle for Sente and House lists
    - Search bars to filter for both Senate and House
    - Clicking to Rep. details
    - Accessing links to Rep. external pages
        - Rep. website
        - Contact form when available
        - Links to related Times Magazine articles
        - Link to their Twitter Account when available

![Contact Kamala](https://i.imgur.com/UXvHJg0.png)
![Diane Feinstein in Times](https://i.imgur.com/Y543sxM.png)


#### PostMVP OBJECTIVES

- Homepge form will collect Name and Zipcode, with an option to include an email address and receive a future "newsletter" with voting information.

- Member details' pages will provide a list of recently sponsored Bills

- Allow user to export and send links

- Create a Rep "Watch list" (undecided on this feature)


## React Components

- App
- Form (search bar)
- Search Result
- Result List
- Member Details

Post-MVP:
- User Info Form
- Bills List
- Bills Details
- Sharing Tab (Sending Rep. info via link)


#### Components and Descriptions

- App
    - Homepage
    - About: A Word about ProPublica and their Congress API
    - Search/Results Page
    - House/Senate Members Lists (Toggles)
        - Individual Member's pages
        (By clicking on Members for both of the above)
__

| Component | Description | 
| --- | :---: |  
| App | Sets up app with React Router | 
| Header | Renders the header and Nav | 
| Main | Contains Nav and Switch/Routes |
| Search by State | Form allows users to search by state |
| Senators | Renders Senate Members by State |
| House List| Renders full List of House Reps. for each state |
| Member Details | Renders details for selected Rep. |
| Options | Option navigate to the next or previous Rep. -- INC |
| About Page | Credits API and shares details about it |


## Timeframes

Unless otherwise noted, time is listed in hours:

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create React app and install all dependencies| H | 1 | 30min | 30min |
| Set up React structure and components | H | 1 | 1 | 1 |
| Set up Navbar, Main Skeleton and Routes| H | 1.5 | 2 | 2 |
| Research API resources | H | 2 | 3 | 3 |
| Make API calls and inspect data structures | H | 1 | 2.5 | 2.5 |
| Render lists, set up Hide/Show | H | 2 | 3 | 3 |
| Style the lists and buttons | H | 1 | 0.5 | 0.5 |
| Buttons for Individuals, onClick | H | 2 | 1 | 1 |
| Render individual info on separate route | M | 3 | 3 | 3 |
| Conditional logic for displaying external links | M | 2 | INC | INC |
| Style the individual pages | H | 1 | 1 | 1 |
| Search by State, onChange, onSubmit | H | 2 | 3 | 3 |
| Render Search Results | H | 4 | 4 | 4 |
| Add content for About page | M | 30min | 30min | 30min |
| Create sharing links | L | ? | INC | INC |
| User Form on Homepage | L | ? | INC | INC |
| Render list of Sponsored Bills | L | 3 | 2 | 2 |
| Additional features (progress bar, etc.) | L | 4 | INC | INC |
| Additional styling & Media Queries | L | 4 | 3 | 3 |
| Total | H | 35 | 30 | 30 |

## Additional Libraries

- Styled-Components
- Framer Motion (attempted for animations but not used)
    - Hamburger menu button fully adaptive by preserving its stroke width and its aspect ratio on active state, based on a Sandbox by [charliecm](https://codesandbox.io/s/hamburger-menu-with-framer-motion-iwxtp?file=/package.json)

## Code Snippet

Used states to bypass an issue with data type, and useEffect to make the API call when details page loads:

```js
function MemberDetails(props) {

const [memberDetails, updateMemberDetails]= useState({})
const [memberRole, setMemberRole]= useState({})
useEffect(() => {
    const memberApiCall = async () => {
      const res = await fetch(`https://api.propublica.org/congress/v1/members/${props.match.params.id}.json`,
      {
        dataType: "json",
        headers: { "X-API-Key": "ZuPHJPB5SdYllQS7KY4cAVoLY6mdboxoc3nZLOcE" }
      })
      const json = await res.json()
      let resultsObject = json.results[0]
      let role = json.results[0].roles[0]
      updateMemberDetails(resultsObject)
      setMemberRole(role)
    }
    memberApiCall()
  }, []); 
  return (
      <div className="member-info">
        <h3 id="member-name">{memberRole.short_title} {memberDetails.first_name} {memberDetails.last_name}</h3>
        <p>{currentParty(memberDetails.current_party)}<br />
        In role since: {memberRole.start_date}<br />
        Next election: {memberRole.next_election}</p>
      </div>
    )
};
```

Used states to show/hide details sections:

```js
    const [billsButton, setBillsButton]= useState('display')
    const [billsDiv, setBillsDiv]= useState('hidden')
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
    return (
      <div className="member-bills">
          <button className={`${billsButton}`} onClick={handleShow}>Show Sponsored Bills</button>
          <button className={`${billsDiv}`} onClick={handleHide}>Hide Sponsored Bills</button>
      </div>
    )
```

Used ternary to avoid rendering undefined elements:

```js
{stateResults?
              <SearchResults {...routerProps} 
                 stateResults={stateResults}
                 stateSearch={stateSearch}/>:<h4>{"Please enter a valid two-letter state abbriviation."}</h4>}

(...)

<p className="bill-summary">{bill.summary? `${bill.summary}`:"Bill Summary Unavailable"}</p>
```

