import React, { useState, useEffect } from "react";
import FlightResult from "./FlightResult";

function PersonalItinerary(props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="personal-info mt-8">
      {modalShow && (
        <div className="flight-modal lightbox">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Search
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={()=>{setModalShow(false)}}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className='flightResults'>
                  {/* {flightResults.map(flightResult => {return <FlightResult flight={flightResult} setModalShow={setModalShow} />})} */}
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={()=>{setModalShow(false)}}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <h5>Your Itinerary</h5>
      <div className="personalItinerary d-flex flex-row">
        <div className="personal-it-left">
          <div className="nav flex-column">
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
            <button
              className="flight-search"
              onClick={() => {
                setModalShow(true);
              }}
            >
              Search Flight
            </button>
          </div>
        </div>
        <div className="personal-it-right">
          <div className="nav flex-column">
            <div className="nav-item export-button">
              <button
                type="button"
                className="btn btn-secondary export-calendar"
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
