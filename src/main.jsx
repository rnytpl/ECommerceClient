import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Store/store.js";
import SingleProductPage from "./pages/SingleProductPage.jsx";
import NewProduct from "./pages/NewProduct.jsx";
import EditProduct from "./pages/EditProduct.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // Provider allows the rest of the application to access redux store
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
        {/* <Route path="/products/:id" element={<SingleProductPage />} />
        <Route path="/products/new" element={<NewProduct />} />
        <Route path="/products/:id/edit" element={<EditProduct />} /> */}
      </Routes>
    </Router>
  </Provider>
);
