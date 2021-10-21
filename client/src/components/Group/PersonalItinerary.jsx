import React, { useState, useEffect } from "react";
import FlightResult from "./FlightResult";
import axios from 'axios';
import PersonalItineraryFlight from "./PersonalItineraryFlight";

function PersonalItinerary(props) {
  var today = new Date();
  var tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const [modalShow, setModalShow] = useState(false);
  const [flightResults, setFlightResults] = useState([]);
  const [originLocation, setOriginLocation] = useState("");
  const [destinationLocation, setDestinationLocation] = useState("");
  const [departureDate, setDepartureDate] = useState(
    today.toISOString().slice(0, 10)
  );
  const [returnDate, setReturnDate] = useState(
    tomorrow.toISOString().slice(0, 10)
    );
    const [flightResultsMeta, setFlightResultsMeta] = useState({});



  function onSearchClick() {
    if (originLocation.length === 3 && destinationLocation.length === 3 && checkDates(departureDate, returnDate)) {
      console.log('onSearchClick')
      var params = {
        originLocationCode: originLocation,
        destinationLocationCode: destinationLocation,
        departureDate: departureDate,
        returnDate: returnDate
      }

      axios.get("/flightoffers", {params: params})
      .then(data => {
        console.log(data.data.data)
        setFlightResults(data.data.data);
        setFlightResultsMeta(data.data.dictionaries);
        setModalShow(true);
      });

    } else {
      alert('Please provide valid inputs')
    }
  }


  function checkDates(departureDate, returnDate) {
    console.log('in checkdates')
    var departureDateArr = departureDate.split('-');
    var returnDateArr = returnDate.split('-');
    departureDate = new Date(departureDateArr[0], parseInt(departureDateArr[1])-1, departureDateArr[2]);
    returnDate = new Date(returnDateArr[0], parseInt(returnDateArr[1])-1, returnDateArr[2]);
    if (returnDate < departureDate) {
      return false
    }
    return  true;
  }

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
                  onClick={() => {
                    setModalShow(false);
                  }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="flightResults">
                  {flightResults.map(flightResult => {return <FlightResult flight={flightResult} meta={flightResultsMeta} setModalShow={setModalShow} uid={props.uid} groupName={props.groupName} setPersonal={props.setPersonal}/>})}
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={() => {
                    setModalShow(false);
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <h5>Your Itinerary</h5>
      <div className="personal-it-container d-flex flex-column">
        <div className="personalItinerary d-flex flex-row">
          <div className="personal-it-left">
            {props.itineraries.length === 0 ?
            <div>Please Select a Flight</div>
            :
            props.itineraries.map((flight, idx) => <PersonalItineraryFlight flight={flight} key={idx}/>)}
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
          <div className='flight-search-form'>
            <form>
              <label>From: </label>
              <input type="text" name="originLocation" value={originLocation} placeholder='Airport Code Only' onChange={(event)=> {setOriginLocation(event.target.value.toUpperCase())}}></input>
              <label>To: </label>
              <input type="text" name="destinationLocation" value={destinationLocation} placeholder='Airport Code Only' onChange={(event) => {setDestinationLocation(event.target.value.toUpperCase())}}></input>
              <label>Departing on: </label>
              <input
                type="date"
                name="departureDate"
                value={departureDate} onChange={(event)=>{setDepartureDate(event.target.value)}}
              ></input>
              <label>Returning on: </label>
              <input
                type="date"
                name="returnDate"
                value={returnDate}
                onChange={(event)=>{setReturnDate(event.target.value)}}
                ></input>
              <button
                className="flight-search"
                onClick={(event) => {
                  event.preventDefault();
                  onSearchClick();
                }}
              >
                Search Flight
              </button>
            </form>
          </div>
      </div>
    </div>
  );
}

export default PersonalItinerary;
