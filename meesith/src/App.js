import { Routes, Route } from "react-router-dom"

import './App.css';
import Clones from "./screen/Clones";
import CharactersDetails from "./screen/CharactersDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/characters" element= {<Clones/>} />
        <Route path="/characters/:id" element= {<CharactersDetails/>} />
      </Routes>  
    </div>
  );
}

export default App;
