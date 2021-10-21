import React, { useState, useEffect, useRef } from 'react';

function Chatbox({ receiver, user, conversationId, setConversationId }) {
  const currentMessage = useRef(null)

  // send messages
  const sendMessage = () => {

  }


  // set conversationid
  useEffect(() => {
    if(!receiver || !user) return;

    let myConvId = receiver._id;

    setConversationId(myConvId)
    // called whenver receiver or user changes
  }, [receiver]);
  console.log('CONVOID', conversationId)

  //get conversation from db


  return(
    <div>
      {receiver ? (
        <div>
          <p>Conversation with {receiver.name}</p>
          {/* conersation messages */}
          <div className='conversation-messages'></div>
          <div>
            <input placeholder='send message...' ref={currentMessage}></input>
          </div>
        </div>)
          :
        (<div>
          <p>Pick a group to chat with</p>
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