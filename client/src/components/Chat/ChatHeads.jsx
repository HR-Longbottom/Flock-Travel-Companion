import React from "react";

function ChatHeads({ yourGroups, getChats, setReceiver }) {
  return (
    <div className="headMain">
      <p className="headsGroup">Groups</p>
      {yourGroups.map((group, index) => (
        <div
          key={index}
          className="chat-head-group"
          onClick={() => {getChats(); setReceiver(group)}}
        >
          <p>{group.name}</p>
        </div>
      ))}
    </div>
  );
}

export default ChatHeads;
