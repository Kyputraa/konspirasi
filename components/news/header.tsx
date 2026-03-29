"use client"

import { Search, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

const navItems = [
  { name: "Beranda", href: "#" },
  { name: "Politik", href: "#" },
  { name: "Hukum", href: "#" },
  { name: "Ekonomi", href: "#" },
  { name: "Nasional", href: "#" },
  { name: "Internasional", href: "#" },
  { name: "Opini", href: "#" },
]

// tanggal sederhana (lebih clean)
function getDate() {
  return new Date().toLocaleDateString("id-ID", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [date, setDate] = useState("")
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    setDate(getDate())
  }, [])

  return (
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">

        {/* BREAKING NEWS TICKER */}
        <div className="bg-black text-white text-xs overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee gap-10 px-4 py-2">
            <span>🔥 Breaking: Isu politik terbaru hari ini</span>
            <span>📈 Ekonomi Indonesia mengalami perubahan signifikan</span>
            <span>🌍 Berita internasional paling hangat</span>
          </div>
        </div>

        {/* MAIN HEADER - CENTERED */}
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

          {/* LEFT */}
          <div className="flex items-center gap-3">
            <button
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
            <span className="text-xs text-muted-foreground hidden md:block">
            {date}
          </span>
          </div>

          {/* LOGO CENTER */}
          <Link href="/" className="text-center">
            <h1 className="text-2xl md:text-3xl font-black tracking-tight">
              Konspirasi<span className="text-primary">News</span>
            </h1>
            <p className="text-[10px] text-muted-foreground tracking-widest">
              INDEPENDENT MEDIA
            </p>
          </Link>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            <button onClick={() => setSearchOpen(!searchOpen)}>
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* EXPANDABLE SEARCH */}
        {searchOpen && (
            <div className="px-4 pb-4 max-w-6xl mx-auto">
              <input
                  type="text"
                  placeholder="Cari berita trending..."
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
        )}

        {/* NAVIGATION */}
        <nav className="border-t bg-white/80 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4">
            <ul className="hidden md:flex justify-center gap-6">
              {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                        href={item.href}
                        className="relative py-4 text-sm font-semibold group"
                    >
                      {item.name}
                      <span className="absolute left-0 bottom-2 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
                    </Link>
                  </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* MOBILE MENU FULLSCREEN */}
        {mobileMenuOpen && (
            <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center space-y-6 text-lg z-50">
              {navItems.map((item) => (
                  <Link key={item.name} href={item.href}>
                    {item.name}
                  </Link>
              ))}
            </div>
        )}
      </header>
  )
}