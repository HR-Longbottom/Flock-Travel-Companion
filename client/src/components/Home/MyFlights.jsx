import React, {useState, useEffect} from "react";
import { CDBCarousel, CDBCarouselItem, CDBCarouselInner, CDBView, CDBContainer } from "cdbreact";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
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

    height: 300px;
    float: none;
    margin: 0 auto;
    text-align: center;
    background-color: #0097A7;
    color: #fff;
  }
  .img-fluid {
    max-height: 100px;
    max-width: 100px;
    object-fit: cover;
  }
  .card {
    height: 250px;
  }
  .col-md-4 mb-3 {
    max-width: 25%;
    flex: 0 0 33.3%;
    margin-right: 7.5%;
  }
  .carousel-indicators li {
    background-color: blue;
  }
  .myFlightsHeader {
    position: relative;
    width: 100%;
  }
  .card-body {
    position: absolute;
    bottom: 10px;
    left: 20%;
    color: black;
  }
`;

const MyFlights = (props) => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    findFlights().then(flights => setFlights(flights));
  }, []);

  const findFlights = () => {
    return axios
      .get('/readPersonalFlights', {params: {uid: props.currentUser.uid}})
      .then(response => {
        console.log(response.data)
      })
      .catch(err => { console.log(err) })
  }

  return (
    <Styles>
    <Container className='mainFlightsContainer'>
      <div className="row">
        <div className="col-12">
          <h3 className="myFlightsHeader">Your Upcoming Flights</h3>
        </div>
        <CDBContainer className="myFlightsContainer col-12">
          <CDBCarousel
            activeItem={1}
            length={3}
            showControls={true}
            showIndicators={true}
            className="z-depth-1"
            slide
            multiItem
          >

            <CDBCarouselInner>
              <CDBCarouselItem active itemId='1'>
                <CDBView className="row">

                  <div className="col-md-4 mb-3">
                    <div className="card">
                      <img className="img-fluid" alt="100%x280" src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Fdetail%2F209-2095976_jetblue-customer-service-number-jet-blue-logo-png.png&f=1&nofb=1' />
                      <div className="card-body">
                        <h4 className="card-title">Airline</h4>
                        <p className="card-text">Details about your flight</p>

                      </div>

                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card">
                      <img className="img-fluid" alt="100%x280" src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1000logos.net%2Fwp-content%2Fuploads%2F2017%2F06%2FLogo-United-Airlines.png&f=1&nofb=1' />
                      <div className="card-body">
                        <h4 className="card-title">Airline</h4>
                        <p className="card-text">Details about your flight</p>

                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card">
                      <img className="img-fluid" alt="100%x280" src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.glassdoor.com%2Fsqll%2F5144%2Ffrontier-airlines-squarelogo-1572626786969.png&f=1&nofb=1' />
                      <div className="card-body">
                        <h4 className="card-title">Airline</h4>
                        <p className="card-text">Details about your flight</p>

                      </div>
                    </div>
                  </div>

                </CDBView>
              </CDBCarouselItem>
              <CDBCarouselItem itemId='2'>
                <CDBView className="row">

                  <div className="col-md-4 mb-3">
                    <div className="card">
                      <img className="img-fluid" alt="100%x280" src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1000logos.net%2Fwp-content%2Fuploads%2F2017%2F06%2FLogo-United-Airlines.png&f=1&nofb=1' />
                      <div className="card-body">
                        <h4 className="card-title">Airline</h4>
                        <p className="card-text">Details about your flight</p>

                      </div>

                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card">
                      <img className="img-fluid" alt="100%x280" src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Fdetail%2F209-2095976_jetblue-customer-service-number-jet-blue-logo-png.png&f=1&nofb=1' />
                      <div className="card-body">
                        <h4 className="card-title">Airline</h4>
                        <p className="card-text">Details about your flight</p>

                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card">
                      <img className="img-fluid" alt="100%x280" src='https://gray-wbay-prod.cdn.arcpublishing.com/resizer/xrAAJzYoIx8tBfymcRErU6zCO5k=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/HC2ZSIX4PJH7RA6LWQEPSCY4BM.png' />
                      <div className="card-body">
                        <h4 className="card-title">Airline</h4>
                        <p className="card-text">Details about your flight</p>

                      </div>
                    </div>
                  </div>

                </CDBView>
              </CDBCarouselItem>
              <CDBCarouselItem itemId='3'>
                <CDBView className="row">

                  <div className="col-md-4 mb-3">
                    <div className="card">
                      <img className="img-fluid" alt="100%x280" src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Fdetail%2F209-2095976_jetblue-customer-service-number-jet-blue-logo-png.png&f=1&nofb=1' />
                      <div className="card-body">
                        <h4 className="card-title">Airline</h4>
                        <p className="card-text">Details about your flight</p>

                      </div>

                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card">
                      <img className="img-fluid" alt="100%x280" src='https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_80,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/rhodeisland/Southwest-Logo-2-copy0-a85cdfda5056a36_a85ce0f5-5056-a36a-09f07837ff9a8a0f.jpg' />
                      <div className="card-body">
                        <h4 className="card-title">Airline</h4>
                        <p className="card-text">Details about your flight</p>

                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card">
                      <img className="img-fluid" alt="100%x280" src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.glassdoor.com%2Fsqll%2F5144%2Ffrontier-airlines-squarelogo-1572626786969.png&f=1&nofb=1' />
                      <div className="card-body">
                        <h4 className="card-title">Airline</h4>
                        <p className="card-text">Details about your flight</p>
                      </div>
                    </div>
                  </div>
                </CDBView>
              </CDBCarouselItem>
            </CDBCarouselInner>
          </CDBCarousel>
        </CDBContainer>
      </div>
    </Container>
    </Styles>
  )
}

export default MyFlights;