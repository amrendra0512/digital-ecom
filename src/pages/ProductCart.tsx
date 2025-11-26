import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/cart/cartSlice";

const ProductCart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state?.cart?.items);

  const removeFromCartHandler = (id: any) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      <div className="grid-container">
        {cartData.length > 0 &&
          cartData.map((p) => (
            <div key={p.id} className="product-card">
              <img src={p.image} alt={p.title} />
              <h3>{p.title}</h3>
              <p className="price">₹{p.price}</p>
              <div className="flex justify-between">
                <button
                  className="bg-white border-2 p-0.5 border-r-4"
                  onClick={() => removeFromCartHandler(p.id)}
                >
                  Remove
                </button>
                <button className="bg-green-300 p-0.5">Buy Now</button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
export default ProductCart;
