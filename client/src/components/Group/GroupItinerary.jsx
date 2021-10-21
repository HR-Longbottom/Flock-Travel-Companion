import React, { useState, useEffect } from "react";
import GroupItineraryFlight from "./GroupItineraryFlight";

function GroupItinerary(props) {
  return (
    <div className="groupItinerary">
      <div className="person-name">{props.name + "'s Itinerary"}</div>
      <div className="group-person-itinerary">
        {props.itinerary === undefined ? (
          <div>No Selected Flight</div>
          ) :
        (
          props.itinerary.map(flight => {
            <GroupItineraryFlight flight={flight} />
          })
        )
        }
      </div>
    </div>
  );
}

export default GroupItinerary;
