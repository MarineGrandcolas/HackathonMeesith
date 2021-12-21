import Home from "./screen/Home";
import ReactDOM from "react-dom";
import './App.css';

const App = () => {
    return(
    <div>
      <Home/>
    </div>)
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
