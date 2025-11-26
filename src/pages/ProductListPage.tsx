import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/products/productSlice";
import ProductGrid from "../components/ProductGrid";
import Footer from "../footer/Footer";

const ProductListPage = () => {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state: any) => state.products);

  const [filters, setFilters] = useState({
    page: 1,
    limit: 9,
    search: "",
    category: "all",
  });

  useEffect(() => {
    dispatch(fetchProducts(filters));
  }, [filters]);

  return (
    <div>
      <ProductGrid products={list} />

      {loading && <p>Loading...</p>}
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default ProductListPage;
