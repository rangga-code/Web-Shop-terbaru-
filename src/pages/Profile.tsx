import { useState } from "react";
import { CONFIG } from "@/data/config";
import faviconImg from "@/assets/favicon.png";

const Profile = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [notification, setNotification] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const timestamp = new Date().toLocaleString("id-ID");
    const telegramMessage = `
📨 *Pesan Baru dari Website Rangga Shop*

👤 *Nama:* ${formData.name}
📧 *Email:* ${formData.email}
⏰ *Waktu:* ${timestamp}

💬 *Pesan:*
${formData.message}
    `.trim();

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${CONFIG.telegram_api.bot}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: CONFIG.telegram_api.chatid,
            text: telegramMessage,
            parse_mode: "Markdown",
          }),
        }
      );
      const data = await response.json();
      if (data.ok) {
        setNotification(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setNotification(false), 3000);
      } else {
        throw new Error(data.description || "Gagal mengirim pesan");
      }
    } catch {
      alert("Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="header-gradient text-white py-10 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-3 border-4 border-white/30 animate-[float_6s_ease-in-out_infinite]">
            <img src={faviconImg} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-2xl font-bold relative inline-block">
            {CONFIG.nama}
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-white/70 rounded"></span>
          </h1>
          <p className="text-sm opacity-80 mt-2">Pemilik {CONFIG.nama} Marketplace</p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6">
        {/* About */}
        <div className="mb-6">
          <h2 className="section-title">Tentang Saya</h2>
          <div className="rounded-xl p-5 bg-card shadow-sm">
            <p className="text-sm text-muted-foreground leading-relaxed">{CONFIG.tentang}</p>
          </div>
        </div>

        {/* Contact */}
        <div className="mb-6">
          <h2 className="section-title">Kontak Saya</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { icon: "fas fa-map-marker-alt", label: "Alamat", value: CONFIG.alamat },
              { icon: "fas fa-phone", label: "Telepon/WhatsApp", value: CONFIG.sosial_media.whatsapp },
              { icon: "fas fa-envelope", label: "Email", value: CONFIG.sosial_media.email },
              { icon: "fas fa-clock", label: "Jam Operasional", value: "09:00 - 21:00 WIB" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl p-4 bg-card shadow-sm flex items-center gap-3 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 text-primary">
                  <i className={item.icon}></i>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                  <div className="text-sm font-medium">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social */}
        <div className="mb-6">
          <div className="rounded-xl p-5 bg-card shadow-sm text-center">
            <h3 className="font-semibold mb-4">Ikuti Saya di Media Sosial</h3>
            <div className="flex justify-center gap-4">
              {[
                { href: `https://youtube.com/${CONFIG.sosial_media.youtube}`, icon: "fab fa-youtube", color: "hover:bg-red-500" },
                { href: `https://tiktok.com/${CONFIG.sosial_media.tiktok}`, icon: "fab fa-tiktok", color: "hover:bg-foreground" },
                { href: `https://wa.me/${CONFIG.sosial_media.whatsapp}`, icon: "fab fa-whatsapp", color: "hover:bg-green-500" },
                { href: `https://t.me/${CONFIG.sosial_media.telegram}`, icon: "fab fa-telegram", color: "hover:bg-blue-500" },
              ].map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  target="_blank"
                  className={`w-12 h-12 rounded-full flex items-center justify-center bg-muted text-primary text-lg transition-all duration-300 hover:-translate-y-1 hover:text-white ${s.color}`}
                >
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Message Form */}
        <div className="mb-6">
          <h2 className="section-title">Kirim Pesan</h2>
          <div className="rounded-xl p-5 bg-card shadow-sm">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Masukkan nama lengkap"
                  className="search-input-custom"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Masukkan alamat email"
                  className="search-input-custom"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Pesan</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tulis pesan Anda di sini..."
                  rows={4}
                  className="search-input-custom resize-y"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="btn-primary w-full py-3 text-base relative overflow-hidden"
              >
                {sending ? (
                  <span><i className="fas fa-spinner animate-spin mr-2"></i>Mengirim...</span>
                ) : (
                  <span><i className="fas fa-paper-plane mr-2"></i>Kirim Pesan</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Success Notification */}
      {notification && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-2 z-50 animate-[slideUp_0.3s_ease]">
          <i className="fas fa-check-circle"></i>
          <span>Pesan berhasil dikirim!</span>
        </div>
      )}
    </div>
  );
};

export default Profile;
