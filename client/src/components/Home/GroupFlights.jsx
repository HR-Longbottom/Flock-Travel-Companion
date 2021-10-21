import React, { useEffect, useState } from "react";
import Carousel from 'react-elastic-carousel';
import { Container } from "react-bootstrap";
import styled from "styled-components";
import AddAGroup from "./AddAGroup.jsx";
import { propTypes } from "react-bootstrap/esm/Image";
import axios from "axios";

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
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 25%;
    margin-top: 10%;
    width: 190px;
  }
  .myGroupsHeader {
    position: relative;
    width: 100%;
  }
`;
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

const MyGroups = (props) => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    findGroups().then(groups => setGroups(groups));
  }, []);

  const findGroups = () => {
    return axios
      .get('/findGroups')
      .then(response => {
        return response.data
      })
      .catch(err => { console.log(err) })
  }


  return (
    <Styles>
      <Container className='mainMyGroupsContainer'>
        <div className="row">
          <div className="col-12">
            <h3 className="myGroupsHeader">Your Groups</h3>
            <AddAGroup currentUser={props.currentUser} />
          </div>
          <Container className="myGroupsContainer col-12">
            <Carousel breakPoints={breakPoints}>
              {groups.map(item => <div className="card" key={groups._id}>{item.name}</div>)}
            </Carousel>
          </Container>
        </div>
      </Container>
    </Styles>
  )
}

export default MyGroups;



{/* <CDBCarousel
            activeItem={1}
            length={3}
            showControls={true}
            showIndicators={true}
            className="z-depth-1"
            slide
            multiItem={true}
          >

            <CDBCarouselInner>
              <CDBCarouselItem active itemId='1'>
                <CDBView className="row">

                  <div className="col-md-4 mb-3">
                    <div className="card">

                      <div className="card-body">
                        <h4 className="card-title">group[0].name</h4>
                        <p className="card-text">Destination</p>

                      </div>

                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card">

                      <div className="card-body">
                        <h4 className="card-title">group[1].name</h4>
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
          </CDBCarousel> */}