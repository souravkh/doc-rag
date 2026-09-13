import { useState } from "react";
import UserChatBlock from "../components/userchatblock/UserChatBlock";
import AiChatBlock from "../components/aichatblock/AiChatBlock";
import ChatInput from "../components/chatinput/ChatInput";

type ChatMessage = {
  id: number;
  role: "user" | "assistant";
  message: string;
};

function Chat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const handleSend = (message: string) => {
    const userMessage: ChatMessage = {
      id: Date.now(),
      role: "user",
      message,
    };

    setMessages((currentMessages) => [
      ...currentMessages,
      userMessage,
    ]);

    // Temporary response until FastAPI is connected.
    const assistantMessage: ChatMessage = {
      id: Date.now() + 1,
      role: "assistant",
      message: "This is a temporary AI response.",
    };

    setMessages((currentMessages) => [
      ...currentMessages,
      assistantMessage,
    ]);
  };

  return (
    <div className="chat">
      <div className="chat-window">
        {messages.map((message) => {
          if (message.role === "user") {
            return (
              <UserChatBlock
                key={message.id}
                message={message.message}
              />
            );
          }

          return (
            <AiChatBlock
              key={message.id}
              message={message.message}
            />
          );
        })}
      </div>

      <ChatInput onSend={handleSend} />
    </div>
  );
}

export default Chat;