import React from 'react';

function PersonalItineraryFlight(props) {



  return (
    <div className="nav flex-column">
    <div className="personal-plan d-flex flex-row">
      <div className="departure-info flex-column">
        <div className="airport">
          {props.flight.departureAirport}
        </div>
        <div className="time">{props.flight.departureTime}</div>
      <div className="date">{props.flight.departureDate}</div>
      </div>
      <div>{"--------------------------------->"}</div>
      <div className="arrival-info flex-column">
        <div className="airport">
          {props.flight.arrivalAirport}
        </div>
        <div className="time">{props.flight.arrivalTime}</div>
      <div className="date">{props.flight.arrivalDate}</div>
      </div>
    </div>
  </div>
  )
}

export default PersonalItineraryFlight;