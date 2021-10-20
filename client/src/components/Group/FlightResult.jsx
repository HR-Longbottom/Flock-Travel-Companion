import React, { useState, useEffect } from "react";

function FlightResult(props) {
  console.log(props.flight.itineraries[0].segments[0].departure);
  var nonstopOutbound = true;
  var nonstopReturn = true;
  if (props.flight.itineraries[0].segments.length > 1) {
    nonstopOutbound = false;
  }
  if (props.flight.itineraries[1].segments.length > 1) {
    nonstopReturn = false;
  }
  return (
    <div className="flightResult d-flex flex-row">
      <div className="flightInfo">
        <div className='flightDirection'>
        Outbound Flight:
        </div>
        {nonstopOutbound ? (
          <div className="outboundFlight d-flex flex-row">
            <div className="outboundDeparture">
              <div className='columnTitle'>
              Origin
                </div>
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
            <div className='columnTitle'>
              Destination
                </div>
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
            <div className='columnTitle'>
              Origin
                </div>
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
            <div className='columnTitle'>
              Connection
                </div>
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
            <div className='columnTitle'>
              Connection
                </div>
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
            <div className='columnTitle'>
              Destination
                </div>
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
                <div className='flightDirection'>
        Return Flight:
        </div>
        { nonstopReturn ?
        <div className="returnFlight d-flex flex-row">
          <div className="returnDeparture">
          <div className='columnTitle'>
            Origin
                </div>
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
          <div className='columnTitle'>
            Destination
                </div>
            <div className="returnArrivalLocation">
              {props.flight.itineraries[1].segments[0].arrival.iataCode}
            </div>
            <div className="returnArrivalTime">
              {props.flight.itineraries[1].segments[0].arrival.at.slice(11, 16)}
            </div>
            <div className="returnArrivalDate">
              {props.flight.itineraries[1].segments[0].arrival.at.slice(0, 10)}
            </div>
          </div>
        </div>

              :
              <div className="returnFlight d-flex flex-row">
              <div className="returnDeparture">
              <div className='columnTitle'>
                Origin
                </div>
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
              <div className='columnTitle'>
                Connection
                </div>
                <div className="returnArrivalLocation">
                  {props.flight.itineraries[1].segments[0].arrival.iataCode}
                </div>
                <div className="returnArrivalTime">
                  {props.flight.itineraries[1].segments[0].arrival.at.slice(11, 16)}
                </div>
                <div className="returnArrivalDate">
                  {props.flight.itineraries[1].segments[0].arrival.at.slice(0, 10)}
                </div>
              </div>



              <div className="connectionDeparture">
              <div className='columnTitle'>
                Connection
                </div>
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
              <div className='columnTitle'>
                Destination
                </div>
                <div className="returnArrivalLocation">
                  {props.flight.itineraries[1].segments[1].arrival.iataCode}
                </div>
                <div className="returnArrivalTime">
                  {props.flight.itineraries[1].segments[1].arrival.at.slice(11, 16)}
                </div>
                <div className="returnArrivalDate">
                  {props.flight.itineraries[1].segments[1].arrival.at.slice(0, 10)}
                </div>
              </div>
            </div>


        }
      </div>
      <div className='addFlightButton'>

      <button
        className="addFlight"
        onClick={() => {
          props.setModalShow(false);
        }}
        >
        Add Flight
      </button>
        </div>
    </div>
  );
}

export default FlightResult;
