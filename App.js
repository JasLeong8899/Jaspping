import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import {BrowserRouter,Link,Routes,Route} from "react-router-dom";
import Products from "./component/Products";


export default function App() {
  
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/*" element={<Products/>} />
      </Routes>
     
    </BrowserRouter>
  );
}
