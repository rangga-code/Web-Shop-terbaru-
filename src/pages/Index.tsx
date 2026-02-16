import { useState } from "react";
import { CONFIG, productsData, Product } from "@/data/config";
import ProductModal from "@/components/ProductModal";
import faviconImg from "@/assets/favicon.png";

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Selamat pagi!";
    if (hour < 15) return "Selamat siang!";
    if (hour < 19) return "Selamat sore!";
    return "Selamat malam!";
  };

  const faqs = [
    { q: "Bagaimana cara melakukan pemesanan?", a: "Pilih produk yang ingin dibeli, lalu klik pada produk untuk melihat detail dan varian. Setelah memilih varian, klik tombol 'Tambah ke Keranjang'." },
    { q: "Berapa lama waktu pengiriman?", a: "Pengiriman dalam kota memakan waktu 1-2 hari, sedangkan luar kota 2-5 hari kerja." },
    { q: "Apakah produk dijamin original?", a: "Ya, semua produk yang kami jual 100% original dan bergaransi resmi." },
    { q: "Metode pembayaran apa saja yang diterima?", a: "Kami menerima transfer bank, e-wallet (Gopay, OVO, Dana, ShopeePay), serta QRIS." },
  ];

  const testimonials = [
    { name: "Ahmad R.", location: "Bandung", text: "Pelayanan sangat cepat dan ramah. Produk original dan harga bersaing. Recommended banget!", date: "12 Juni 2023" },
    { name: "Sinta W.", location: "Jakarta", text: "Barang sampai dengan cepat dan packing aman. Seller responsif dan helpful!", date: "5 Juli 2023" },
    { name: "Rizky M.", location: "Surabaya", text: "Sudah berkali-kali belanja di sini dan selalu puas. Produk berkualitas dan garansi terpercaya.", date: "28 Mei 2023" },
  ];

  const advantages = [
    { icon: "fas fa-shipping-fast", title: "Pengiriman Cepat", desc: "Pesanan diproses maksimal 1x24 jam" },
    { icon: "fas fa-shield-alt", title: "Garansi Resmi", desc: "Semua produk bergaransi resmi" },
    { icon: "fas fa-headset", title: "Dukungan 24/7", desc: "Customer service siap membantu kapan saja" },
    { icon: "fas fa-medal", title: "Terpercaya", desc: "8.200+ pelanggan telah mempercayakan kami" },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="header-gradient text-white pb-6">
        <div className="max-w-5xl mx-auto px-4">
          {/* Banner */}
          <div className="relative rounded-xl overflow-hidden h-44 mb-4">
            <img src={CONFIG.banner} alt="Banner" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center">
              <h2 className="text-xl font-bold">{CONFIG.nama} || Marketplace</h2>
              <p className="text-sm opacity-90">{getGreeting()} Selamat berbelanja!</p>
            </div>
          </div>

          {/* Profile */}
          <div className="flex items-center gap-4 mb-4">
            <div className="profile-avatar">
              <img src={faviconImg} alt="Profile" className="w-full h-full object-cover" />
              <div className="verified-badge">
                <i className="fas fa-check"></i>
              </div>
            </div>
            <div>
              <h1 className="text-lg font-bold flex items-center gap-2">
                {CONFIG.nama} <i className="fas fa-check-circle text-sm opacity-80"></i>
              </h1>
              <p className="text-xs opacity-80">⭐ 4.9 (1,234 Reviews) | Free Fee Admin</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { value: "12.5K", label: "Total Terjual" },
              { value: "8.2K", label: "Pelanggan" },
              { value: "98%", label: "Kepuasan" },
            ].map((stat) => (
              <div key={stat.label} className="stat-card">
                <div className="text-lg font-bold">{stat.value}</div>
                <div className="text-xs opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Products */}
      <main className="max-w-5xl mx-auto px-4 py-6">
        {Object.entries(productsData).map(([category, products]) => (
          <div key={category} className="mb-8">
            <h2 className="section-title">{category}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="product-card"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="product-icon">
                    <i className={product.icon}></i>
                  </div>
                  <h3 className="text-sm font-semibold">{product.name}</h3>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* FAQ */}
        <div className="mb-8">
          <h2 className="section-title">Pertanyaan Umum</h2>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item ${activeFaq === i ? "active" : ""}`}>
                <div className="faq-question" onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                  {faq.q}
                  <span className="faq-toggle transition-transform duration-300">
                    <i className="fas fa-chevron-down"></i>
                  </span>
                </div>
                <div className="faq-answer">
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-8">
          <h2 className="section-title">Testimonial Pelanggan</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.location}</div>
                  </div>
                  <div className="ml-auto text-xs">⭐⭐⭐⭐⭐</div>
                </div>
                <p className="text-sm text-muted-foreground italic">"{t.text}"</p>
                <div className="text-xs text-muted-foreground mt-2">{t.date}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Advantages */}
        <div className="mb-8">
          <h2 className="section-title">Mengapa Memilih Kami?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {advantages.map((adv, i) => (
              <div key={i} className="advantage-card">
                <div className="advantage-icon">
                  <i className={adv.icon}></i>
                </div>
                <h3 className="font-semibold text-sm mb-1">{adv.title}</h3>
                <p className="text-xs text-muted-foreground">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            <div>
              <h3 className="font-bold mb-2">Tentang Kami</h3>
              <p className="text-xs opacity-70 line-clamp-4">{CONFIG.tentang}</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Kontak</h3>
              <p className="text-xs opacity-70"><i className="fas fa-map-marker-alt mr-1"></i>{CONFIG.alamat}</p>
              <p className="text-xs opacity-70"><i className="fas fa-envelope mr-1"></i>{CONFIG.sosial_media.email}</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Sosial Media</h3>
              <div className="flex gap-3 text-lg">
                <a href={`https://youtube.com/${CONFIG.sosial_media.youtube}`} target="_blank" className="opacity-70 hover:opacity-100"><i className="fab fa-youtube"></i></a>
                <a href={`https://tiktok.com/${CONFIG.sosial_media.tiktok}`} target="_blank" className="opacity-70 hover:opacity-100"><i className="fab fa-tiktok"></i></a>
                <a href={`https://wa.me/${CONFIG.sosial_media.whatsapp}`} target="_blank" className="opacity-70 hover:opacity-100"><i className="fab fa-whatsapp"></i></a>
                <a href={`https://t.me/${CONFIG.sosial_media.telegram}`} target="_blank" className="opacity-70 hover:opacity-100"><i className="fab fa-telegram"></i></a>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-2">Payment</h3>
              <p className="text-xs opacity-70">Dana: {CONFIG.payment.dana}</p>
              <p className="text-xs opacity-70">OVO: {CONFIG.payment.ovo}</p>
            </div>
          </div>
          <div className="text-center text-xs opacity-50 mt-6 pt-4 border-t border-white/10">
            © {new Date().getFullYear()} {CONFIG.nama}. All Rights Reserved.
          </div>
        </div>
      </footer>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
};

export default Index;
