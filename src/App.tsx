import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Lunch } from "./pages/Lunch";
import { Pizza } from "./pages/Pizza";
import { Salads } from "./pages/Salads";
import { Sandwiches } from "./pages/Sandwiches";

function App() {
  return (
    <div className="App">

     <Routes>
      <Route index element={<Home/>} />
      <Route path="/pizza" element={<Pizza/>}/>
      <Route path="/sandwiches" element={<Sandwiches/>}/>
      <Route path="/salads" element={<Salads/>}/>
      <Route path="/lunch" element={<Lunch/>}/>
    </Routes>
 
    </div>
  );
}

export default App;
