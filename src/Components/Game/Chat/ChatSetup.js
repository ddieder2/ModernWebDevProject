import React, { useState } from "react";
import { Button, Input } from "antd";
import Parse from "parse";
import { LiveChat } from "./LiveChat";

export const ChatSetup = () => {
  // State variables holding input values and results
  const [senderNicknameInput, setSenderNicknameInput] = useState("");
  const [senderNicknameId, setSenderNicknameId] = useState(null);
  const [receiverNicknameInput, setReceiverNicknameInput] = useState("");
  const [receiverNicknameId, setReceiverNicknameId] = useState(null);

  // Create or retrieve Nickname objects and start LiveChat component
  const startLiveChat = async () => {
    const senderNicknameName = senderNicknameInput;
    const receiverNicknameName = receiverNicknameInput;

    // Check if user informed both nicknames
    if (senderNicknameName === "" || receiverNicknameName === "") {
      alert("Please inform both sender and receiver nicknames!");
      return false;
    }

    // Check if sender nickname already exists, if not create new parse object
    let senderNicknameObject = null;
    try {
      const senderParseQuery = new Parse.Query("Nickname");
      senderParseQuery.equalTo("name", senderNicknameName);
      const senderParseQueryResult = await senderParseQuery.first();
      if (
        senderParseQueryResult !== undefined &&
        senderParseQueryResult !== null
      ) {
        senderNicknameObject = senderParseQueryResult;
      } else {
        senderNicknameObject = new Parse.Object("Nickname");
        senderNicknameObject.set("name", senderNicknameName);
        senderNicknameObject = await senderNicknameObject.save();
      }
    } catch (error) {
      alert(error);
      return false;
    }

    // Check if receiver nickname already exists, if not create new parse object
    let receiverNicknameObject = null;
    try {
      const receiverParseQuery = new Parse.Query("Nickname");
      receiverParseQuery.equalTo("name", receiverNicknameName);
      const receiverParseQueryResult = await receiverParseQuery.first();
      if (
        receiverParseQueryResult !== undefined &&
        receiverParseQueryResult !== null
      ) {
        receiverNicknameObject = receiverParseQueryResult;
      } else {
        receiverNicknameObject = new Parse.Object("Nickname");
        receiverNicknameObject.set("name", receiverNicknameName);
        receiverNicknameObject = await receiverNicknameObject.save();
      }
    } catch (error) {
      alert(error);
      return false;
    }

    // Set nickname objects ids, so live chat component is instantiated
    setSenderNicknameId(senderNicknameObject.id);
    setReceiverNicknameId(receiverNicknameObject.id);
    return true;
  };

  return (
    <div className="live-chat">
      <br />
      <div className="header">
        <p className="header_text">{"Chat with another player:"}</p>
      </div>
      <div className="container">
        {senderNicknameId === null && receiverNicknameId === null && (
          <div>
            <Input
              className="form_input"
              value={senderNicknameInput}
              onChange={(event) => setSenderNicknameInput(event.target.value)}
              placeholder={"Sender (Your) Nickname"}
              size="large"
            />
            <Input
              className="form_input"
              value={receiverNicknameInput}
              onChange={(event) => setReceiverNicknameInput(event.target.value)}
              placeholder={"Receiver (Their) Nickname"}
              size="large"
            />
            <Button
              type="primary"
              className="form_button btn btn-dark"
              color={"#208AEC"}
              size={"large"}
              onClick={startLiveChat}
            >
              Start Live Chat
            </Button>
          </div>
        )}
        {senderNicknameId !== null && receiverNicknameId !== null && (
          <LiveChat
            senderNicknameName={senderNicknameInput}
            senderNicknameId={senderNicknameId}
            receiverNicknameName={receiverNicknameInput}
            receiverNicknameId={receiverNicknameId}
          />
        )}
      </div>
    </div>
  );
};

export default ChatSetup;