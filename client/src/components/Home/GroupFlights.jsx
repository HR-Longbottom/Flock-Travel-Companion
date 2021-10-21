import React, { useEffect, useState } from "react";
import Carousel from 'react-elastic-carousel';
import { Container } from "react-bootstrap";
import styled from "styled-components";
import AddAGroup from "./AddAGroup.jsx";
import { propTypes } from "react-bootstrap/esm/Image";
import axios from "axios";
import {NavLink} from 'react-router-dom';

const Styles = styled.div`

  .myGroupsContainer {
    position: relative;
    float: none;
    margin: 0 auto;
    text-align: center;
    height: 300px;
    background-image: linear-gradient(158deg, rgba(84, 84, 84, 0.03) 0%, rgba(84, 84, 84, 0.03) 20%,rgba(219, 219, 219, 0.03) 20%, rgba(219, 219, 219, 0.03) 40%,rgba(54, 54, 54, 0.03) 40%, rgba(54, 54, 54, 0.03) 60%,rgba(99, 99, 99, 0.03) 60%, rgba(99, 99, 99, 0.03) 80%,rgba(92, 92, 92, 0.03) 80%, rgba(92, 92, 92, 0.03) 100%),linear-gradient(45deg, rgba(221, 221, 221, 0.02) 0%, rgba(221, 221, 221, 0.02) 14.286%,rgba(8, 8, 8, 0.02) 14.286%, rgba(8, 8, 8, 0.02) 28.572%,rgba(52, 52, 52, 0.02) 28.572%, rgba(52, 52, 52, 0.02) 42.858%,rgba(234, 234, 234, 0.02) 42.858%, rgba(234, 234, 234, 0.02) 57.144%,rgba(81, 81, 81, 0.02) 57.144%, rgba(81, 81, 81, 0.02) 71.42999999999999%,rgba(239, 239, 239, 0.02) 71.43%, rgba(239, 239, 239, 0.02) 85.71600000000001%,rgba(187, 187, 187, 0.02) 85.716%, rgba(187, 187, 187, 0.02) 100.002%),linear-gradient(109deg, rgba(33, 33, 33, 0.03) 0%, rgba(33, 33, 33, 0.03) 12.5%,rgba(147, 147, 147, 0.03) 12.5%, rgba(147, 147, 147, 0.03) 25%,rgba(131, 131, 131, 0.03) 25%, rgba(131, 131, 131, 0.03) 37.5%,rgba(151, 151, 151, 0.03) 37.5%, rgba(151, 151, 151, 0.03) 50%,rgba(211, 211, 211, 0.03) 50%, rgba(211, 211, 211, 0.03) 62.5%,rgba(39, 39, 39, 0.03) 62.5%, rgba(39, 39, 39, 0.03) 75%,rgba(55, 55, 55, 0.03) 75%, rgba(55, 55, 55, 0.03) 87.5%,rgba(82, 82, 82, 0.03) 87.5%, rgba(82, 82, 82, 0.03) 100%),linear-gradient(348deg, rgba(42, 42, 42, 0.02) 0%, rgba(42, 42, 42, 0.02) 20%,rgba(8, 8, 8, 0.02) 20%, rgba(8, 8, 8, 0.02) 40%,rgba(242, 242, 242, 0.02) 40%, rgba(242, 242, 242, 0.02) 60%,rgba(42, 42, 42, 0.02) 60%, rgba(42, 42, 42, 0.02) 80%,rgba(80, 80, 80, 0.02) 80%, rgba(80, 80, 80, 0.02) 100%),linear-gradient(120deg, rgba(106, 106, 106, 0.03) 0%, rgba(106, 106, 106, 0.03) 14.286%,rgba(67, 67, 67, 0.03) 14.286%, rgba(67, 67, 67, 0.03) 28.572%,rgba(134, 134, 134, 0.03) 28.572%, rgba(134, 134, 134, 0.03) 42.858%,rgba(19, 19, 19, 0.03) 42.858%, rgba(19, 19, 19, 0.03) 57.144%,rgba(101, 101, 101, 0.03) 57.144%, rgba(101, 101, 101, 0.03) 71.42999999999999%,rgba(205, 205, 205, 0.03) 71.43%, rgba(205, 205, 205, 0.03) 85.71600000000001%,rgba(53, 53, 53, 0.03) 85.716%, rgba(53, 53, 53, 0.03) 100.002%),linear-gradient(45deg, rgba(214, 214, 214, 0.03) 0%, rgba(214, 214, 214, 0.03) 16.667%,rgba(255, 255, 255, 0.03) 16.667%, rgba(255, 255, 255, 0.03) 33.334%,rgba(250, 250, 250, 0.03) 33.334%, rgba(250, 250, 250, 0.03) 50.001000000000005%,rgba(231, 231, 231, 0.03) 50.001%, rgba(231, 231, 231, 0.03) 66.668%,rgba(241, 241, 241, 0.03) 66.668%, rgba(241, 241, 241, 0.03) 83.33500000000001%,rgba(31, 31, 31, 0.03) 83.335%, rgba(31, 31, 31, 0.03) 100.002%),linear-gradient(59deg, rgba(224, 224, 224, 0.03) 0%, rgba(224, 224, 224, 0.03) 12.5%,rgba(97, 97, 97, 0.03) 12.5%, rgba(97, 97, 97, 0.03) 25%,rgba(143, 143, 143, 0.03) 25%, rgba(143, 143, 143, 0.03) 37.5%,rgba(110, 110, 110, 0.03) 37.5%, rgba(110, 110, 110, 0.03) 50%,rgba(34, 34, 34, 0.03) 50%, rgba(34, 34, 34, 0.03) 62.5%,rgba(155, 155, 155, 0.03) 62.5%, rgba(155, 155, 155, 0.03) 75%,rgba(249, 249, 249, 0.03) 75%, rgba(249, 249, 249, 0.03) 87.5%,rgba(179, 179, 179, 0.03) 87.5%, rgba(179, 179, 179, 0.03) 100%),linear-gradient(241deg, rgba(58, 58, 58, 0.02) 0%, rgba(58, 58, 58, 0.02) 25%,rgba(124, 124, 124, 0.02) 25%, rgba(124, 124, 124, 0.02) 50%,rgba(254, 254, 254, 0.02) 50%, rgba(254, 254, 254, 0.02) 75%,rgba(52, 52, 52, 0.02) 75%, rgba(52, 52, 52, 0.02) 100%),linear-gradient(90deg, #ffffff,#ffffff);
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
    background-color: #99B898;
    color: #fff;
    border-radius: 25px;
  }
  .image {
    border-top-left-radius: 25px;
    top: -37px;
    position: relative;
    border-top-right-radius: 25px;
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
    background-color: #99B898;

  }
  .myGroupsHeader {
    position: relative;
    display: inline;
    width: fit-content;
    /* left: 45%; */
    margin: 0;
    top: 5px;
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
      .get('/findGroups', {params: {uid: props.currentUser.uid}})
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
              {groups.map(item =>
                <NavLink exact to={`/plans?uid=${item.admin}&groupName=${item.name}`} activeClassName="activeClicked">
                <div className="card" key={item._id}>
                <img className='image' src='https://source.unsplash.com/190x150/?vacation'/>{item.name}
                </div>
                </NavLink>)}
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