import React, { useState, useEffect } from "react";
import axios from 'axios';

function FlightResult(props) {
  var nonstopOutbound = true;
  var nonstopReturn = true;
  if (props.flight.itineraries[0].segments.length > 1) {
    nonstopOutbound = false;
  }
  if (props.flight.itineraries[1].segments.length > 1) {
    nonstopReturn = false;
  }

  function addFlight(nonstopOutbound, nonstopReturn) {
    console.log(props.flight.itineraries)
    console.log('in add flight function')

    var flights = [];
    flights.push({
      uid: props.uid,
      groupName: props.groupName,
      departureTime: props.flight.itineraries[0].segments[0].departure.at.slice(11, 16),
      departureDate: props.flight.itineraries[0].segments[0].departure.at.slice(0, 10),
      carrier: props.meta.carriers[props.flight.itineraries[0].segments[0].carrierCode],
      arrivalTime: props.flight.itineraries[0].segments[0].arrival.at.slice(11,16),
      arrivalDate: props.flight.itineraries[0].segments[0].arrival.at.slice(0,10),
      departureAirport: props.flight.itineraries[0].segments[0].departure.iataCode,
      arrivalAirport: props.flight.itineraries[0].segments[0].arrival.iataCode
    });
    flights.push({
      uid: props.uid,
      groupName: props.groupName,
      departureTime: props.flight.itineraries[1].segments[0].departure.at.slice(11, 16),
      departureDate: props.flight.itineraries[1].segments[0].departure.at.slice(0, 10),
      carrier: props.meta.carriers[props.flight.itineraries[1].segments[0].carrierCode],
      arrivalTime: props.flight.itineraries[1].segments[0].arrival.at.slice(11,16),
      arrivalDate: props.flight.itineraries[1].segments[0].arrival.at.slice(0,10),
      departureAirport: props.flight.itineraries[1].segments[0].departure.iataCode,
      arrivalAirport: props.flight.itineraries[1].segments[0].arrival.iataCode
    });
    if (nonstopOutbound === false) {
      flights.push({
        uid: props.uid,
        groupName: props.groupName,
        departureTime: props.flight.itineraries[0].segments[1].departure.at.slice(11, 16),
        departureDate: props.flight.itineraries[0].segments[1].departure.at.slice(0, 10),
        carrier: props.meta.carriers[props.flight.itineraries[0].segments[1].carrierCode],
        arrivalTime: props.flight.itineraries[0].segments[1].arrival.at.slice(11,16),
        arrivalDate: props.flight.itineraries[0].segments[1].arrival.at.slice(0,10),
        departureAirport: props.flight.itineraries[0].segments[1].departure.iataCode,
        arrivalAirport: props.flight.itineraries[0].segments[1].arrival.iataCode
      });
    }
    if (nonstopReturn === false) {
      flights.push({
        uid: props.uid,
        groupName: props.groupName,
        departureTime: props.flight.itineraries[1].segments[1].departure.at.slice(11, 16),
        departureDate: props.flight.itineraries[1].segments[1].departure.at.slice(0, 10),
        carrier: props.meta.carriers[props.flight.itineraries[1].segments[1].carrierCode],
        arrivalTime: props.flight.itineraries[1].segments[1].arrival.at.slice(11,16),
        arrivalDate: props.flight.itineraries[1].segments[1].arrival.at.slice(0,10),
        departureAirport: props.flight.itineraries[1].segments[1].departure.iataCode,
        arrivalAirport: props.flight.itineraries[1].segments[1].arrival.iataCode
      });
    }
    console.log(flights);
    axios.post('/createFlight', {uid: props.uid, groupName: props.groupName, flights: flights})
    .then(data => {
      props.setModalShow(false);
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <div className="flightResult d-flex flex-row">
      <div className="flightInfo">
        <div className="flightDirection">Outbound Flight:</div>
        {nonstopOutbound ? (
          <div className="outboundFlight d-flex flex-row">
            <div className="outboundDeparture">
              <div className="columnTitle">Origin</div>
              <div className="outboundDepartureLocation">
                {props.flight.itineraries[0].segments[0].departure.iataCode}
              </div>
              <div className="outboundDepartureTime">
                {" "}
                {props.flight.itineraries[0].segments[0].departure.at.slice(
                  11,
                  16
                )}
              </div>
              <div className="outboundDepartureDate">
                {props.flight.itineraries[0].segments[0].departure.at.slice(
                  0,
                  10
                )}
              </div>
            </div>
            <div className="outboundArrival">
              <div className="columnTitle">Destination</div>
              <div className="outboundArrivalLocation">
                {props.flight.itineraries[0].segments[0].arrival.iataCode}
              </div>
              <div className="outboundArrivalTime">
                {props.flight.itineraries[0].segments[0].arrival.at.slice(
                  11,
                  16
                )}{" "}
              </div>
              <div className="outboundArrivalDate">
                {props.flight.itineraries[0].segments[0].arrival.at.slice(
                  0,
                  10
                )}{" "}
              </div>
            </div>
          </div>
        ) : (
          <div className="outboundFlight d-flex flex-row">
            <div className="outboundDeparture">
              <div className="columnTitle">Origin</div>
              <div className="outboundDepartureLocation">
                {props.flight.itineraries[0].segments[0].departure.iataCode}
              </div>
              <div className="outboundDepartureTime">
                {" "}
                {props.flight.itineraries[0].segments[0].departure.at.slice(
                  11,
                  16
                )}
              </div>
              <div className="outboundDepartureDate">
                {props.flight.itineraries[0].segments[0].departure.at.slice(
                  0,
                  10
                )}
              </div>
            </div>
            <div className="connectionArrival">
              <div className="columnTitle">Connection</div>
              <div className="outboundArrivalLocation">
                {props.flight.itineraries[0].segments[0].arrival.iataCode}
              </div>
              <div className="outboundArrivalTime">
                {props.flight.itineraries[0].segments[0].arrival.at.slice(
                  11,
                  16
                )}{" "}
              </div>
              <div className="outboundArrivalDate">
                {props.flight.itineraries[0].segments[0].arrival.at.slice(
                  0,
                  10
                )}{" "}
              </div>
            </div>

            <div className="connectionDeparture">
              <div className="columnTitle">Connection</div>
              <div className="outboundDepartureLocation">
                {props.flight.itineraries[0].segments[1].departure.iataCode}
              </div>
              <div className="outboundDepartureTime">
                {" "}
                {props.flight.itineraries[0].segments[1].departure.at.slice(
                  11,
                  16
                )}
              </div>
              <div className="outboundDepartureDate">
                {props.flight.itineraries[0].segments[1].departure.at.slice(
                  0,
                  10
                )}
              </div>
            </div>
            <div className="outboundArrival">
              <div className="columnTitle">Destination</div>
              <div className="outboundArrivalLocation">
                {props.flight.itineraries[0].segments[1].arrival.iataCode}
              </div>
              <div className="outboundArrivalTime">
                {props.flight.itineraries[0].segments[1].arrival.at.slice(
                  11,
                  16
                )}{" "}
              </div>
              <div className="outboundArrivalDate">
                {props.flight.itineraries[0].segments[1].arrival.at.slice(
                  0,
                  10
                )}{" "}
              </div>
            </div>
          </div>
        )}
        <div className="flightDirection">Return Flight:</div>
        {nonstopReturn ? (
          <div className="returnFlight d-flex flex-row">
            <div className="returnDeparture">
              <div className="columnTitle">Origin</div>
              <div className="returnDepartureLocation">
                {props.flight.itineraries[1].segments[0].departure.iataCode}
              </div>
              <div className="returnDepartureTime">
                {props.flight.itineraries[1].segments[0].departure.at.slice(
                  11,
                  16
                )}
              </div>
              <div className="returnDepartureDate">
                {props.flight.itineraries[1].segments[0].departure.at.slice(
                  0,
                  10
                )}
              </div>
            </div>
            <div className="returnArrival">
              <div className="columnTitle">Destination</div>
              <div className="returnArrivalLocation">
                {props.flight.itineraries[1].segments[0].arrival.iataCode}
              </div>
              <div className="returnArrivalTime">
                {props.flight.itineraries[1].segments[0].arrival.at.slice(
                  11,
                  16
                )}
              </div>
              <div className="returnArrivalDate">
                {props.flight.itineraries[1].segments[0].arrival.at.slice(
                  0,
                  10
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="returnFlight d-flex flex-row">
            <div className="returnDeparture">
              <div className="columnTitle">Origin</div>
              <div className="returnDepartureLocation">
                {props.flight.itineraries[1].segments[0].departure.iataCode}
              </div>
              <div className="returnDepartureTime">
                {props.flight.itineraries[1].segments[0].departure.at.slice(
                  11,
                  16
                )}
              </div>
              <div className="returnDepartureDate">
                {props.flight.itineraries[1].segments[0].departure.at.slice(
                  0,
                  10
                )}
              </div>
            </div>
            <div className="connectionArrival">
              <div className="columnTitle">Connection</div>
              <div className="returnArrivalLocation">
                {props.flight.itineraries[1].segments[0].arrival.iataCode}
              </div>
              <div className="returnArrivalTime">
                {props.flight.itineraries[1].segments[0].arrival.at.slice(
                  11,
                  16
                )}
              </div>
              <div className="returnArrivalDate">
                {props.flight.itineraries[1].segments[0].arrival.at.slice(
                  0,
                  10
                )}
              </div>
            </div>

            <div className="connectionDeparture">
              <div className="columnTitle">Connection</div>
              <div className="returnDepartureLocation">
                {props.flight.itineraries[1].segments[1].departure.iataCode}
              </div>
              <div className="returnDepartureTime">
                {props.flight.itineraries[1].segments[1].departure.at.slice(
                  11,
                  16
                )}
              </div>
              <div className="returnDepartureDate">
                {props.flight.itineraries[1].segments[1].departure.at.slice(
                  0,
                  10
                )}
              </div>
            </div>
            <div className="returnArrival">
              <div className="columnTitle">Destination</div>
              <div className="returnArrivalLocation">
                {props.flight.itineraries[1].segments[1].arrival.iataCode}
              </div>
              <div className="returnArrivalTime">
                {props.flight.itineraries[1].segments[1].arrival.at.slice(
                  11,
                  16
                )}
              </div>
              <div className="returnArrivalDate">
                {props.flight.itineraries[1].segments[1].arrival.at.slice(
                  0,
                  10
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="addFlightButton">
        <button
          className="addFlight"
          onClick={(event) => {
            event.preventDefault();
            console.log('clicked on addflight')
            addFlight(nonstopOutbound, nonstopReturn)
          }}
        >
          Add Flight
        </button>
      </div>
    </div>
  );
}

export default FlightResult;
