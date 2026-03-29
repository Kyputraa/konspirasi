import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background mt-12">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary text-primary-foreground font-bold text-xl px-2 py-0.5 rounded">
                K
              </div>
              <div>
                <span className="text-xl font-bold">Konspirasi</span>
                <span className="text-xl font-bold text-primary">News</span>
              </div>
            </div>
            <p className="text-sm text-background/70 mb-4">
              Portal berita independen yang menyajikan informasi terkini, akurat, dan berimbang seputar politik, hukum, dan demokrasi Indonesia.
            </p>
            <div className="space-y-2 text-sm text-background/70">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Jakarta Pusat, Indonesia</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+62 21 1234 5678</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>redaksi@konspirasinews.com</span>
              </div>
            </div>
          </div>

          {/* Kategori */}
          <div>
            <h3 className="font-bold text-lg mb-4">Kategori</h3>
            <ul className="space-y-2 text-sm text-background/70">
              {["Politik", "Hukum", "Ekonomi", "Nasional", "Internasional", "Opini", "Gaya Hidup"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tautan */}
          <div>
            <h3 className="font-bold text-lg mb-4">Tautan</h3>
            <ul className="space-y-2 text-sm text-background/70">
              {[
                "Tentang Kami",
                "Redaksi",
                "Pedoman Media Siber",
                "Kebijakan Privasi",
                "Syarat & Ketentuan",
                "Pasang Iklan",
                "Karir",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Berlangganan</h3>
            <p className="text-sm text-background/70 mb-4">
              Dapatkan berita terbaru langsung di email Anda.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Email Anda"
                className="w-full px-4 py-2 rounded bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-colors"
              >
                Berlangganan
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
            <p>© 2026 KonspirasiNews. Hak Cipta Dilindungi.</p>
            <p>Anggota Dewan Pers Indonesia</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
