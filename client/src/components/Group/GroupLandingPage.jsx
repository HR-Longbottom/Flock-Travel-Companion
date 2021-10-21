import React, { useState, useEffect } from "react";
import PersonalItinerary from "./PersonalItinerary";
import GroupItinerariesList from "./GroupItinerariesList";
import GroupBulletin from "./GroupBulletin";
import axios from 'axios';

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

  useEffect(() => {
    axios.get('/readGroupDetails', {params: {name: groupName}})
    .then(data => {
      setGroupBulletin(data.data.bulletin);
      setGroupMembers(data.data.members);
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
        }).then(() => {
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

  }, [])

  function onAddMemberClick() {
    var email = prompt('Please enter the email of the person you want to add');
    if (email.length !== 0) {
      axios.put('/inviteGroupMember', {email: email, groupName: groupName})
    }

  }
  function onDeleteClick() {
    axios.put('/deleteGroup', {name: groupName})
    .then(data => {
      window.location.href='/home'
    })
  }

  return (
    <div className="d-flex flex-column groupPage">
      <div className="header d-flex flex-row">
        <div className='adminButtons'>
        <button type="button" className="btn btn-primary deleteGroup" onClick={() => {onDeleteClick()}}>
          Delete Group
        </button>
        <button type="button" className="btn btn-primary" onClick={() => {onAddMemberClick()}}>Add Member</button>
        </div>
        <h4>Group Page</h4>
      </div>
      <div className='page-body d-flex flex-row'>
        <div className='chatBody d-flex'>
          Hello Import from Landing page
          </div>
        <div className="groupBody d-flex flex-column">
          <PersonalItinerary itineraries={personal} uid={uid} groupName={groupName} />
          <GroupItinerariesList groupItineraries={groupItineraries} membersNames={membersNames} currentUser={uid}/>
          <GroupBulletin bulletins={groupBulletin} setGroupBulletin={setGroupBulletin}/>
        </div>
      </div>
    </div>
  );
}

export default GroupLandingPage;
