import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CONFIG } from "@/data/config";

interface CartItem {
  productId: number;
  productName: string;
  variantName: string;
  price: number;
  quantity: number;
  icon: string;
}

const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [invoiceId, setInvoiceId] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
  }, []);

  const updateCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    window.dispatchEvent(new Event("cart-updated"));
  };

  const removeItem = (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    updateCart(newCart);
  };

  const changeQty = (index: number, delta: number) => {
    const newCart = [...cart];
    newCart[index].quantity += delta;
    if (newCart[index].quantity <= 0) newCart.splice(index, 1);
    updateCart(newCart);
  };

  const filtered = cart.filter(
    (item) =>
      item.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.variantName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const paymentMethods = [
    { key: "dana", name: "DANA", icon: "fas fa-wallet", desc: "Transfer Dana" },
    { key: "gopay", name: "GoPay", icon: "fas fa-money-bill-wave", desc: "GoJek Indonesia" },
    { key: "ovo", name: "OVO", icon: "fas fa-mobile-alt", desc: "OVO Payment" },
    { key: "qris", name: "QRIS", icon: "fas fa-qrcode", desc: "Scan QR Code" },
    { key: "seabank", name: "SEABANK", icon: "fas fa-building-columns", desc: "Seabank Payment" },
  ];

  const openPaymentModal = () => {
    if (cart.length === 0) return;
    setInvoiceId("RRAA-" + Math.floor(100000 + Math.random() * 900000));
    setInvoiceDate(
      new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })
    );
    setSelectedPayment(null);
    setShowPaymentModal(true);
  };

  const getPaymentNumber = (key: string) => {
    return CONFIG.payment[key as keyof typeof CONFIG.payment] || "";
  };

  const copyPaymentNumber = () => {
    if (!selectedPayment) return;
    const num = getPaymentNumber(selectedPayment);
    navigator.clipboard.writeText(num).catch(() => {});
  };

  const continueToWhatsApp = () => {
    if (!selectedPayment) return;
    const orderDetails = cart
      .map(
        (i) =>
          `${i.productName} (${i.variantName}) - ${i.quantity} x Rp ${i.price.toLocaleString("id-ID")}`
      )
      .join("\n");
    const msg = encodeURIComponent(
      `Halo, saya ingin memesan produk dengan detail berikut:\n\n${orderDetails}\n\nTotal: Rp ${subtotal.toLocaleString("id-ID")}\nMetode Pembayaran: ${selectedPayment.toUpperCase()}\nInvoice: ${invoiceId}\n\nSaya sudah melakukan pembayaran ke ${getPaymentNumber(selectedPayment)}. Mohon konfirmasi pesanan saya.`
    );
    window.open(`https://wa.me/${CONFIG.sosial_media.whatsapp}?text=${msg}`, "_blank");
    setShowPaymentModal(false);
  };

  return (
    <div className="min-h-screen">
      <header className="header-gradient text-white py-4">
        <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="text-white text-sm flex items-center gap-2">
            <i className="fas fa-arrow-left"></i> Kembali
          </Link>
          <h1 className="text-lg font-bold">Keranjang Belanja</h1>
          <div></div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6">
        <div className="mb-4 relative">
          <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"></i>
          <input
            type="text"
            placeholder="Cari produk di keranjang..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input-custom pl-11"
          />
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-16">
            <i className="fas fa-shopping-cart text-5xl text-muted-foreground mb-4"></i>
            <h3 className="text-lg font-semibold mb-2">Keranjang Kosong</h3>
            <p className="text-muted-foreground text-sm mb-4">Belum ada produk di keranjang</p>
            <Link to="/" className="btn-primary inline-block">
              Belanja Sekarang
            </Link>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-3 mb-6">
              {filtered.map((item, i) => (
                <div key={i} className="rounded-xl p-4 bg-card shadow-sm flex items-center gap-3">
                  <div className="product-icon shrink-0">
                    <i className={item.icon}></i>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold truncate">{item.productName}</h3>
                    <p className="text-xs text-muted-foreground truncate">{item.variantName}</p>
                    <p className="text-sm font-bold text-primary">
                      Rp {(item.price * item.quantity).toLocaleString("id-ID")}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => changeQty(i, -1)}
                      className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center text-sm"
                    >
                      -
                    </button>
                    <span className="text-sm font-bold w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() => changeQty(i, 1)}
                      className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center text-sm"
                    >
                      +
                    </button>
                    <button onClick={() => removeItem(i)} className="ml-2 text-destructive text-sm">
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="rounded-xl p-5 bg-card shadow-sm">
              <h3 className="font-bold mb-3">Ringkasan Belanja</h3>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Subtotal</span>
                <span>Rp {subtotal.toLocaleString("id-ID")}</span>
              </div>
              <div className="border-t pt-3 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span className="text-primary">Rp {subtotal.toLocaleString("id-ID")}</span>
              </div>
              <button onClick={openPaymentModal} className="btn-primary w-full mt-4 py-3 text-base">
                Lanjut ke Pembayaran
              </button>
            </div>
          </>
        )}
      </main>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="modal-overlay" onClick={() => setShowPaymentModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowPaymentModal(false)}
              className="absolute top-3 right-4 text-2xl text-muted-foreground hover:text-foreground"
            >
              &times;
            </button>

            <h2 className="text-xl font-bold mb-4">Pembayaran</h2>

            {/* Invoice Info */}
            <div className="rounded-xl p-4 bg-muted/50 mb-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Invoice ID:</span>
                <span className="font-semibold">{invoiceId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tanggal:</span>
                <span>{invoiceDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status:</span>
                <span className="text-yellow-500 font-semibold">Menunggu Pembayaran</span>
              </div>
            </div>

            {/* Payment Methods */}
            <h3 className="font-semibold mb-3">Pilih Metode Pembayaran</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
              {paymentMethods.map((pm) => (
                <div
                  key={pm.key}
                  onClick={() => setSelectedPayment(pm.key)}
                  className={`rounded-xl p-4 cursor-pointer text-center transition-all duration-200 border-2 ${
                    selectedPayment === pm.key
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="text-2xl mb-2 text-primary">
                    <i className={pm.icon}></i>
                  </div>
                  <div className="font-semibold text-sm">{pm.name}</div>
                  <div className="text-xs text-muted-foreground">{pm.desc}</div>
                </div>
              ))}
            </div>

            {/* Selected Payment Details */}
            {selectedPayment && (
              <div className="rounded-xl p-4 bg-muted/50 mb-4 space-y-2">
                <h4 className="font-semibold text-sm">
                  {paymentMethods.find((p) => p.key === selectedPayment)?.name}
                </h4>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Nomor/URL:</span>
                  <span className="font-medium">{getPaymentNumber(selectedPayment)}</span>
                </div>
                <div className="text-center text-xl font-bold text-primary my-2">
                  Rp {subtotal.toLocaleString("id-ID")}
                </div>
                <button onClick={copyPaymentNumber} className="btn-outline w-full text-sm py-2">
                  <i className="fas fa-copy mr-2"></i>Salin Nomor Pembayaran
                </button>
              </div>
            )}

            <button
              onClick={continueToWhatsApp}
              disabled={!selectedPayment}
              className={`btn-primary w-full py-3 text-base ${!selectedPayment ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <i className="fab fa-whatsapp mr-2"></i>Lanjutkan ke WhatsApp
            </button>
            <p className="text-xs text-muted-foreground text-center mt-3">
              Dengan mengklik tombol ini, Anda akan diarahkan ke WhatsApp untuk konfirmasi pesanan.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
