import { useNavigate } from "react-router-dom";
import { ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";

const Header = ({ isLoggedIn = true }) => {
  const navigate = useNavigate();
  const cartData = useSelector((state) => state?.cart?.items);

  return (
    <header className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* LEFT - LOGO */}
          <div
            onClick={() => navigate("/")}
            className="text-2xl font-bold tracking-wide cursor-pointer"
          >
            MyStore
          </div>

          {/* RIGHT - NAV */}
          <nav className="flex items-center space-x-8">
            {/* Home */}
            <div
              onClick={() => navigate("/")}
              className="cursor-pointer hover:text-blue-400 transition"
            >
              Home
            </div>

            {/* Cart */}
            <div
              onClick={() => navigate("/cart")}
              className="cursor-pointer hover:text-blue-400 transition"
            >
              <ShoppingCartIcon className="w-6 h-6" />

              {/* Cart Count */}
              {cartData?.length > 0 && (
                <span className="absolute top-2 bg-red-600 text-white text-xs px-1.5 rounded-full">
                  {cartData.length}
                </span>
              )}
            </div>

            {/* Profile */}

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
      </div>
    </header>
  );
};

export default Header;
