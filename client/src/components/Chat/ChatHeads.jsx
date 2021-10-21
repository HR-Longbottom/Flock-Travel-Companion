import React from "react";

function ChatHeads({ yourGroups, setReceiver }) {
  return (
    <div>
      <p>Groups</p>
      {yourGroups.map((group, index) => (
        <div
        key={index}
        className='chat-head-group'
        onClick={()=> setReceiver(group)}
        >
            <p>{group.name}</p>
        </div>
      )
      )}
    </div>
  );
}

export default ChatHeads;
