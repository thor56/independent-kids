import { useState } from 'react';

interface ChatInterfaceProps {
  userId: string;
}

export default function ChatInterface({ userId }: ChatInterfaceProps) {
  const [chatInput, setChatInput] = useState('');
  const [chatHistory, setChatHistory] = useState<{ user: string; ai: string }[]>([]);

  const handleChatSubmit = async () => {
    if (!chatInput.trim()) return;

    const response = await fetch('/api/ai/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, prompt: chatInput, isNewSession: chatHistory.length === 0 }),
    });

    const data = await response.json();
    setChatHistory([...chatHistory, { user: chatInput, ai: data.response }]);
    setChatInput('');
  };

  return (
    <div className="chat-container">
      <div className="chat-history">
        {chatHistory.map((entry, index) => (
          <div key={index}>
            <p><strong>User:</strong> {entry.user}</p>
            <p><strong>AI:</strong> {entry.ai}</p>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={chatInput}
        onChange={(e) => setChatInput(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={handleChatSubmit}>Send</button>
    </div>
  );
}