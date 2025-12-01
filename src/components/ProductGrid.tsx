import { useDispatch } from "react-redux";
import type { Product } from "../types/product";
import { addToCart } from "../redux/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { setBuyNowProduct } from "../redux/buyNow/buyNowSlice";
import { useDevice } from "../hooks/useDevice";

interface Props {
  products: Product[];
}

const ProductGrid = ({ products }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isMobileOnly, isTabletOnly, isDesktopOnly } = useDevice();

  const addToCartHandler = (items: Product) => dispatch(addToCart(items));
  
  const buyNowHandler = (items: Product) => {
    dispatch(setBuyNowProduct(items));
    navigate("/payment");
  };

  return (
    <div
      className={`grid gap-4 px-4 py-6
        ${isMobileOnly ? "grid-cols-2" : ""}
        ${isTabletOnly ? "grid-cols-3" : ""}
        ${isDesktopOnly ? "grid-cols-5" : ""}
      `}
    >
      {products?.length > 0 && products?.map((p) => (
        <div key={p.id} className="bg-white rounded-lg shadow p-3">
          <img
            src={p.image}
            alt={p.title}
            className="w-full h-32 md:h-40 object-cover rounded"
          />

          <h3 className="mt-3 text-sm md:text-base font-semibold">{p.title}</h3>
          <p className="text-green-600 font-bold mt-1">₹{p.price}</p>

          <div
            className={`flex gap-2 mt-3 ${
              isMobileOnly ? "flex-col" : "flex-row"
            }`}
          >
            <button
              className="bg-green-500 text-white py-1.5 rounded text-sm w-full"
              onClick={() => addToCartHandler(p)}
            >
              Add to Cart
            </button>

            <button
              className="bg-amber-400 text-black py-1.5 rounded text-sm w-full"
              onClick={() => buyNowHandler(p)}
            >
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
