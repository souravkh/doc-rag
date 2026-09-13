import { useState } from "react";

type AiChatBlockProps = {
  message: string;
};

function AiChatBlock({ message }: AiChatBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (error) {
      console.error("Failed to copy message:", error);
    }
  };

  return (
    <div className="ai-chat-block">
      <div className="ai-chat-header">
        <span>DocuRAG</span>
      </div>

      <div className="ai-chat-content">
        {message}
      </div>

      <div className="ai-chat-actions">
        <button onClick={handleCopy}>
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
}

export default AiChatBlock;
