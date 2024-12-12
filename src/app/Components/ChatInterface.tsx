// src/app/components/ChatInterface.tsx
import React, { useEffect, useRef, useState } from 'react';

interface Message {
  content: string;
  isUser: boolean;
  info?: any;
  hints?: {
    text: string;
    suggestions?: string[];
  };
  suggestions?: string[];
}

interface ChatInterfaceProps {
  userId: string;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ userId }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize with a welcome message for testing
    setMessages([
      {
        content: "Hi there! I'm your Carpool Assistant. Let me help you set up your profile.",
        isUser: false,
        suggestions: ["Let's get started", "Tell me more"]
      }
    ]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { content: inputValue, isUser: true }]);
    setInputValue('');

    // Simulate response (replace with actual API call)
    setTimeout(() => {
      setMessages(prev => [...prev, {
        content: "How about we start with your carpooling preferences?",
        isUser: false,
        suggestions: ["Yes, please", "Not now"]
      }]);
    }, 1000);
  };

  return (
    <div className="w-full max-w-[800px] bg-white rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.1)] flex flex-col h-[90vh]">
      {/* Header */}
      <div className="p-5 bg-[#007bff] text-white rounded-t-lg text-center">
        <h2 className="text-xl font-semibold">Carpool Profile Assistant</h2>
      </div>

      {/* Chat Container */}
      <div 
        ref={chatContainerRef}
        className="flex-grow overflow-y-auto p-5 flex flex-col gap-2.5"
      >
        {messages.map((message, index) => (
          <div key={index} className="space-y-2">
            {/* Message */}
            <div 
              className={`max-w-[80%] p-[10px_15px] rounded-[15px] m-[5px_0] ${
                message.isUser 
                  ? 'self-end bg-[#007bff] text-white ml-auto' 
                  : 'self-start bg-[#e9ecef] text-black'
              }`}
            >
              {message.content}
            </div>

            {/* Info */}
            {message.info && (
              <div className="self-start bg-[#f8f9fa] text-black">
                <pre className="bg-[#f8f9fa] p-2.5 rounded whitespace-pre-wrap font-mono text-sm text-[#333] border border-[#dee2e6] w-full box-border">
                  {typeof message.info === 'string' ? message.info : JSON.stringify(message.info, null, 2)}
                </pre>
              </div>
            )}

            {/* Hints */}
            {message.hints && (
              <div>
                <span className="text-sm text-[#666] italic mr-2">
                  {message.hints.text}
                </span>
                {message.hints.suggestions && (
                  <div className="flex flex-wrap gap-2.5 mt-2">
                    {message.hints.suggestions.map((hint, i) => (
                      <span 
                        key={i} 
                        className="bg-[#f8f9fa] text-black px-4 py-2 rounded-full text-[0.9em] border border-[#dee2e6]"
                      >
                        {hint}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Suggestions */}
            {message.suggestions && (
              <div className="flex flex-wrap gap-2.5 m-[10px_0] self-start">
                {message.suggestions.map((suggestion, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setInputValue(suggestion);
                      handleSubmit(new Event('submit') as any);
                    }}
                    className="bg-[#f8f9fa] border border-[#dee2e6] rounded-[20px] p-[8px_15px] cursor-pointer text-[0.9em] hover:bg-[#e9ecef] transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Controls */}
      <div className="p-5 flex gap-2.5 bg-white border-t border-[#dee2e6] rounded-b-lg">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message here..."
          className="flex-grow p-2.5 border border-[#dee2e6] rounded text-base focus:outline-none focus:ring-2 focus:ring-[#007bff]"
        />
        <button
          onClick={(e) => handleSubmit(e as any)}
          className="px-5 py-2.5 bg-[#007bff] text-white border-none rounded cursor-pointer transition-colors hover:bg-[#0056b3]"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;