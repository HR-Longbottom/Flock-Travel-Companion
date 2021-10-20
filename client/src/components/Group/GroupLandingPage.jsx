import React, { useState, useEffect } from "react";
import PersonalItinerary from "./PersonalItinerary";
import GroupItinerariesList from "./GroupItinerariesList";
import GroupBulletin from "./GroupBulletin";

function GroupLandingPage(props) {
  // props takes in group
  // const [stateName, howYouSetState] = useState(defaultValue)
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

  return (
    <div className="d-flex flex-column groupPage">
      <div className="header d-flex flex-row">
        <div className='adminButtons'>
        <button type="button" className="btn btn-primary deleteGroup">
          Delete Group
        </button>
        <button type="button" className="btn btn-primary">Add Member</button>
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
          <GroupBulletin bulletins={['Go to Paris','Go to Louvre','Eat steak']}/>
        </div>
      </div>
    </div>
  );
}

export default GroupLandingPage;
