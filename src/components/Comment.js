import { USER_ICON } from "../utils/constants";

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex items-center bg-gray-100 p-2 rounded-md my-2">
      <img className="w-10 h-10" alt="commentImg" src={USER_ICON} />
      <div className="px-3">
        <span className="font-bold">{name}</span>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
