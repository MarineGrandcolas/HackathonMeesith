import Home from "./screen/Home"
import Clones from "./screen/Clones"
import Places from "./screen/Places"
import Contact from "./screen/Contact"
// import ReactDOM from "react-dom";
import {Routes, Route} from "react-router-dom"
import './App.css';

const App = () => {
    return(
    <div>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Clones' element={<Clones/>}></Route>
      <Route path='/Places' element={<Places/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>
    </div>)
}

export default App;


// ReactDOM.render(<App />, document.getElementById("root"));
