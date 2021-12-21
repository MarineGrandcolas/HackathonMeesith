import Logo from "./components/Logo";
import ReactDOM from "react-dom";
import './App.css';

function App() {
  return (
    <div>
      <Logo/>
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
