import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ChatWindow = ({ chat }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: '1',
      text: 'Hello! How can I assist you today?',
      sent: false,
      timestamp: '10:00 AM'
    }
  ]);

  const handleSend = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: Date.now().toString(),
      text: message,
      sent: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMessage]);
    setMessage('');

    // Simulate AI response
    if (chat?.id === 'ai') {
      setTimeout(() => {
        const aiResponse = {
          id: (Date.now() + 1).toString(),
          text: "I'm processing your message. How can I help you further?",
          sent: false,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-chat-light">
      <div className="h-16 flex items-center px-4 bg-white border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">{chat?.name || 'AI Assistant'}</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sent ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] rounded-lg px-4 py-2 animate-chat-appear ${
                  msg.sent ? 'bg-chat-sent' : 'bg-chat-message'
                }`}
              >
                <p className="text-gray-800">{msg.text}</p>
                <span className="text-xs text-gray-500 mt-1 block text-right">
                  {msg.timestamp}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-4 bg-white border-t border-gray-200">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 transition-colors"
          />
          <button
            onClick={handleSend}
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <Send className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
