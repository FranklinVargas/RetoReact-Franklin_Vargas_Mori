import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import MyOrders from "./pages/MyOrders";
import AddOrder from "./pages/AddOrder";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/my-orders" replace />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/add-order" element={<AddOrder />} />
        <Route path="/add-order/:id" element={<AddOrder />} />
      </Routes>
    </BrowserRouter>
  );
}
