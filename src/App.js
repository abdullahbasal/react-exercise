import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Phones from "./pages/Phones/Phones";
import Laptops from "./pages/Laptops/Laptops";
import ProductTable from "./pages/product-table/ProductTable";
import Error from "./pages/error/Error";
import ProductDetail from "./pages/product-detail/ProductDetail";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/phones" element={<Phones />} />
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/table" element={<ProductTable />} />
          <Route path="/product/:productName" element={<ProductDetail />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
