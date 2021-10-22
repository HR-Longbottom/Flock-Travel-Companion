import React, { useState, useEffect, useRef } from 'react';

function Chatbox({ receiver, user, conversationId, setConversationId }) {

  // set conversationid
  useEffect(() => {
    if(!receiver || !user) return;

    // let myConvId = user + 1;
    let myConvId;
    if (receiver._id > user.uid) {
      myConvId = receiver._id + user.uid
    } else {
      myConvId = user.uid + receiver._id
    }

    setConversationId(myConvId)
    // called whenver receiver or user changes
  }, [receiver, user]);

  return(
    <div className="outer-receiver">
      {/* {console.log('this is receiver', receiver)} */}
      {receiver ? (
        <div className="inner-receiver">
          <p className="groupName">{receiver.name}</p>
          {/* <div className='conversation-messages'></div> */}
        </div>)
          :
        (<div className="pickGroupHeader">
          <p className="pickGroupText">Pick a group to chat with</p>
        </div>
      )}
    </div>
  )
}

export default Chatbox;

// .conversation-messages {
//   overflow-y: scroll;
//   height: 80vh;
//   padding: 0vh 1vh 0vh 1vh
// }