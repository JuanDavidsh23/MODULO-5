import { ProductCardProps } from "../types";
import { Card } from "./Card";
import { Badge } from "./Badge";
import { Button } from "./Button";

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card
      title={product.name}
      type={product.isActive ? "white" : "black"}
      imageUrl={product.imageUrl}
      badge={<Badge label={product.category} status="info" />}
      footer={
        <Button 
          text={product.quantity > 0 ? "Comprar" : "Agotado"} 
          variant={product.quantity > 0 ? "primary" : "secondary"} 
          disabled={product.quantity === 0} 
        />
      }
    >
      <p><strong>Marca:</strong> {product.brand}</p>
      <p><strong>Precio:</strong> ${product.price.toFixed(2)}</p>
      <p>
        <strong>Estado:</strong>{' '}
        {product.isActive ? (
          <Badge label="Activo" status="success" />
        ) : (
          <Badge label="Inactivo" status="error" />
        )}
      </p>
      <p><strong>Cantidad:</strong> {product.quantity}</p>
    </Card>
  );
};