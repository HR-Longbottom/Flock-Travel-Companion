import React, { useState, useEffect } from "react";
import PersonalItinerary from "./PersonalItinerary";
import GroupItinerariesList from "./GroupItinerariesList";

function GroupLandingPage(props) {
  // props takes in group
  // const [stateName, howYouSetState] = useState(defaultValue)
  const [personal, setPersonal] = useState({flight: 'UYGDGUUDG213', departureAirport: 'IAH', arrivalAirport:'JFK', departureTime:'10:30am', arrivalTime:'12:30pm', date:'10/18/2021'})
  const [groupItineraries, setGroupItineraries] = useState([{person:'chris', flight: 'UYGDGUUDG213', departureAirport: 'IAH', arrivalAirport:'JFK', departureTime:'10:30am',arrivalTime : '12:30pm', date:'10/18/2021'}, {person:'john', flight: 'UYGDGUUDG213', departureAirport: 'IAH', arrivalAirport:'JFK', departureTime:'10:30am',arrivalTime : '12:30pm', date:'10/18/2021'}, {person:'james', flight: 'UYGDGUUDG213', departureAirport: 'IAH', arrivalAirport:'JFK', departureTime:'10:30am',arrivalTime : '12:30pm', date:'10/18/2021'}]);



  return (
    <div>
      <div className='header d-flex flex-row'>
        <button type='button' className='btn btn-primary deleteGroup'>Delete Group</button>
      <h4>Group Page</h4>
      </div>
      <PersonalItinerary itinerary={personal}/>
      <GroupItinerariesList groupItineraries={groupItineraries}/>
    </div>
  );
}

export default GroupLandingPage;
