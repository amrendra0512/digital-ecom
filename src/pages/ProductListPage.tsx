import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/products/productSlice";
import ProductGrid from "../components/ProductGrid";
import Footer from "../footer/Footer";

const ProductListPage = () => {
  
  const dispatch = useDispatch();

  const { list, page, limit, total, loading } = useSelector((s: any) => s.products);

  useEffect(() => {
    dispatch(fetchProducts({ page: 1, limit: 20 }));
  }, []);

   const loadMore = () => {
    dispatch(fetchProducts({ page: page + 1, limit }));
  };

  const canLoadMore = list.length < total;

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
