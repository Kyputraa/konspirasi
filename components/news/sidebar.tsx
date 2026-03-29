import { TrendingUp, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const popularNews = [
  {
    id: 1,
    title: "TAUD Nilai Copot Kepala BAIS Belum Sentuh Substansi Kasus Andrie Yunus",
    category: "Politik",
    time: "2 jam lalu",
    image: "/images/news-1.jpg",
  },
  {
    id: 2,
    title: "ISRI Yogyakarta Desak Panglima TNI Mundur, Nilai Kasus Penyiraman Aktivis sebagai Ancaman Demokrasi",
    category: "Nasional",
    time: "3 jam lalu",
    image: "/images/news-2.jpg",
  },
  {
    id: 3,
    title: "Wakapolri Turun Langsung ke Bakauheni, Cek Jalur Mudik dan Antisipasi Antrean",
    category: "Nasional",
    time: "4 jam lalu",
    image: "/images/news-3.jpg",
  },
  {
    id: 4,
    title: "Perang yang Kotor: Ketika Ambisi Kekuasaan Mengorbankan Warga Sipil Tak Berdosa",
    category: "Opini",
    time: "5 jam lalu",
    image: "/images/news-4.jpg",
  },
  {
    id: 5,
    title: "Bangun Budaya Ilmiah, Polri Tambah 7 Pusat Studi",
    category: "Hukum",
    time: "6 jam lalu",
    image: "/images/news-5.jpg",
  },
]

const relatedNews = [
  {
    id: 1,
    title: "Revisi KUHAP dan RUU Kejaksaan Tuai Polemik, Siapa Sebenarnya Diuntungkan?",
    category: "Hukum",
  },
  {
    id: 2,
    title: "CBA Minta DPR Fokus Profesionalisme Polri, Bukan Tambah Kewenangan Kejaksaan",
    category: "Politik",
  },
  {
    id: 3,
    title: "Puan Maharani: DPR Belum Dapat Surpres Pembahasan RUU Polri",
    category: "Politik",
  },
]

export function Sidebar() {
  return (
    <aside className="space-y-6">
      {/* Popular News */}
      <div className="bg-card rounded-lg shadow-sm overflow-hidden">
        <div className="bg-primary text-primary-foreground px-4 py-3 flex items-center gap-2">
          <TrendingUp className="w-5 h-5" />
          <h2 className="font-bold">Berita Populer</h2>
        </div>
        <div className="divide-y divide-border">
          {popularNews.map((news, index) => (
            <Link
              key={news.id}
              href="#"
              className="flex gap-3 p-4 hover:bg-secondary/50 transition-colors group"
            >
              <span className="text-2xl font-bold text-primary/30 group-hover:text-primary transition-colors">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-medium text-primary">{news.category}</span>
                <h3 className="text-sm font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                  {news.title}
                </h3>
                <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>{news.time}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Related News */}
      <div className="bg-card rounded-lg shadow-sm overflow-hidden">
        <div className="bg-accent text-accent-foreground px-4 py-3">
          <h2 className="font-bold">Baca Juga</h2>
        </div>
        <div className="p-4 space-y-4">
          {relatedNews.map((news) => (
            <Link
              key={news.id}
              href="#"
              className="block group"
            >
              <span className="text-xs font-medium text-accent">{news.category}</span>
              <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                {news.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>

      {/*/!* Advertisement Placeholder *!/*/}
      {/*<div className="bg-card rounded-lg shadow-sm overflow-hidden">*/}
      {/*  <div className="aspect-square bg-muted flex items-center justify-center">*/}
      {/*    <div className="text-center p-4">*/}
      {/*      <p className="text-sm text-muted-foreground">Iklan</p>*/}
      {/*      <p className="text-xs text-muted-foreground mt-1">300 x 300</p>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/* Social Media */}
      <div className="bg-card rounded-lg shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-border">
          <h2 className="font-bold text-foreground">Ikuti Kami</h2>
        </div>
        <div className="p-4 grid grid-cols-3 gap-2">
          {[
            { name: "Facebook", color: "bg-[#1877f2]", count: "12.5K" },
            { name: "Twitter", color: "bg-[#1da1f2]", count: "8.3K" },
            { name: "Instagram", color: "bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af]", count: "15.2K" },
            { name: "YouTube", color: "bg-[#ff0000]", count: "5.1K" },
            { name: "TikTok", color: "bg-foreground", count: "20.8K" },
            { name: "Telegram", color: "bg-[#0088cc]", count: "3.2K" },
          ].map((social) => (
            <Link
              key={social.name}
              href="#"
              className={`${social.color} text-white text-center py-3 rounded hover:opacity-90 transition-opacity`}
            >
              <p className="text-xs font-medium">{social.name}</p>
              <p className="text-xs opacity-80">{social.count}</p>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}
