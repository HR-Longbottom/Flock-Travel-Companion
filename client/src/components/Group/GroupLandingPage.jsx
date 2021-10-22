import React, { useState, useEffect } from "react";
import PersonalItinerary from "./PersonalItinerary";
import GroupItinerariesList from "./GroupItinerariesList";
import GroupBulletin from "./GroupBulletin";
import SetADestination from "./SetADestination";
import axios from 'axios';
import Sidebar from "../Sidebar/Sidebar";
import styled from "styled-components";
import FlockIO from "../../../assets/FlockIO.png";


const Styles = styled.div`
.adminButtons {
  position: relative;
  left: 150%;
  margin-right: 40px;
  border-color: black;
}
.btn-primary {
  position: relative;
  background-color: #99B898;
  margin-bottom: 5px;
  border-color: black;
}
.logo {
  position: absolute;
  top: 0;
  height: 200px;
  width: 200px;
}
`

function GroupLandingPage(props) {
  // props takes in group
  // const [stateName, howYouSetState] = useState(defaultValue)
  var user = new URLSearchParams(window.location.search).get('uid');
  var name = new URLSearchParams(window.location.search).get('groupName');

  const [uid, setUid] = useState(user)
  const [groupName, setGroupName] = useState(name);
  const [groupBulletin, setGroupBulletin] = useState([]);
  const [groupMembers, setGroupMembers] = useState([]);
  const [personal, setPersonal] = useState([]);
  const [groupItineraries, setGroupItineraries] = useState({});
  const [membersNames, setMembersNames] = useState({});
  const [admin, setAdmin] = useState('');
  const [destination, setDestination] = useState('');
  const [origin, setOrigin] = useState('');


  useEffect(() => {
    if (props.currentUser.location) {
      setOrigin(props.currentUser.location.iataCode);
    }
    getGroupDetails();
    getGroupFlights();
  }, [props])

  function getGroupDetails() {
    axios.get('/readGroupDetails', {params: {name: groupName}})
    .then(data => {
      setGroupBulletin(data.data.bulletin);
      setGroupMembers(data.data.members);
      setAdmin(data.data.admin);
      setDestination(data.data.destination)
      var members = data.data.members;
      return members
    })
    .then((members) => {
      var groupMembersNames = {};
      for (var i = 0; i < members.length; i++) {
        if (members[i] !== uid) {
        axios.get('/checkUser', {params: {uid: members[i]}})
        .then(data => {
          console.log('return data', data)
          groupMembersNames[data.data[0].uid] = data.data[0].name;
        })
        .then(() => {
          if (Object.keys(groupMembersNames).length === members.length - 1) {
            console.log('groupMembersNames', groupMembersNames);
            setMembersNames(groupMembersNames)
          }
        })
      }
      }
    })
    .catch(err => {
      console.log(err);
    })
  }


  function getGroupFlights() {
    axios.get('/readGroupFlights', {params: {groupName: groupName}})
    .then(result => {
      var data = result.data;
      var groupFlights = {};
      var personalFlights = [];
      for (var i = 0; i < data.length; i++) {
        // loops thru to see if uid is the same as the flightdata id
        if (data[i].uid === uid) {
          personalFlights.push(data[i]);
        } else {
          if (groupFlights[data[i].uid] === undefined) {
            groupFlights[data[i].uid] = [data[i]]
          } else {
            groupFlights[data[i].uid].push(data[i])
          }
        }
      }

      setPersonal(personalFlights);
      setGroupItineraries(groupFlights);
  })
  .catch(err => {
    console.log(err);
  })
}

  function onAddMemberClick() {
    var email = prompt('Please enter the email of the person you want to add');
    if (email !== null && email.length !== 0) {
      axios.put('/inviteGroupMember', {email: email, groupName: groupName})
      .then(data => {
        getGroupDetails();
        getGroupFlights();
        alert('User Added')
      })
      .catch(err => {
        if (err !== 'Cancel') {
          alert('User does not exist')
        }
      })
    }
  }

  function onDeleteClick() {
    axios.put('/deleteGroup', {name: groupName})
    .then(data => {
      window.location.href='/home'
    })
  }

  return (
    <Styles>
    <div className="d-flex flex-column groupPage">
      <div className="header d-flex flex-row">
          {
            admin===uid ?
        <div className='adminButtons'>
        <button type="button" className="btn btn-primary deleteGroup" onClick={() => {onDeleteClick()}}>
          Delete Group
        </button>
        <br></br>
        <button type="button" className="btn btn-primary" onClick={() => {onAddMemberClick()}}>Add Member</button>
        <br></br>
        <SetADestination Group={groupName} setDestination={setDestination}/>
        <p> Your Current Desination: {destination ? destination : ''} </p>
        </div>
        :
        <div></div>
          }
          <img className="logo" src={FlockIO} />
        <h4 className='groupNameHeader'>{groupName}</h4>
      </div>
      <div className='page-body d-flex flex-row'>
      <Sidebar currentUser={props.currentUser}  />
        <div className="groupBody d-flex flex-column">
          <PersonalItinerary itineraries={personal} uid={uid} groupName={groupName} setPersonal={setPersonal} destination={destination} origin={origin} />
          <GroupItinerariesList groupItineraries={groupItineraries} membersNames={membersNames} currentUser={uid}/>
          <GroupBulletin bulletins={groupBulletin} setGroupBulletin={setGroupBulletin} groupName={groupName}/>
        </div>
      </div>
    </div>
    </Styles>
  );
}

export default GroupLandingPage;
