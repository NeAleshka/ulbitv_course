import Button from "../components/Button/Button.tsx";

const Main = () => {
  return (
    <div>
      <Button text={"click me"} onClick={() => console.log("click me")} />
    </div>
  );
};

export default Main;
