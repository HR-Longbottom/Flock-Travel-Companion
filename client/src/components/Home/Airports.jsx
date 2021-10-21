// import React, {useEffect, useState} from "react";
// import { Container } from "react-bootstrap";
// import styled from "styled-components";
// import AddAGroup from "./AddAGroup.jsx";
// import { propTypes } from "react-bootstrap/esm/Image";
// import axios from "axios";

// const MyGroups = (props) => {
//     const [groups, setGroups] = useState([]);

//     useEffect(() => {
//       findGroups().then(groups => setGroups(groups));
//     },[]);

//     const findGroups = () => {
//       return axios
//        .get('/findGroups')
//        .then(response => {
//          return response.data
//         } )
//        .catch (err => {console.log(err)})
//    }
//   console.log('Groups Data:', groups)

// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 2 },
//   { width: 768, itemsToShow: 3 },
//   { width: 1200, itemsToShow: 4 },
// ];

// function App() {


// const responsive = {
//     superLargeDesktop: {
//         // the naming can be any, depends on you.
//         breakpoint: { max: 4000, min: 3000 },
//         items: 5
//     },
//     desktop: {
//         breakpoint: { max: 3000, min: 1024 },
//         items: 3
//     },
//     tablet: {
//         breakpoint: { max: 1024, min: 464 },
//         items: 2
//     },
//     mobile: {
//         breakpoint: { max: 464, min: 0 },
//         items: 1
//     }
//     };

//   return (
//     <>
//       <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1>
//       <div className="App">
//         <Carousel responsive={responsive}>
//             <div>Item 1</div>
//             <div>Item 2</div>
//             <div>Item 3</div>
//             <div>Item 4</div>
//         </Carousel>;
//       </div>
//     </>
//   );
// }