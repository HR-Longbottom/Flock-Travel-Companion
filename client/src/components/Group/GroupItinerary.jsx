import React, { useState, useEffect } from "react";

function GroupItinerary(props) {

  return (
    <div className='groupItinerary'>
      <div className='person-name'>
        {props.itinerary.person + "'s Itinerary"}
      </div>
      <div className='group-person-itinerary'>
      <div className="personal-plan d-flex flex-row">
              <div className="departure-info flex-column">
                <div className="time">{props.itinerary.departureTime}</div>
                <div className="airport">
                  {props.itinerary.departureAirport}
                </div>
              </div>
              <div>{"--------------------------------->"}</div>
              <div className="arrival-info flex-column">
                <div className="time">{props.itinerary.arrivalTime}</div>
                <div className="airport">{props.itinerary.arrivalAirport}</div>
              </div>
            </div>
          </div>

    </div>
  )
}


export default GroupItinerary;