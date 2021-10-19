import React, { useState, useEffect } from "react";

function GroupBulletin(props) {
  const [newMessage, addMessage] = useState('')

  return (
    <div className='groupBulletin'>
      <div className='group-bulletin-header d-flex flex-row'>

      <h4>Group Bulletin</h4>
      </div>
      <div className='groupBulletinBody'>
      <ul className='bulletinList'>
      {props.bulletins.map(bulletin => {return (
        <li>
          <div className='bullet'>
          <div className='bulletMessage'>{bulletin}
          </div>
          <div className='bulletButton'>
        <button>x</button>
        </div>
        </div>
        </li>
      )})}
      </ul>
      <div>
      <input className='newMessageInput' value={newMessage} onChange={() => addMessage(value)}/>
      <button className='btn btn-secondary addButton'>Add</button>
      </div>

    </div>
    </div>
  )
}

export default GroupBulletin;