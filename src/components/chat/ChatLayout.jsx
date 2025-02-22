import React from 'react';
import ChatSidebar from './ChatSidebar';
import ChatWindow from './ChatWindow';
import { useState } from 'react';

const ChatLayout = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  
  const chats = [
    {
      id: 'ai',
      name: 'AI Assistant',
      lastMessage: 'How can I help you today?',
      time: 'Now',
    },
    {
      id: '1',
      name: 'John Doe',
      lastMessage: 'See you tomorrow!',
      time: '10:30 AM',
      unread: 2,
    },
    {
      id: '2',
      name: 'Jane Smith',
      lastMessage: 'Thanks for the update',
      time: 'Yesterday',
    },
  ];

  return (
    <div className="flex h-screen bg-chat-light">
      <ChatSidebar 
        chats={chats} 
        selectedChat={selectedChat} 
        onSelectChat={setSelectedChat} 
      />
      <ChatWindow 
        chat={chats.find(chat => chat.id === (selectedChat || 'ai'))} 
      />
    </div>
  );
};

export default ChatLayout;