'use client';

import React, { useState } from "react";
import ChatWindow from "./ChatWindow"; // Componente que ya tienes creado
import { Chat } from "./Chat";

const ChatIcon: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleChat = (): void => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      {/* Botón flotante */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={toggleChat}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m2 5l-4-4H9a6 6 0 01-6-6V7a6 6 0 016-6h6a6 6 0 016 6v3a6 6 0 01-6 6h-3l-4 4z"
            />
          </svg>
        </button>
      </div>

      {/* Componente de Chat */}
      {isOpen && (
        <div className="fixed bottom-16 right-6 bg-white border border-gray-300 rounded-lg shadow-lg w-80 max-h-[500px] overflow-hidden">
          {/* <ChatWindow /> */}
          <Chat />
        </div>
      )}
    </>
  );
};

export default ChatIcon;
