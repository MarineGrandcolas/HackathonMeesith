import {Routes, Route} from "react-router-dom"

import './App.css';
// import Planets from './components/APIPlaces'
import PlacesItems from './screen/PlacesItems'
import PlacesDetails from "./screen/PlacesDetails"

function App() {
  return (
    <div className="App">
      {/* <Planets /> */}
      {/* <PlacesItems /> */}
      <Routes>
        <Route path="/placesitems" element={<PlacesItems />} />
        <Route path="/placesitems/:id" element={<PlacesDetails />} />
      </Routes>
    </div>
  );
}

export default App;
