import React, { useState, useEffect } from "react";
import { Button, Input, Tooltip } from "antd";
import { SyncOutlined } from "@ant-design/icons";
import Parse from "parse";
import { useParseQuery } from "@parse/react";
import { getProfileLeaderboardName } from "../../../Common/Services/Profileservice.js";

export const LiveChat = (props) => {
  // State variable to hold message text input
  const [messageInput, setMessageInput] = useState("");

  // Create parse query for live querying using useParseQuery hook
  const parseQuery = new Parse.Query("Message");
  // Get messages that involve both nicknames
  parseQuery.containedIn("sender", [
    props.senderNicknameId,
    props.receiverNicknameId,
  ]);
  parseQuery.containedIn("receiver", [
    props.senderNicknameId,
    props.receiverNicknameId,
  ]);
  // Set results ordering
  parseQuery.ascending("createdAt");

  // Include nickname fields, to enable name getting on list
  parseQuery.includeAll();

  // Declare hook and variables to hold hook responses
  const { isLive, isLoading, isSyncing, results, count, error, reload } =
    useParseQuery(parseQuery, {
      enableLocalDatastore: true, // Enables cache in local datastore (default: true)
      enableLiveQuery: true, // Enables live query for real-time update (default: true)
    });

  // Message sender handler
  const sendMessage = async () => {
    try {
      const messageText = messageInput;

      // Get sender and receiver nickname Parse objects
      const senderNicknameObjectQuery = new Parse.Query("Nickname");
      senderNicknameObjectQuery.equalTo("objectId", props.senderNicknameId);
      let senderNicknameObject = await senderNicknameObjectQuery.first();
      const receiverNicknameObjectQuery = new Parse.Query("Nickname");
      receiverNicknameObjectQuery.equalTo("objectId", props.receiverNicknameId);
      let receiverNicknameObject = await receiverNicknameObjectQuery.first();

      // Create new Message object and save it
      let Message = new Parse.Object("Message");
      Message.set("text", messageText);
      Message.set("sender", senderNicknameObject);
      Message.set("receiver", receiverNicknameObject);
      Message.save();

      // Clear input
      setMessageInput("");
    } catch (error) {
      alert(error);
    }
  };

  // Helper to format createdAt value on Message
  // const formatDateToTime = (date) => {
  //   return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  // };

  const formatDateToTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
  
    return `${hours}:${minutes}:${seconds}`;
  };

  const getName = async (username) => {
    try {
        const result = await getProfileLeaderboardName(username);
        console.log(result);  // This should log either the leaderboardName or the original username
        return result;
    } catch (error) {
        console.error('Error:', error);
    }
  };

  const [senderName, setSenderName] = useState("");
  const [receiverName, setReceiverName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const senderNameResult = await getName(props.senderNicknameName);
        const receiverNameResult = await getName(props.receiverNicknameName);
        setSenderName(senderNameResult);
        setReceiverName(receiverNameResult);
      } catch (error) {
        console.error("Error fetching names:", error);
      }
    };

    fetchData();
  }, [props.senderNicknameName, props.receiverNicknameName]);

  return (
    <div className="live-chat">
      <div className="flex_between">
        <h2 className="list_heading">{`Conversation with ${receiverName}`}</h2>
        <Tooltip title="Reload">
          <Button
            onClick={reload}
            type="primary"
            shape="circle"
            icon={<SyncOutlined />}
          />
        </Tooltip>
      </div>
      {results && (
        <div className="messages">
          {results
            .sort((a, b) => {
              const createdAtComparison = a.get("createdAt") - b.get("createdAt");
              // If createdAt is the same, use objectId for comparison
              return createdAtComparison !== 0 ? createdAtComparison : a.id.localeCompare(b.id);
            })
            // .sort((a, b) => a.get("createdAt") > b.get("createdAt"))
            .map((result) => (
              <div
                key={result.id}
                className={
                  result.get("sender").id === props.senderNicknameId
                    ? "message_sent"
                    : "message_received"
                }
              >
                <p className="message_bubble">{result.get("text")}</p>
                <p className="message_time">
                  {formatDateToTime(result.get("createdAt"))}
                </p>
                {/* <p className="message_name">
                  {result.get("sender").get("name")}
                </p> */}
              </div>
            ))}
        </div>
      )}
      <div className="new_message">
        <h2 className="new_message_title">New message</h2>
        <Input
          className="form_input full"
          value={messageInput}
          onChange={(event) => setMessageInput(event.target.value)}
          placeholder={"Your message..."}
          size="large"
        />
        <Button
          type="primary"
          className="form_button btn btn-dark"
          color={"#208AEC"}
          size={"large"}
          onClick={sendMessage}
        >
          Send message
        </Button>
      </div>
      <div>
        {isLoading && <p>{"Loading…"}</p>}
        {isSyncing && <p>{"Syncing…"}</p>}
        {isLive ? <p>{"Status: Live"}</p> : <p>{"Status: Offline"}</p>}
        {error && <p>{error.message}</p>}
        {count && <p>{`Count: ${count}`}</p>}
      </div>
    </div>
  );
};