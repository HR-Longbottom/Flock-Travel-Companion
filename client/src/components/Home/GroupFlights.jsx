import React from "react";
import { CDBCarousel, CDBCarouselItem, CDBCarouselInner, CDBView, CDBContainer } from "cdbreact";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import AddAGroup from "./AddAGroup.jsx";
import { propTypes } from "react-bootstrap/esm/Image";

const Styles = styled.div`
  .myGroupsContainer {
    position: relative;
    float: none;
    margin: 0 auto;
    text-align: center;
    height: 300px;
    background-image: url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fallhdwallpapers.com%2Fwp-content%2Fuploads%2F2015%2F06%2FShanghai-1.jpg&f=1&nofb=1');
    background-position: center;

    background-size: cover;
    height: 100%;
    width: 100%;
  }
  .mainMyGroupsContainer {
    position: relative;
    height: 300px;
    float: none;
    margin: 0 auto;
    text-align: center;
    background-color: #0097A7;
    color: #fff;
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
  .myGroupsHeader {
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

const MyGroups = (props) => {
  return (
    <Styles>
    <Container className='mainMyGroupsContainer'>
      <div className="row">
        <div className="col-12">
          <h3 className="myGroupsHeader">Your Groups</h3>
          <AddAGroup currentUser={props.currentUser}/>
        </div>
        <CDBContainer className="myGroupsContainer col-12">
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

                      <div className="card-body">
                        <h4 className="card-title">Group Name</h4>
                        <p className="card-text">Destination</p>

                      </div>

                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card">

                      <div className="card-body">
                        <h4 className="card-title">Group Name</h4>
                        <p className="card-text">Details about your flight</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card">

                      <div className="card-body">
                        <h4 className="card-title">Group Name</h4>
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

                      <div className="card-body">
                        <h4 className="card-title">Group Name</h4>
                        <p className="card-text">Details about your flight</p>

                      </div>

                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card">

                      <div className="card-body">
                        <h4 className="card-title">Group Name</h4>
                        <p className="card-text">Details about your flight</p>

                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card">

                      <div className="card-body">
                        <h4 className="card-title">Group Name</h4>
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

                      <div className="card-body">
                        <h4 className="card-title">Group Name</h4>
                        <p className="card-text">Details about your flight</p>

                      </div>

                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card">

                      <div className="card-body">
                        <h4 className="card-title">Group Name</h4>
                        <p className="card-text">Details about your flight</p>

                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card">

                      <div className="card-body">
                        <h4 className="card-title">Group Name</h4>
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

export default MyGroups;