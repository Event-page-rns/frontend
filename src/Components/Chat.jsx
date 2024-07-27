import { useEffect, useRef, useState } from "react";
import { BASE_URL } from "../Contexts/DocumentContext";
import axios from "axios";

const Chat = () => {
  const chatDisplayRef = useRef();
  const inputRef = useRef();
  const [chatList, setChatList] = useState([]);
  const [chat, setChat] = useState("");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");

  useEffect(() => {
    const getChats = async () => {
      const response = await axios.get(BASE_URL + "/getAllMessages");
      console.log(response.data);
      setChatList(response.data);
      chatDisplayRef.current.scrollTop = chatDisplayRef.current.scrollHeight;
    };
    getChats();
  }, []);

  useEffect(() => {
    chatDisplayRef.current.scrollTop = chatDisplayRef.current.scrollHeight;
  }, [chatList]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(chat);
    const a = new Date();

    const date = `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()}`;
    const time = `${a.getHours()}:${a.getMinutes()}`;
    try {
      await axios.post(BASE_URL + "/sendMessage", {
        message: chat,
        email: email,
        date: date,
        time: time,
      });
      setChatList((prev) => [
        ...prev,
        {
          message: chat,
          date: date,
          email: email,
          time: time,
        },
      ]);
      setChat("");
      chatDisplayRef.current.scrollTop = chatDisplayRef.current.scrollHeight;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="flex flex-col w-full h-[83vh]">
        <div
          className="flex-1 w-full p-3 overflow-y-auto flex flex-col space-y-2"
          id="chatDisplay"
          ref={chatDisplayRef}
        >
          {chatList.map((messageData, index) => (
            <div
              key={index}
              className={
                "chat-message text-white max-w-xs rounded-lg px-3 py-1.5 text-sm " +
                (messageData.email === email
                  ? "self-end bg-blue-500"
                  : "self-start bg-zinc-500")
              }
            >
              {messageData.message}
            </div>
          ))}
        </div>
        <form
          className="px-3 py-2 border-t dark:border-zinc-700"
          onSubmit={(e) => {
            if (chat !== "") {
              handleSubmit(e);
            }
            inputRef.current.focus();
          }}
        >
          <div className="flex gap-2">
            <input
              placeholder="Type your message..."
              name="message"
              ref={inputRef}
              value={chat}
              className="flex-1 p-2 border rounded-lg border-zinc-700 text-sm"
              id="chatInput"
              onChange={(e) => setChat(e.target.value)}
              type="text"
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-3 rounded-lg transition duration-300 ease-in-out text-sm"
              id="sendButton"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;
