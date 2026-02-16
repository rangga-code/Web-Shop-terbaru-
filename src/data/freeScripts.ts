export interface FreeScript {
  id: number;
  title: string;
  description: string;
  image: string;
  youtubeUrl: string;
  downloadFile: string;
  version: string;
  fileSize: string;
  category: string;
  uploadDate: string;
}

export const freeScripts: FreeScript[] = [
  {
    id: 1,
    title: "Bot WhatsApp Starter Pack",
    description: "Script bot WhatsApp dasar dengan fitur menu, downloader, dan AI chat. Cocok untuk pemula yang ingin belajar membuat bot sendiri.",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=400&q=80",
    youtubeUrl: "https://youtube.com/@rangga_code",
    downloadFile: "/scgratis/bot-wa-starter.zip",
    version: "1.2.0",
    fileSize: "3.5 MB",
    category: "Bot",
    uploadDate: "15 Jan 2025"
  },
  {
    id: 2,
    title: "Landing Page Template",
    description: "Template landing page responsive dengan HTML, CSS, dan JavaScript. Desain modern dan mudah dikustomisasi untuk berbagai kebutuhan.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&q=80",
    youtubeUrl: "https://youtube.com/@rangga_code",
    downloadFile: "/scgratis/landing-page-template.zip",
    version: "2.0.1",
    fileSize: "1.8 MB",
    category: "Website",
    uploadDate: "20 Feb 2025"
  },
  {
    id: 3,
    title: "Auto Reply Bot Telegram",
    description: "Script auto reply bot Telegram dengan fitur dasar. Support perintah custom dan bisa dijalankan di server hosting.",
    image: "https://images.unsplash.com/photo-1633675254053-d96c7668c3b8?w=400&q=80",
    youtubeUrl: "https://youtube.com/@rangga_code",
    downloadFile: "/scgratis/auto-reply-telegram.zip",
    version: "1.0.3",
    fileSize: "2.1 MB",
    category: "Bot",
    uploadDate: "5 Mar 2025"
  },
  {
    id: 4,
    title: "Portfolio Website Template",
    description: "Template portfolio website untuk developer atau desainer. Dilengkapi animasi smooth dan layout yang eye-catching.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&q=80",
    youtubeUrl: "https://youtube.com/@rangga_code",
    downloadFile: "/scgratis/portfolio-template.zip",
    version: "1.5.0",
    fileSize: "2.4 MB",
    category: "Website",
    uploadDate: "12 Apr 2025"
  },
  {
    id: 5,
    title: "Discord Bot Basic",
    description: "Script bot Discord dengan fitur moderasi, welcome message, dan command handler. Mudah dipasang dan dikembangkan.",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&q=80",
    youtubeUrl: "https://youtube.com/@rangga_code",
    downloadFile: "/scgratis/discord-bot-basic.zip",
    version: "1.1.2",
    fileSize: "4.0 MB",
    category: "Bot",
    uploadDate: "28 Mei 2025"
  },
  {
    id: 6,
    title: "E-Commerce Simple Script",
    description: "Script toko online sederhana dengan keranjang belanja, checkout, dan manajemen produk. Full responsive design.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80",
    youtubeUrl: "https://youtube.com/@rangga_code",
    downloadFile: "/scgratis/ecommerce-simple.zip",
    version: "2.1.0",
    fileSize: "5.2 MB",
    category: "Website",
    uploadDate: "10 Jun 2025"
  }
];

// Settings for free scripts page
export const scriptSettings = {
  pageTitle: "Script Gratis",
  pageDescription: "Kumpulan script gratis dari Rangga Code. Download, pelajari, dan kembangkan!",
  downloadNote: "Semua script gratis untuk digunakan. Support dan update terbatas.",
  youtubeChannel: "https://youtube.com/@rangga_code"
};
