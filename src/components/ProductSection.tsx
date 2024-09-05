import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { ProductProps as Product } from "@/types/productProps";

const ProductsSection = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
          <div>
            <h2 className="mt-3 text-center text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              Products
            </h2>
          </div>
        </div>
        <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
            <Link
              key={`${index}+${product.title}`}
              to={`/product/${product.id}`}
            >
              <ProductCard {...product} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
