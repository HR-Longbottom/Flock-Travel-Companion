import React, { useState, useEffect } from "react";

function PersonalItinerary(props) {
  return (
    <div>
      <h5>Your Itinerary</h5>
      <div className="personalItinerary d-flex flex-row">
        <div className="personal-it-left">
          <div className="nav flex-column">
            <div className="personal-plan d-flex flex-row">
              <div className="departure-info flex-column">
                <div className='time'>{props.itinerary.departureTime}</div>
                <div className='airport'>{props.itinerary.departureAirport}</div>
              </div>
              <div>{"------->"}</div>
              <div className="arrival-info flex-column">
                <div className='time'>{props.itinerary.arrivalTime}</div>
                <div className='airport'>{props.itinerary.arrivalAirport}</div>
              </div>
            </div>
            <div className="flight-search">flight search</div>
          </div>
        </div>
        <div className="personal-it-right">
          <div className="nav flex-column">
            <div className="nav-item export-button">
              <button
                type="button"
                className="btn btn-secondary export-calender"
              >
                Export To Calender
              </button>
            </div>
            <div className="nav-item download-button">
              <button
                type="button"
                className="btn btn-secondary download-itinerary"
              >
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalItinerary;
