import { FiSearch, FiHeart, FiShoppingCart, FiUser, FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { supabase } from "../lib/supabaseClient";

function Navbar() {

  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-green-500 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold">
            P
          </div>
          <h1 className="font-semibold text-lg">PrimeBasket</h1>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex gap-8 text-gray-600">
          <Link to="/" className="text-green-600 font-medium">
            Home
          </Link>
          <a href="#">Shop</a>
          <a href="#">Categories</a>
          <a href="#">Deals</a>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-5 text-xl text-gray-600">

          <FiSearch />
          <FiHeart />
          <FiShoppingCart />

          {!user ? (

            <Link to="/login">
              <FiUser />
            </Link>

          ) : (

            <div className="flex items-center gap-4">

              <Link to="/profile">
                <FiUser />
              </Link>

              <button onClick={handleLogout}>
                <FiLogOut />
              </button>

            </div>

          )}

        </div>

      </div>
    </header>
  );
}

export default Navbar;