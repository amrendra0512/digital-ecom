import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/products/productSlice";
import ProductGrid from "../components/ProductGrid";
import Footer from "../footer/Footer";
import type { RootState } from "../redux/store";

const ProductListPage = () => {
  
  const dispatch = useDispatch();

  const { list, page, limit, total, loading } = useSelector((s: RootState) => s.products);
  console.log("list.length", list.length)
console.log("total", total)
  useEffect(() => {
    dispatch(fetchProducts({ page: 1, limit: 20 }));
  }, []);

   const loadMore = () => {
    dispatch(fetchProducts({ page: page + 1, limit }));
  };

  const canLoadMore = list.length < total;
  console.log("canLoadMore", canLoadMore)
  return (
    <div>
      <ProductGrid products={list} />

      {loading && <p>Loading...</p>}

       {canLoadMore && !loading && (
        <button
          onClick={loadMore}
          className="block mx-auto mt-6 bg-blue-600 text-white px-5 py-2 rounded"
        >
          Load More
        </button>
      )}

      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default ProductListPage;
