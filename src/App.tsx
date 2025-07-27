import "./App.css";
import About from "./widgets/About.tsx";
import Main from "./widgets/Main.tsx";

const App = () => {
  return (
    <div className="content">
      <Main />
      <About />
    </div>
  );
};

export default App;
