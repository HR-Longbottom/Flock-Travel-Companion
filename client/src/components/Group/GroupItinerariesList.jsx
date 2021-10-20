import React, { useState, useEffect } from "react";
import GroupItinerary from "./GroupItinerary";

function GroupItinerariesList(props) {

  return (
    <div className='groupItinerariesList'>
      <h4>Group Members' Itineraries</h4>
      <div className='group-itineraries-collection'>

      {props.groupItineraries.map(itinerary => {return <GroupItinerary itinerary={itinerary} />})}
      </div>
    </div>
  )
}


export default GroupItinerariesList;