import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const BottomNav = () => {
  const location = useLocation();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const total = cart.reduce((sum: number, item: { quantity: number }) => sum + item.quantity, 0);
      setCartCount(total);
    };
    updateCount();
    window.addEventListener("storage", updateCount);
    window.addEventListener("cart-updated", updateCount);
    return () => {
      window.removeEventListener("storage", updateCount);
      window.removeEventListener("cart-updated", updateCount);
    };
  }, []);

  const navItems = [
    { path: "/", icon: "fas fa-home", label: "Beranda" },
    { path: "/keranjang", icon: "fas fa-shopping-cart", label: "Keranjang", badge: cartCount },
    { path: "/profil", icon: "fas fa-user", label: "Profil" },
    { path: "/search", icon: "fas fa-code", label: "Script" },
  ];

  return (
    <div className="bottom-nav">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`nav-item ${location.pathname === item.path ? "active" : ""}`}
        >
          <span className="relative">
            <i className={item.icon}></i>
            {item.badge !== undefined && item.badge > 0 && (
              <span className="cart-badge">{item.badge}</span>
            )}
          </span>
          <span>{item.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default BottomNav;
