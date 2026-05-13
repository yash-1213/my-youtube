import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

// const data =

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(27),
        }),
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ml-2 border border-gray-300 w-full h-[500px] bg-slate-100 relative rounded-lg shadow-md">
      <span className="p-2 font-bold text-xl">Live Chat:</span>
      <div className=" h-[420px] overflow-auto">
        {
          // dont use index as key
          chatMessages?.map((chat, index) => (
            <ChatMessage key={index} name={chat.name} message={chat.message} />
          ))
        }
      </div>
      <form
        className="absolute bottom-0 flex items-cente mb-2 w-full"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "yash",
              message: liveMessage,
            }),
          );
          setLiveMessage("");
        }}
      >
        <input className="border border-gray-300 w-full p-2 rounded-md mx-2" type="text" placeholder="say something" value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)} />
        <button className="p-2 rounded-md mx-2 shadow-md bg-green-100">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
