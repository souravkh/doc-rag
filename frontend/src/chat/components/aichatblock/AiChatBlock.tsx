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
    <div className="flex w-full justify-start mb-4 group">
      <div className="max-w-[85%] md:max-w-[80%] flex flex-col gap-1">
        <div className="text-xs font-semibold text-gray-500 ml-1">
          DocuRAG
        </div>

        <div className="bg-gray-100 text-gray-800 rounded-2xl rounded-tl-sm px-5 py-4 shadow-sm whitespace-pre-wrap leading-relaxed relative">
          {message}
          
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button 
              onClick={handleCopy}
              className="text-xs bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 px-2 py-1 rounded shadow-sm flex items-center gap-1"
            >
              {copied ? (
                <>
                  <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Copied
                </>
              ) : (
                <>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                  Copy
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AiChatBlock;
