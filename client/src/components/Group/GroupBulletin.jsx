import React, { useState, useEffect } from "react";
import axios from 'axios';

function GroupBulletin(props) {
  const [message, setMessage] = useState('')

  function onBulletinAdd(bullet) {
    if (bullet.length !== 0) {
      console.log(bullet)
      axios.put('/postGroupBulletin', {name: 'blues room', bullet: bullet})
      .then(data => {
        props.setGroupBulletin([...props.bulletins, bullet])
      })
    }
  };
  function onBulletDelete(idx) {
    var newBulletin = props.bulletins.slice()
    newBulletin.splice(idx, 1)
    axios.put('/deleteGroupBulletin', {name:'blues room', bulletin: newBulletin})
    .then((data) => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    })
  }


  return (
    <div className='groupBulletin'>
      <div className='group-bulletin-header d-flex flex-row'>

      <h4>Group Bulletin</h4>
      </div>
      <div className='groupBulletinBody'>
      <ul className='bulletinList'>
      {props.bulletins.map((bulletin, idx) => {return (
        <li className='bulletli'>
          <div className='bullet'>
          <div className='bulletMessage'>{bulletin}
          </div>
          <div className='bulletButton'>
        <button name={idx} onClick={(event) => {
          onBulletDelete(event.target.name)
        }}>x</button>
        </div>
        </div>
        </li>
      )})}
      </ul>
      <div>
      <input className='newMessageInput' value={message} onChange={(event) => setMessage(event.target.value)}/>
      <button className='btn btn-secondary addButton' onClick={(event) => {
        onBulletinAdd(message)
        setMessage('');
        }} >Add</button>
      </div>

    </div>
    </div>
  )
}

export default GroupBulletin;