import React  from 'react'

type UserChatBlockProps = {
  message: string;
};

function UserChatBlock({ message }: UserChatBlockProps) {
  return (
    <div className="user-chat-block">
      <div className="user-chat-content">
        {message}
      </div>
    </div>
  );
}

export default UserChatBlock;