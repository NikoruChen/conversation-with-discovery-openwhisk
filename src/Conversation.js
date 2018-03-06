import React from 'react';
import './Conversation.css';
import { InputWithButton } from 'watson-react-components';
import Message from './Message.js';

function Conversation(props) {
  function makeMessage(msgObj, index) {
    if (typeof msgObj.message === 'string') {
      return (
        <Message
          key={index}
          position={msgObj.position || false}
          label={msgObj.label || false}
          date={msgObj.date || false}
          message={msgObj.message}
          hasTail={msgObj.hasTail || false}
        />
      );
    } else if (React.isValidElement(msgObj.message)) {
      return msgObj.message;
    } else {
      return false;
    }
  }

  return (
    <div className="conversation">
      <div className="conversation__messages">
        <div>{props.messageObjectList.map(makeMessage)}</div>
      </div>
      <div className="conversation__input-container">
        <form onSubmit={props.onSubmit}>
          <input onChange={props.onInputChange} value={props.inputText} placeholder="Say something to Watson."/>
        </form>
      </div>
    </div>
  );
}

export default Conversation;
