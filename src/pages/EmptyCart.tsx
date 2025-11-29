import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center bg-gray-50">
      {/* Cart Image */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
        alt="Empty cart"
        className="w-40 h-40 opacity-80"
      />

      {/* Message */}
      <h2 className="text-2xl font-semibold text-gray-800 mt-6">
        Your cart is empty!
      </h2>

      {/* Button */}
      <button
        onClick={() => navigate("/")}
        className="mt-5 bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700 transition"
      >
        Shop now
      </button>
    </div>
  );
};

export default EmptyCart;
