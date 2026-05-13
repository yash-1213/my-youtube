const Button = (props) => {
  const { name } = props;
  return (
    <div className="cursor-pointer">
      <button className="px-5 py-1 m-2 rounded-md bg-gray-200">{name}</button>
    </div>
  );
};

export default Button;
