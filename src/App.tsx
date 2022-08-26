import { Route, Routes } from "react-router-dom";
import "./App.css";
import { SignIn } from "./pages/SignIn";
import { Home } from "./pages/Home";;
import { PageNotFound } from "./pages/NotFound";
import { Menu } from "./pages/Menu";
import { SingleProduct } from "./pages/SingleProduct";
import { Store } from "./pages/Store";
import { Cart } from "./components/Cart";

function App() {
  return (
    <div className="App">

     <Routes>
      <Route index element={<Home/>} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/signIn" element={<SignIn logIn={undefined}/>}/>
      <Route path="/store" element={<Store/>}/>
      <Route path="*" element={<PageNotFound />} />
      <Route path="/singleproduct" element={<SingleProduct/>}/>
      <Route path= {"/cart"} element={<Cart/>}/>

      
    </Routes>
 
    </div>
  );
}

export default App;
