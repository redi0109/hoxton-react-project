import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";;
import { PageNotFound } from "./pages/NotFound";
import { Menu } from "./pages/Menu";
import { Cart } from "./components/Cart";
import { Basket } from "./pages/Basket";
import { ProductDetails } from "./pages/ProductDetails";


function App() {
  return (
    <div className="App">

     <Routes>
      <Route index element={<Home/>} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="*" element={<PageNotFound />} />
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/basket" element={<Basket/>}/>
      <Route path="/productDetails" element={<ProductDetails/>}/>


      
    </Routes>
 
    </div>
  );
}

export default App;
