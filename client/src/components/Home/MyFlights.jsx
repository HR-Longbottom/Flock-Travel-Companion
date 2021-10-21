import React, {useState, useEffect} from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import Carousel from 'react-elastic-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Styles = styled.div`
  .myFlightsContainer {
    position: relative;
    float: none;
    margin: 0 auto;
    text-align: center;
    height: 300px;
    background-image: url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp4232990.jpg&f=1&nofb=1');
    background-position: center;
    background-size: cover;
    height: 100%;
    width: 100%;
  }
  .mainFlightsContainer {
    position: relative;
    border-radius: 25px;
    height: 300px;
    float: none;
    margin: 0 auto;
    text-align: center;
    background-color: #0097A7;
    color: #fff;
  }

  .card {
    height: 250px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 25%;
    margin-top: 10%;
    width: 190px;
    border-radius: 25px;
    background: rgb(41,210,212);
background: linear-gradient(0deg, rgba(41,210,212,1) 20%, rgba(101,227,200,1) 76%);
    font-family: 'Yeseva One', cursive;
  }

  .myFlightsHeader {
    position: relative;
    width: 100%;
  }
  .airportsText {
    padding-left: 5px;
    padding-right: 5px;
    justify-content: space-between;
    word-spacing: 10px;
  }
`;
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

const MyFlights = (props) => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    findFlights().then(flights => setFlights(flights));
  }, []);

  const findFlights = () => {
    return axios
      .get('/readPersonalFlights', {params: {uid: props.currentUser.uid}})
      .then(response => {
       return response.data
      })
      .catch(err => { console.log(err) })
    }
    console.log('Users Flights: ', flights)

  return (
    <Styles>
    < Container className='mainFlightsContainer'>
      <div className="row">
        <div className="col-12">
          <h3 className="myFlightsHeader">Your Upcoming Flights</h3>
        </div>
          <Container className="myFlightsContainer col-12">
            <Carousel breakPoints={breakPoints}>
              {flights.map(item => <div className="card" key={item._id}>
                <h3 className='carrierText'> {item.carrier} </h3>
                <h4 className='groupNameText'>{item.groupName} </h4>
                <p className='airportsText'>{item.departureAirport} <i className="fas fa-arrow-circle-right"></i> {item.arrivalAirport}</p>
                <p className='departureDate'>{item.departureDate}</p>



                </div>)}
            </Carousel>
          </Container>
        </div>

    </Container>
    </Styles>
  )

}

export default MyFlights;