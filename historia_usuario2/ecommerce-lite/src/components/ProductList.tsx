import { products } from "../data/data";
import { ProductCard } from "./productCard";

export const ProductList = () => {
  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.sku} product={product} />
      ))}
    </div>
  );
};