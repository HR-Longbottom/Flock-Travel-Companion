import React, { useState } from 'react';
import { Button, Modal, Form, Dropdown } from 'react-bootstrap';
const axios = require('axios');
import config from './config';

const getAirportsByCitySearch = (city) => {
  // Open Cage API
  const apiKEY = config.apikey;
  const place = city;

  // Amadeus API
  const option = {
    headers: { 'Authorization': config.authorization, 'Content-Type': 'application/json' }
  }
  return axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${place}&key=${apiKEY}`)
    .then(data => {
      // return data.data
      const latitude = data.data.results[0].bounds.northeast.lat;
      const longitude = data.data.results[0].bounds.northeast.lng;
      // console.log('lat', latitude)
      // console.log('lng', longitude)
      return axios.get(`https://test.api.amadeus.com/v1/reference-data/locations/airports?latitude=${latitude}&longitude=${longitude}&radius=500&page%5Blimit%5D=10&page%5Boffset%5D=0&sort=relevance`, option)
    })
    .then((data) => {
      // console.log('List of Nearby Airports:', data.data.data)
      return data.data.data
    })
    .catch((error) => {
      console.log('ERROR', error)
    })
}

function LocationModal(props) {
  const [show, setShow] = useState(true);
  const [cityName, setCityName] = useState('');
  const [airports, setAirports] = useState([]);
  const [airport, setAirport] = useState(null);

  const handleClose = () => {
    setShow(false);
  }
  const handleSave = () => {
    handleSubmit(airport);
    setShow(false);
  }
  const handleChange = (e) => {
    setCityName(e.target.value);
  }
  const handleSelect = (e) => {
    airports.forEach(ap => {
      if (ap.name === e.target.value) {
        setAirport(ap);
      }
    })
  };

  const searchCity = () => {
    getAirportsByCitySearch(cityName)
      .then(data =>
        setAirports(data)
      )
      .catch(err => console.log(err))
  };

  const handleSubmit = (airport) => {
    axios.put('/updateUserLoc', { "uid": props.currentUser.uid, "location": airport } )
    .then((response) => console.log("successfully added location", response))
    .catch((err) => console.log("failed", err));
  }
  //{name: airportM.name, cityCode: airportM.address.cityCode, cityName: airportM.address.cityName, iataCode: airportM.iataCode}
  // console.log('User Preferred Airport: ', props.currentUser.location.name)
  return (
    <div className="container">
      <Modal size="lg" show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Save your Airport of Choice</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>
              Enter City Name:
            </Form.Label>
            <Form.Control type='text' onChange={handleChange} value={cityName} placeholder="name input" />
          </Form.Group>
          <Button type="submit" style={{ backgroundColor: 'rgb(54 192 208)' }} onClick={searchCity}>Search</Button>
          {airports.length > 0 ?
          <Dropdown>
            <Dropdown.Toggle variant="Info" id="dropdown-basic">
              Nearby Airports:
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {airports.map(airportM => (<Dropdown.Item as="button" key={airportM.name} onClick={handleSelect} value={airportM.name} >{airportM.name}</Dropdown.Item>))}
            </Dropdown.Menu>
          </Dropdown>
          : <> </>}
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={handleClose} style={{backgroundColor: 'rgb(54 192 208)'}}>
            Close
          </Button>
          {airport === null ? <></> :
          <Button variant="primary" onClick={handleSave} style={{ backgroundColor: 'rgb(54 192 208)' }}>
            Save It!
          </Button>
          }
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default LocationModal;









