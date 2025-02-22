import React from "react";
import { MessageSquare } from "lucide-react";

const ChatSidebar = ({ chats, selectedChat, onSelectChat }) => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="w-[400px] border-r border-gray-200 bg-white">
      <div className="h-16 flex items-center px-4 bg-chat-light border-b border-gray-200 justify-between">
        <button
          onClick={goBack}
          className="text-chat-text px-3 py-1 bg-gray-200 rounded-md"
        >
          Back
        </button>
        <h1 className="text-xl font-semibold text-chat-text">Chats</h1>
      </div>
      <div className="overflow-y-auto h-[calc(100vh-4rem)]">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className={`flex items-center px-4 py-3 cursor-pointer transition-colors duration-200 ${
              selectedChat === chat.id
                ? "bg-chat-selected"
                : "hover:bg-chat-hover"
            }`}
            onClick={() => onSelectChat(chat.id)}
          >
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-gray-500" />
            </div>
            <div className="ml-4 flex-1">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">{chat.name}</span>
                <span className="text-sm text-gray-500">{chat.time}</span>
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-sm text-gray-500 truncate max-w-[240px]">
                  {chat.lastMessage}
                </span>
                {chat.unread && (
                  <span className="bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {chat.unread}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatSidebar;
