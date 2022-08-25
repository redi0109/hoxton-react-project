import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Pizza } from "./pages/Pizza";
import { Sandwiches } from "./pages/Sandwiches";

function App() {
  return (
    <div className="App">

     <Routes>
      <Route index element={<Home/>} />
      <Route path="/pizza" element={<Pizza/>}/>
      <Route path="/sandwiches" element={<Sandwiches/>}/>
    </Routes>
 
    </div>
  );
}

export default App;
