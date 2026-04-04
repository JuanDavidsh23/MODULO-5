import { ProductCardProps } from "../types";

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div>
      <img src={product.imageUrl} alt={product.name} width={150} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <p>{product.category}</p>
      <p>{product.quantity}</p>
    </div>
  );
};