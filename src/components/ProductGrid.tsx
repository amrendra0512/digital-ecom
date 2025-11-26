import { useDispatch } from "react-redux";
import "../styles/product.css";
import type { Product } from "../types/product";
import { addToCart } from "../redux/cart/cartSlice";

interface Props {
  products: Product[];
}

const ProductGrid = ({ products }: Props) => {

  const dispatch = useDispatch();
  
  const addToCartHandler = (items: any) => {
    dispatch(addToCart(items));
    console.log("items", items);
  };
  return (
    <div className="grid-container">
      {products.map((p) => (
        <div key={p.id} className="product-card">
          <img src={p.image} alt={p.title} />
          <h3>{p.title}</h3>
          <p className="price">₹{p.price}</p>
          <div className="flex justify-between">
            <button
              className="bg-green-400"
              onClick={() => addToCartHandler(p)}
            >
              Add to cart
            </button>
            <button className="bg-amber-300">Buy Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
