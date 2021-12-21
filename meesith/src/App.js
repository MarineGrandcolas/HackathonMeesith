import Home from "./screen/Home";
import Navbar from "./components/Navbar";
import ReactDOM from "react-dom";
import './App.css';

const App = () => {
    return(
    <div>
      <Navbar/>
      <Home/>
    </div>)
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
