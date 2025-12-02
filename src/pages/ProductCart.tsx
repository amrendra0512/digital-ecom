import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQty } from "../redux/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import EmptyCart from "./EmptyCart";
import { clearBuyNow } from "../redux/buyNow/buyNowSlice";
import type { RootState } from "../redux/store";

const ProductCart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state?.cart?.items);
  const subtotal = cart.reduce((acc, p) => acc + p.price * (p.qty || 1), 0);

  const handleCheckout = ()=> {
    dispatch(clearBuyNow())
    navigate("/payment")
  }

  return (
    <>
      {cart?.length > 0 ? (
        <div className="max-w-6xl mx-auto px-8 py-10">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold">
              Your cart total is ₹{subtotal.toFixed(2)}
            </h2>
            <p className="text-gray-500 mt-2">Free shipping and returns</p>
            <button
              onClick={handleCheckout}
              className="mt-4 bg-black text-white px-6 py-2 rounded-md"
            >
              Check out
            </button>
          </div>

          <div>
            {cart?.length > 0 &&
              cart?.map((item:any) => (
                <div
                  key={item.id}
                  className="flex items-start justify-between border-b py-8"
                >
                  {/* Left: Image */}
                  <div className="flex gap-6">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-32 h-32 object-cover rounded-lg"
                    />

                    {/* Middle: Details */}
                    <div>
                      <h3 className="text-xl font-semibold mb-1">
                        {item.title}
                      </h3>

                      <div className="text-gray-600 space-y-1 text-sm mt-3">
                        <p>🟢 Order today</p>
                        <p>
                          🚚 Delivery by{" "}
                          <span className="font-semibold">Dec 23</span>
                        </p>
                        <p>⚠️ Only {item.qty + 2} available</p>
                      </div>
                    </div>
                  </div>

                  {/* Center Controls */}
                  <div className="flex items-center gap-4">
                    {/* Quantity Selector */}
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          updateQty({
                            id: item.id,
                            qty: Number(e.target.value),
                          })
                        )
                      }
                      className="border rounded-md px-3 py-2"
                    >
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Right side: Price + Remove */}
                  <div className="text-right">
                    <p className="text-xl font-semibold">₹{item.price}</p>
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="text-red-500 text-sm underline mt-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
          </div>

          {/* Summary */}
          <div className="mt-10 border-t pt-8 text-right space-y-3 text-lg">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>

            <div className="flex justify-between font-semibold text-2xl pt-4">
              <span>Total</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>

            <button
              onClick={handleCheckout}
              className="mt-4 bg-black text-white px-6 py-2 rounded-md"
            >
              Check out
            </button>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};
export default ProductCart;
