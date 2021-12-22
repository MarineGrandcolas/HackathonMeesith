import { Routes, Route } from "react-router-dom"

import './App.css';
import Characters from './components/CharactersStarWars';
import CharactersDetails from "./screen/CharactersDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/characters" element= {<Characters/>} />
        <Route path="/characters/:id" element= {<CharactersDetails/>} />
      </Routes>  
    </div>
  );
}

export default App;
