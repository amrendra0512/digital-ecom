import { ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";
const Header = ({ isLoggedIn = true, cartCount = 0 }) => {
  return (
    <header className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Brand */}
       
        <div className="text-2xl font-bold cursor-pointer">MyStore</div>
        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          <a href="/" className="hover:text-gray-300">
            Home
          </a>

          {/* Cart */}
          <button className="relative hover:text-gray-300">
            <ShoppingCartIcon className="w-6 h-6" />

            {/* Cart Count */}
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 rounded-full">
              3
            </span>
          </button>

          {/* Login / Logout */}
          {isLoggedIn ? (
            <button className="hover:text-gray-300 flex items-center gap-2">
            <UserIcon className="w-6 h-6" />
          </button>
          ) : (
            <button className="hover:text-gray-300">Login</button>
          )}

        </nav>
      </div>
    </header>
  );
};

export default Header;
