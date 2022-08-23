import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Pizza } from "./pages/Pizza";

function App() {
  return (
    <div className="App">

     <Routes>
      <Route index element={<Home/>} />
      <Route path="/pizza" element={<Pizza/>}/>
    </Routes>
 
    </div>
  );
}

export default App;
