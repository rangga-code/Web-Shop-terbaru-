export const CONFIG = {
  nama: "Rangga Shop",
  profil: "https://i.ibb.co.com/rfMFpWQP/file-00000000ef4c71fd8bd6a655705e515b.png",
  banner: "https://i.ibb.co.com/0RXmmqrN/file-0000000056ac71f8bc6b4f5ea6f48cd0.png",
  tentang: "🌌 Rangga || Rangga Shop hadir sebagai solusi digital lengkap untukmu! Kami menyediakan Panel Pterodactyl premium untuk game server, bot hosting, hingga web/app hosting dengan performa cepat dan stabil, Jasa design kreatif seperti logo, banner, hingga UI/UX agar bisnismu lebih profesional, serta Script Bot WhatsApp full fitur dengan menu otomatis, AI chat, downloader, payment, dan fitur premium lainnya.",
  alamat: "Jl. Soekarno, Jakarta, Indonesia",
  sosial_media: {
    email: "ranggacode@gmail.com",
    youtube: "@rangga_code",
    tiktok: "@rangga_code",
    whatsapp: "6285122551340",
    telegram: "@rangga_code"
  },
  payment: {
    dana: "0851-3851-7647",
    gopay: "Belum Tersedia",
    ovo: "0851-4365-3800",
    qris: "https://i.ibb.co.com/rfMFpWQP/file-00000000ef4c71fd8bd6a655705e515b.png",
    seabank: "Belum Tersedia"
  },
  telegram_api: {
    bot: "8346972163:AAG9H_uuuooDm4s_pofRDJx_hsQptFQNZEs",
    chatid: "-5212889130"
  }
};

export interface ProductVariant {
  name: string;
  price: number | string;
}

export interface Product {
  id: number;
  name: string;
  icon: string;
  description: string;
  variants: ProductVariant[];
}

export interface ProductsData {
  [category: string]: Product[];
}

export const productsData: ProductsData = {
  "Hosting": [
    {
      id: 1, name: "Panel Pterodactyl", icon: "fas fa-server",
      description: "Panel Pterodactyl hosting bot/game dengan performa stabil dan harga terjangkau.",
      variants: [
        { name: "1GB RAM", price: 2000 }, { name: "2GB RAM", price: 3000 },
        { name: "3GB RAM", price: 4000 }, { name: "4GB RAM", price: 5000 },
        { name: "5GB RAM", price: 6000 }, { name: "6GB RAM", price: 7000 },
        { name: "7GB RAM", price: 8000 }, { name: "8GB RAM", price: 9000 },
        { name: "9GB RAM", price: 10000 }, { name: "11GB RAM", price: 11000 },
        { name: "Unlimited RAM", price: 13000 }, { name: "Reseller Panel", price: 16000 },
        { name: "Admin Panel", price: 18000 }
      ]
    },
    {
      id: 2, name: "Jasa Pembuatan Fitur", icon: "fas fa-microchip",
      description: "Layanan pembuatan fitur khusus untuk bot WhatsApp sesuai kebutuhan Anda.",
      variants: [
        { name: "Add & Fix / Fitur WhatsApp Bot", price: 5000 },
        { name: "Add Fitur Auto React Status", price: 15000 },
        { name: "Add Fitur Security IP", price: 25000 },
        { name: "Add Fitur Security Username + Password", price: 15000 },
        { name: "Add Fitur Autojoin Saluran WhatsApp", price: 10000 },
        { name: "Add Fitur Auto Show JKT48", price: 55000 }
      ]
    },
    {
      id: 3, name: "Sewa Bot & Jadibot", icon: "fas fa-hdd",
      description: "Layanan Sewabot atau Jadibot WhatsApp memungkinkan Anda memiliki bot siap pakai tanpa perlu repot menjalankan server sendiri.",
      variants: [
        { name: "1 Minggu / 7 Day", price: 5000 },
        { name: "2 Minggu / 14 Day", price: 10000 },
        { name: "1 Bulan / 30 Day", price: 20000 },
        { name: "Permanen / LifeTime", price: 30000 }
      ]
    },
    {
      id: 4, name: "Sell Script Rangga Md v1", icon: "fas fa-database",
      description: "Script Rangga Md v1, versi terbaru dari bot WhatsApp yang sudah dilengkapi fitur modern, performa cepat, dan sistem auto-update.",
      variants: [
        { name: "600 Features (NO UPDATE)", price: 30000 },
        { name: "600 Features (FREE 1x UPDATE)", price: 35000 },
        { name: "600 Features (FREE 2x UPDATE)", price: 45000 }
      ]
    },
    {
      id: 5, name: "Jasa Rename Script Bot WA", icon: "fas fa-database",
      description: "Jasa rename script bot WhatsApp untuk kamu yang ingin script terlihat original dan memiliki brand sendiri.",
      variants: [
        { name: "Rename 30%", price: 7000 },
        { name: "Rename 60%", price: 12000 },
        { name: "Rename 80%", price: 15000 },
        { name: "Rename 100% Full", price: 20000 }
      ]
    },
    {
      id: 6, name: "Domain & Hosting 1 Tahun", icon: "fas fa-globe",
      description: "Hosting website dengan panel cPanel / DirectAdmin, cocok untuk pemula.",
      variants: [
        { name: "Domain myid 1 Tahun", price: 8000 },
        { name: "Domain bizid 1 Tahun", price: 8000 },
        { name: "Domain xyz 1 Tahun", price: 75000 },
        { name: "Domain xyz + Hosting", price: 550000 }
      ]
    }
  ],
  "Desain": [
    {
      id: 7, name: "Desain Logo", icon: "fas fa-pen-nib",
      description: "Jasa pembuatan logo dengan berbagai gaya desain.",
      variants: [
        { name: "Logo Minimalis", price: 2000 }, { name: "Logo Typography", price: 2500 },
        { name: "Logo Mascot", price: 3000 }, { name: "Logo Vintage", price: 4000 },
        { name: "Logo Modern", price: 5000 }, { name: "Request Custom", price: "Harga sesuai request" }
      ]
    },
    {
      id: 8, name: "Desain Banner", icon: "fas fa-image",
      description: "Jasa pembuatan banner untuk promosi usaha, media sosial, atau event.",
      variants: [
        { name: "Banner Sosmed", price: 15000 },
        { name: "Banner Event", price: 25000 },
        { name: "Banner Promosi", price: 30000 }
      ]
    },
    {
      id: 9, name: "Desain Poster", icon: "fas fa-scroll",
      description: "Jasa desain poster kreatif untuk kebutuhan bisnis, acara, atau publikasi.",
      variants: [
        { name: "Poster A4", price: 20000 },
        { name: "Poster A3", price: 35000 }
      ]
    },
    {
      id: 10, name: "UI/UX Design", icon: "fas fa-laptop-code",
      description: "Jasa desain UI/UX untuk website atau aplikasi dengan tampilan modern.",
      variants: [
        { name: "Landing Page", price: 75000 },
        { name: "Full Website", price: 250000 },
        { name: "Mobile App UI", price: 300000 },
        { name: "Figma Mobile App", price: 450000 }
      ]
    }
  ],
  "Produk Digital": [
    {
      id: 12, name: "E-Book", icon: "fas fa-book",
      description: "Koleksi e-book digital dengan berbagai topik menarik.",
      variants: [
        { name: "E-Book Bisnis", price: 15000 },
        { name: "E-Book Programming", price: 20000 },
        { name: "E-Book Random Pack", price: 10000 }
      ]
    },
    {
      id: 13, name: "Software & Tools", icon: "fas fa-cogs",
      description: "Software dan tools digital untuk menunjang pekerjaan.",
      variants: [
        { name: "Software Editing", price: 30000 },
        { name: "Software Utility", price: 25000 },
        { name: "Obfuscate Encrypt JS", price: 10000 }
      ]
    },
    {
      id: 14, name: "Lisensi & Key", icon: "fas fa-key",
      description: "Produk lisensi resmi dan serial key untuk software pilihan.",
      variants: [
        { name: "Windows Key", price: 50000 },
        { name: "Office Key", price: 60000 },
        { name: "Antivirus Key", price: 40000 }
      ]
    },
    {
      id: 15, name: "Template Digital", icon: "fas fa-file-alt",
      description: "Template digital untuk desain, presentasi, website, dan media sosial.",
      variants: [
        { name: "Template PowerPoint", price: 10000 },
        { name: "Template Website", price: 30000 },
        { name: "Template Sosmed", price: 15000 }
      ]
    }
  ],
  "Jasa Joki Tugas": [
    {
      id: 17, name: "Makalah", icon: "fas fa-id-card",
      description: "Jasa pembuatan makalah profesional dengan bahasa formal dan referensi valid.",
      variants: [
        { name: "Makalah Pendek (3–5 halaman)", price: 35000 },
        { name: "Makalah Standar (6–10 halaman)", price: 60000 },
        { name: "Makalah Lengkap (11–20 halaman)", price: 120000 }
      ]
    },
    {
      id: 18, name: "Pembuatan Laporan PKL", icon: "fas fa-address-book",
      description: "Jasa pembuatan laporan PKL lengkap dari Bab 1–5.",
      variants: [
        { name: "Laporan Bab 1–3 (Dasar)", price: 120000 },
        { name: "Laporan Full Bab 1–5", price: 215000 },
        { name: "Laporan + Lampiran Lengkap", price: 257000 }
      ]
    }
  ]
};
