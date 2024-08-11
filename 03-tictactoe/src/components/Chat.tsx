import React, { useState } from "react";

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState<string>("");
  const [username, setUsername] = useState<string>("🍒");
  const [feedback, setFeedback] = useState<string>("");

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, `${username}: ${message}`]);
      setMessage("");
      setFeedback("");
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSendMessage();
    }
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter" && message.trim() !== "") {
      setFeedback(`${username} 님이 입력 중입니다...`);
    } else {
      setFeedback("");
    }
  };

  return (
    <div className="w-72 flex flex-col">
      <h1 className="text-xl font-bold mb-4">채팅</h1>
      <div className="border p-2 mb-2 h-max min-h-max overflow-y-auto">
        <div className="mb-4">
          {messages.map((msg, index) => (
            <p key={index}>{msg}</p>
          ))}
        </div>
        <div className="text-gray-500 italic">{feedback}</div>
      </div>
      <input
        className="w-full mb-2 p-2 border rounded"
        type="text"
        placeholder="이름을 입력하세요."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="w-full mb-2 p-2 border rounded"
        type="text"
        placeholder="채팅 메시지 내용을 작성하세요."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        onKeyUp={handleKeyUp}
      />
      <button
        className="w-full p-2 text-white rounded hover:bg-green-600 bg-green-700"
        onClick={handleSendMessage}
      >
        Send
      </button>
    </div>
  );
};

export default Chat;
