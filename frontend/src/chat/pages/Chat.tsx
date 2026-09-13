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
    <div className="flex flex-col h-full bg-white relative">
      <div className="flex-1 overflow-y-auto p-4 space-y-6 pb-24">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-400 space-y-4">
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
            <p className="text-lg">Upload a document and start asking questions.</p>
          </div>
        ) : (
          messages.map((message) => {
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
          })
        )}
      </div>

      <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-white via-white to-transparent">
        <ChatInput onSend={handleSend} />
      </div>
    </div>
  );
}

export default Chat;