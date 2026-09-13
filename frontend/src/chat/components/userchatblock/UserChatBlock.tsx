import React  from 'react'

type UserChatBlockProps = {
  message: string;
};

function UserChatBlock({ message }: UserChatBlockProps) {
  return (
    <div className="flex w-full justify-end mb-4">
      <div className="max-w-[80%] md:max-w-[70%] bg-blue-600 text-white rounded-2xl rounded-tr-sm px-5 py-3 shadow-sm whitespace-pre-wrap">
        {message}
      </div>
    </div>
  );
}

export default UserChatBlock;