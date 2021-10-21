import React, { useState, useEffect } from "react";
import PersonalItinerary from "./PersonalItinerary";
import GroupItinerariesList from "./GroupItinerariesList";
import GroupBulletin from "./GroupBulletin";
import axios from 'axios';

function GroupLandingPage(props) {
  // props takes in group
  // const [stateName, howYouSetState] = useState(defaultValue)
  const [groupBulletin, setGroupBulletin] = useState([]);
  const [personal, setPersonal] = useState({
    flight: "UYGDGUUDG213",
    departureAirport: "IAH",
    arrivalAirport: "JFK",
    departureTime: "10:30am",
    arrivalTime: "12:30pm",
    date: "10/18/2021",
  });
  const [groupItineraries, setGroupItineraries] = useState([
    {
      person: "Chris",
      flight: "UYGDGUUDG213",
      departureAirport: "IAH",
      arrivalAirport: "JFK",
      departureTime: "10:30am",
      arrivalTime: "12:30pm",
      date: "10/18/2021",
    },
    {
      person: "John",
      flight: "UYGDGUUDG213",
      departureAirport: "IAH",
      arrivalAirport: "JFK",
      departureTime: "10:30am",
      arrivalTime: "12:30pm",
      date: "10/18/2021",
    },
    {
      person: "James",
      flight: "UYGDGUUDG213",
      departureAirport: "IAH",
      arrivalAirport: "JFK",
      departureTime: "10:30am",
      arrivalTime: "12:30pm",
      date: "10/18/2021",
    },
    {
      person: "James",
      flight: "UYGDGUUDG213",
      departureAirport: "IAH",
      arrivalAirport: "JFK",
      departureTime: "10:30am",
      arrivalTime: "12:30pm",
      date: "10/18/2021",
    }
  ]);

  useEffect(() => {
    axios.get('/readGroupDetails', {params: {name: 'blues room'}})
    .then(data => {
      setGroupBulletin(data.data.bulletin);
    })
    .catch(err => {
      console.log(err);
    })
  })

  function onAddMemberClick() {
    var email = prompt('Please enter the email of the person you want to add');
    if (email.length !== 0) {
      axios.put('/inviteGroupMember', {email: email})
    }

  }

  function onDeleteClick() {
    window.location.href='/home'
    axios.delete('/deleteGroup', {params: {name: props.name}})
  }

  return (
    <div className="d-flex flex-column groupPage">
      <div className="header d-flex flex-row">
        <div className='adminButtons'>
        <button type="button" className="btn btn-primary deleteGroup" onClick={() => {onDeleteClick()}}>
          Delete Group
        </button>
        <button type="button" className="btn btn-primary" onClick={() => {onAddMemberClick()}}>Add Member</button>
        </div>
        <h4>Group Page</h4>
      </div>
      <div className='page-body d-flex flex-row'>
        <div className='chatBody d-flex'>
          Hello Import from Landing page
          </div>
        <div className="groupBody d-flex flex-column">
          <PersonalItinerary itinerary={personal} />
          <GroupItinerariesList groupItineraries={groupItineraries} />
          <GroupBulletin bulletins={groupBulletin} setGroupBulletin={setGroupBulletin}/>
        </div>
      </div>
    </div>
  );
}

export default GroupLandingPage;
