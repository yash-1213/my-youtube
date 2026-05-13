import Button from "./Button";

const ButtonList = () => {
  const buttonList = ["All", "Gaming", "Songs", "Live", "News", "Cricket"];
  return (
    <div className="flex m-2">
      {buttonList.map((button, index) => (
        <Button key={index} name={button} />
      ))}
    </div>
  );
};

export default ButtonList;
