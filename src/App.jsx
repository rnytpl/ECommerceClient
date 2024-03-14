import { Link, Route, Routes } from "react-router-dom";
import { useGetProductsQuery } from "./features/productsApiSlice";
import Layout from "./Components/Layout";
import HomePage from "./Scenes/home/HomePage";
import AdminPage from "./Scenes/admin/AdminPage";
import AdminProducts from "./Scenes/admin/components/AdminProducts/AdminProducts";
import AdminDashboard from "./Scenes/admin/components/AdminDashboard";
import AdminOrders from "./Scenes/admin/components/AdminOrders";
import AdminCustomers from "./Scenes/admin/components/AdminCustomers";
import ProductsPage from "./Scenes/home/ProductsPage";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="admin" element={<AdminPage />}>
          <Route index element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="customers" element={<AdminCustomers />} />
        </Route>
      </Route>
    </Routes>
  );
};
export default App;
