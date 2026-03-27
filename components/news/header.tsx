"use client"

import { Search, Menu, X } from "lucide-react"
import { useState } from "react"
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

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between text-sm">
          <span>Selasa, 27 Mei 2025</span>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:underline">Tentang Kami</Link>
            <Link href="#" className="hover:underline">Kontak</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary text-primary-foreground font-bold text-2xl px-3 py-1 rounded">
              K
            </div>
            <div>
              <span className="text-2xl font-bold text-foreground">Konspirasi</span>
              <span className="text-2xl font-bold text-primary">News</span>
              <p className="text-xs text-muted-foreground">Portal Berita Independen</p>
            </div>
          </Link>

          {/* Search - Desktop */}
          <div className="hidden md:flex items-center gap-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Cari berita..."
                className="pl-10 pr-4 py-2 border border-border rounded-lg bg-secondary focus:outline-none focus:ring-2 focus:ring-primary/50 w-64"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t border-border bg-secondary">
        <div className="max-w-6xl mx-auto px-4">
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="p-4">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Cari berita..."
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-secondary focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            </div>
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground rounded transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}
