import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Shop from "./Shop";
import Nav from "./Nav";
import "./style.css";

const RouteSwitcher = () => {
  return (
    <div>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/profile" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouteSwitcher;