import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Shop from "./Shop";
import Nav from "./Nav";
import "./style.css";
import ItemDetail from "./ItemDetail";


const RouteSwitcher = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ItemDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const Home = () => <div><h1>Home Page</h1></div>;

export default RouteSwitcher;