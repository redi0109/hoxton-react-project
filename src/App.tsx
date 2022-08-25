import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Account } from "./pages/Account";
import { Beers } from "./pages/Beers";
import { Drinks } from "./pages/drinks";
import { Home } from "./pages/Home";
import { Lunch } from "./pages/Lunch";
import { PageNotFound } from "./pages/NotFound";
import { Pizza } from "./pages/Pizza";
import { Product } from "./pages/Product";
import { Salads } from "./pages/Salads";
import { Sandwiches } from "./pages/Sandwiches";
import { Store } from "./pages/Store";

function App() {
  return (
    <div className="App">

     <Routes>
      <Route index element={<Home/>} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/pizza" element={<Pizza/>}/>
      <Route path="/sandwiches" element={<Sandwiches/>}/>
      <Route path="/salads" element={<Salads/>}/>
      <Route path="/lunch" element={<Lunch/>}/>
      <Route path="/beers" element={<Beers/>}/>
      <Route path="/drinks" element={<Drinks/>}/>
      <Route path="/account" element={<Account/>}/>
      <Route path="/store" element={<Store/>}/>
      <Route path="*" element={<PageNotFound />} />
      <Route path="/product" element={<Product/>}/>

      
    </Routes>
 
    </div>
  );
}

export default App;
