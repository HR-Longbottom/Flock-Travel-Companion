import React, { useState, useEffect } from "react";


function FlightResult(props) {


  return (
    <div className='flightResult d-flex flex-row'>
      <div className='flightInfo'>{props.flightResult.itineraries}</div>
      <button className='addFlight' onClick={()=> {setModalShow(false)}}>Add Flight</button>
    </div>
  )
}


export default FlightResult;