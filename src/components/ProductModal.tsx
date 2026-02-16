import { useState } from "react";
import { Product } from "@/data/config";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  const [selectedVariant, setSelectedVariant] = useState(0);

  if (!product) return null;

  const addToCart = () => {
    const variant = product.variants[selectedVariant];
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingIndex = cart.findIndex(
      (item: { productId: number; variantName: string }) =>
        item.productId === product.id && item.variantName === variant.name
    );

    if (existingIndex >= 0) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push({
        productId: product.id,
        productName: product.name,
        variantName: variant.name,
        price: variant.price,
        quantity: 1,
        icon: product.icon,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cart-updated"));
    onClose();
  };

  const formatPrice = (price: number | string) =>
    typeof price === "number" ? `Rp ${price.toLocaleString("id-ID")}` : price;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl text-muted-foreground hover:text-foreground"
        >
          &times;
        </button>

        <div className="flex items-center gap-4 mb-4">
          <div className="product-icon text-2xl">
            <i className={product.icon}></i>
          </div>
          <div>
            <h3 className="text-lg font-bold">{product.name}</h3>
            <div className="text-primary font-bold">
              {formatPrice(product.variants[selectedVariant].price)}
            </div>
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-4">{product.description}</p>

        <h4 className="font-semibold mb-2">Pilih Varian:</h4>
        <div className="flex flex-col gap-2 mb-4 max-h-48 overflow-y-auto">
          {product.variants.map((variant, index) => (
            <div
              key={index}
              className={`variant-option ${index === selectedVariant ? "selected" : ""}`}
              onClick={() => setSelectedVariant(index)}
            >
              <div className="font-medium text-sm">{variant.name}</div>
              <div className="text-primary text-sm font-bold">{formatPrice(variant.price)}</div>
            </div>
          ))}
        </div>

        <button className="btn-primary w-full py-3 text-base" onClick={addToCart}>
          Tambah ke Keranjang
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
