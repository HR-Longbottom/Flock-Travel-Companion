import React from 'react';

function GroupItineraryFlight(props) {
  return (
    <div className="personal-plan d-flex flex-row">
    <div className="departure-info flex-column">
      <div className="time">{props.flight.departureTime}</div>
      <div className="airport">{props.flight.departureAirport}</div>
    </div>
    <div>{"--------------------------------->"}</div>
    <div className="arrival-info flex-column">
      <div className="time">{props.flight.arrivalTime}</div>
      <div className="airport">{props.flight.arrivalAirport}</div>
    </div>
  </div>
  )
}

export default GroupItineraryFlight;