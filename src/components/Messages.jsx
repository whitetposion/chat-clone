import React from 'react';
import ChatMessage from './SingleMessage';
import dayjs from 'dayjs';

const ChatList = ({ data }) => {
  const renderMessages = () => {
    let lastDate = null;
    return data.map((chat, index) => {
      const isSender = chat.sender_id === 1; // sender_id 1 is me
      const messageDate = dayjs(chat.created_at).format('YYYY-MM-DD');
      const showTimestamp = lastDate !== messageDate;
      lastDate = messageDate;

      return (
        <React.Fragment key={chat.id}>
          {showTimestamp && (
            <div className="text-center text-gray-500 my-2">
              {dayjs(chat.created_at).format('MMMM D, YYYY')}
            </div>
          )}
          <ChatMessage message={chat.message} isSender={isSender} />
        </React.Fragment>
      );
    });
  };

  return (
    <div className="p-4 overflow-auto">
      {renderMessages()}
    </div>
  );
};

export default ChatList;
