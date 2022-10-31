import React from "react";
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import GifIcon from "@mui/icons-material/Gif";

function Chat() {
  return (
    <div className="chat">
      <ChatHeader />

      <div className="chat__messages">
        <Message />
      </div>
      <div className="chat__input">
        <AddCircleIcon fontsize="larges" />
        <form>
          <input placeholder={"Enter a Message"} />
          <button className="chat__inputButton" type="submit">
            Send Message
          </button>
        </form>

        <div className="chat__inputIcons">
          <CardGiftcardIcon fontsize="large" />
          <GifIcon fontsize="large" />
          <EmojiEmotionsIcon fontsize="large" />
        </div>
      </div>
    </div>
  );
}

export default Chat;
