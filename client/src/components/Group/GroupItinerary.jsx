import React, { useState, useEffect } from "react";
import GroupItineraryFlight from "./GroupItineraryFlight";

function GroupItinerary(props) {

  return (
    <div className="groupItinerary">
      <div className="person-name">{props.name + "'s Itinerary"}</div>
      <div className="group-person-itinerary">
        {props.itinerary !== undefined ? (
          props.itinerary.map((flight, idx) => {
            return <GroupItineraryFlight flight={flight} key={idx} />
          })
          ) :
          <div>No Selected Flight</div>
        }
      </div>
    </div>
  );
}

export default GroupItinerary;
