import { USER_ICON } from "../utils/constants";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center p-2 bg-white mb-2 shadow-sm rounded-sm mx-2">
      <img className="h-8" alt="userIcon" src={USER_ICON} />
      <span className="font-bold mx-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
