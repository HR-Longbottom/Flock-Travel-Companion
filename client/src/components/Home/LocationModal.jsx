import React, {useState} from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
const axios = require('axios');
import config from './config';

const getAirportsByCitySearch = (city) => {

  // Open Cage API
  const apiKEY = '115ef021ec104f5ea2b5e03c3f5cba0a';
  const place = city;

  // Amadeus API
  const option={
    headers:{
      // 'Authorization': config.authorization,
      'Authorization': 'Bearer 1wXFSVulwbatpk6MrGZb8FAX3kr2',
      'Content-Type': 'application/json'
    }
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
      console.log('List of Nearby Airports:', data.data.data)
      return data.data.data
    })
    .catch((error) => {
      console.log('ERROR', error)
  })
}

function LocationModal() {
  const [show, setShow] = useState(true);
  const [cityName, setCityName] = useState('');
  const [airports, setAirports] = useState('')


  const handleClose = () => setShow(false); // post the location selected to the db
  const handleShow = () => setShow(true);
  const handleChange = (e) => setCityName(e.target.value)

  const searchCity = () => {
    getAirportsByCitySearch(cityName)
    .then(data =>
      console.log('List of Nearby Airports:', data)

      )
      .catch(err => console.log(err))
  }

  return (
    <div className="container">
      <Button variant="primary" onClick={handleShow}>
        Update Preferred Airport
      </Button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Click to Update your Airport of Choice</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>
              Enter City Name:
            </Form.Label>
            <Form.Control type='text' onChange={handleChange} value={cityName} placeholder="name input" />
          </Form.Group>
          <Button type="submit" style={{ backgroundColor: 'rgb(54 192 208)' }} onClick={searchCity}>Search</Button>
          <label for="nearbyAirports">Nearby Airports:</label>
          <select className="form-control" id="nearbyAirports">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
    </Modal.Body>
    <Modal.Footer>
        <Button variant="primary" onClick={handleClose} style={{ backgroundColor: 'rgb(54 192 208)' }}>
          Save It!
        </Button>
      </Modal.Footer>
      </Modal>
    </div>
  );
}

export default LocationModal;



















// https://www.ccra.com/airport-codes/