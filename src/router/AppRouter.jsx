import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import Shop from "../pages/Shop";
import Categories from "../pages/Categories";
import Deals from "../pages/Deals";
import Cart from "../pages/Cart";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
  );
}

export default AppRouter;
