import { useState } from "react";
import "../styles/chatBubble.scss";
import ChatForm from "./ChatForm";

const ChatBubble = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const toggleChat = () => {
    setFadeOut(true);

    setTimeout(() => {
      setIsChatOpen(!isChatOpen);
      setFadeOut(false);
    }, 150);
  };

  return (
    <>
      <div className="chatBubble" onClick={toggleChat}>
        <i
          className={`fa-solid fa-comment ${
            !isChatOpen ? "fa-comment" : "fa-xmark"
          } ${fadeOut ? "fade-out" : "fade-in"}`}
        />
      </div>
      {isChatOpen && <ChatForm />}
    </>
  );
};

export default ChatBubble;
