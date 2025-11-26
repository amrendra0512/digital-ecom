import { ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = ({ isLoggedIn = true, cartCount = 0 }) => {
  const navigate = useNavigate();
  const cartData = useSelector((state) => state?.cart?.items);

  return (
    <header className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Brand */}

        <div className="text-2xl font-bold cursor-pointer">MyStore</div>
        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          <button onClick={() => navigate("/")} className="hover:text-gray-300">
            Home
          </button>

          {/* Cart */}
          <button
            onClick={() => navigate("/cart")}
            className="relative hover:text-gray-300"
          >
            <ShoppingCartIcon className="w-6 h-6" />

            {/* Cart Count */}
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 rounded-full">
              {cartData?.length > 0 && cartData?.length}
            </span>
          </button>

          {/* Login / Logout */}
          {isLoggedIn ? (
            <button
              onClick={() => navigate("/logout")}
              className="hover:text-gray-300 flex items-center gap-2"
            >
              <UserIcon className="w-6 h-6" />
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="hover:text-gray-300"
            >
              Login
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
