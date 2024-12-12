// src/app/components/ChatInterface.tsx
import React, { useEffect, useRef, useState } from 'react';

interface Message {
  type: 'system' | 'assistant' | 'user';
  content: string;
  isHeader?: boolean;
  hints?: {
    text: string;
    suggestions?: string[];
  };
  info?: any;
  options?: string[];
}

interface ChatInterfaceProps {
  userId: string;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ userId }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'system',
      content: 'Welcome Onboard! Let\'s Match You with the Perfect Driver 🚗✨',
      isHeader: true
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getFirstQuestion();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const getFirstQuestion = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/ai/generate?userId=${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          isNewSession: true
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get initial question');
      }

      const data = await response.json();
      if (data.response?.answer) {
        setMessages(prev => [...prev, {
          type: 'assistant',
          content: data.response.answer,
          hints: data.response.hintMsg ? {
            text: data.response.hintMsg,
            suggestions: data.response.hints || []
          } : undefined,
          options: data.response.suggestions
        }]);
      }
    } catch (error) {
      console.error('Error getting first question:', error);
      setMessages(prev => [...prev, {
        type: 'assistant',
        content: 'Sorry, there was an error starting the conversation. Please refresh the page and try again.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = async (content: string) => {
    if (!content.trim()) return;

    try {
      setIsLoading(true);
      setMessages(prev => [...prev, { type: 'user', content }]);
      setInputValue('');

      const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/ai/generate?userId=${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: content,
          isNewSession: false
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const data = await response.json();
      if (data.response) {
        if (data.response.isProfileComplete) {
          setIsProfileComplete(true);
        }
        
        setMessages(prev => [...prev, {
          type: 'assistant',
          content: data.response.answer || '',
          hints: data.response.hintMsg ? {
            text: data.response.hintMsg,
            suggestions: data.response.hints || []
          } : undefined,
          info: data.response.info,
          options: data.response.suggestions
        }]);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, {
        type: 'assistant',
        content: 'Sorry, there was an error processing your message. Please try again.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const findCarpool = async () => {
    try {
      setIsLoading(true);
      setMessages(prev => [...prev, {
        type: 'assistant',
        content: 'Looking for carpool matches...'
      }]);

      // First sync cached user data
      const syncResponse = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/users/${userId}/sync-cache`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!syncResponse.ok) {
        throw new Error('Failed to sync user data');
      }

      // Get current match info
      const currentMatchResponse = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/users/${userId}/current-match`);
      if (!currentMatchResponse.ok) {
        throw new Error('Failed to get current match information');
      }

      const currentMatch = await currentMatchResponse.json();
      if (!currentMatch?.dependent_name || !currentMatch?.activity_name) {
        throw new Error('Required match information is missing');
      }

      const matchData = {
        dependent_name: currentMatch.dependent_name,
        activity_name: currentMatch.activity_name,
        radius: 2
      };

      // Perform matching
      const matchResponse = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/users/${userId}/match-carpool`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(matchData)
      });

      if (!matchResponse.ok) {
        throw new Error('Failed to find matches');
      }

      const matches = await matchResponse.json();
      setMessages(prev => [...prev, {
        type: 'assistant',
        content: `Found carpool matches for ${currentMatch.dependent_name}'s ${currentMatch.activity_name} activity:`,
        info: matches
      }]);

    } catch (error) {
      console.error('Error in findCarpool:', error);
      setMessages(prev => [...prev, {
        type: 'assistant',
        content: 'Sorry, there was an error finding carpool matches. Please try again later.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (inputValue.trim()) {
        sendMessage(inputValue);
      }
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] w-full bg-white overflow-hidden"> 
      {/* Header */}
      <div className="bg-emerald-600 py-3 px-4 flex items-center gap-2">
        <div className="text-white flex items-center gap-2">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <span className="text-emerald-600">✦</span>
          </div>
          <span className="font-semibold">Carpool Profile Assistant</span>
        </div>
      </div>

      {/* Chat Area */}
      <div 
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0"
      >
        {messages.map((message, index) => (
          <div key={index} className="space-y-2">
            {message.isHeader ? (
              <div className="text-2xl font-bold text-center py-4">
                {message.content}
              </div>
            ) : (
              <div className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[70%] ${
                  message.type === 'assistant' ? 'bg-emerald-50 rounded-lg p-4' : 
                  message.type === 'user' ? 'bg-emerald-600 text-white rounded-lg p-4' : ''
                }`}>
                  <div>{message.content}</div>
                  
                  {message.hints && (
                    <div className="mt-3">
                      <div className="text-gray-600 italic text-sm">
                        {message.hints.text}
                      </div>
                      {message.hints.suggestions && message.hints.suggestions.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {message.hints.suggestions.map((hint, i) => (
                            <span key={i} className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm drop-shadow-md">
                              {hint}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

{message.info && (
  <div className="mt-4">
    <div className="bg-gradient-to-br from-emerald-50 to-white rounded-xl border border-emerald-100 shadow-sm">
      <div className="p-5 space-y-4">
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-emerald-100 pb-4">
          <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
            <span className="text-white">✓</span>
          </div>
          <h3 className="text-lg font-semibold text-emerald-800">Summary</h3>
        </div>

        {/* Content */}
        <div className="space-y-3 pl-2">
          {Object.entries(message.info).map(([key, value], index) => {
            // Skip empty values or specific keys you want to hide
            if (!value || key === 'id') return null;

            // Format the key to be more readable
            const formattedKey = key
              .replace(/_/g, ' ')
              .split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');

            return (
              <div key={index} className="flex items-start gap-3 group hover:bg-emerald-50/50 p-2 rounded-lg transition-colors">
                {/* Icon based on key */}
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                  {key.includes('name') ? '👤' :
                   key.includes('activity') ? '🎯' :
                   key.includes('schedule') ? '🗓️' :
                   key.includes('location') ? '📍' :
                   key.includes('preference') ? '⭐' : '✦'}
                </div>
                
                {/* Content */}
                <div>
                  <div className="text-sm text-emerald-600 font-medium">
                    {formattedKey}
                  </div>
                  <div className="text-gray-600">
                    {typeof value === 'string' ? value : 
                     Array.isArray(value) ? value.join(', ') :
                     JSON.stringify(value)
                       .replace(/[{}\[\]"]/g, '')
                       .replace(/,/g, ', ')}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-emerald-50/50 px-5 py-3 border-t border-emerald-100">
        <span className="text-sm text-emerald-600">Review your information above and confirm if everything is correct</span>
      </div>
    </div>
  </div>
)}
                  
                  {message.options && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {message.options.map((option, i) => (
                        <button
                          key={i}
                          onClick={() => sendMessage(option)}
                          className="px-4 py-2 bg-emerald-100 hover:bg-emerald-200 rounded-md text-emerald-800 transition-colors shadow-md"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Find Carpool Button */}
      {isProfileComplete && (
        <div className="border-t border-b py-3 px-4 bg-gray-50">
          <button
            onClick={findCarpool}
            disabled={isLoading}
            className="w-full bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center disabled:bg-gray-400"
          >
            Find Carpool
          </button>
        </div>
      )}

      {/* Input Area */}
      <div className="border-t py-3 px-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message here..."
            className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            disabled={isLoading}
          />
          <button
            onClick={() => inputValue.trim() && sendMessage(inputValue)}
            disabled={isLoading || !inputValue.trim()}
            className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center disabled:bg-gray-400"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;