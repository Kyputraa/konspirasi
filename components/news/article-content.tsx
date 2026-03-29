import { Calendar, User, Clock, Share2, Facebook, Twitter } from "lucide-react"
import Image from "next/image"

export function ArticleContent() {
  return (
      <article className="bg-card rounded-lg shadow-sm overflow-hidden">

        {/* Featured Image */}
        <div className="relative aspect-video bg-muted">
          <Image
              src="/images/article-hero.jpg"
              alt="Diskusi publik IDE tentang reformasi hukum KUHAP dan Polri"
              fill
              className="object-cover"
              priority
          />
        </div>

        <div className="p-6 lg:p-8">

          {/* Category */}
          <div className="mb-4">
          <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded">
            HUKUM
          </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl lg:text-3xl font-bold leading-tight mb-4">
            KADIN Perkuat Peran Strategis Pemerintah pada Program MBG dan KDKMP demi UMKM Nasional
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6 pb-6 border-b border-border">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>Redaktur KonspirasiNews</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>18 Maret 2026</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>5 menit baca</span>
            </div>
          </div>

          {/* Share */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-medium text-muted-foreground">Bagikan:</span>

            <button className="p-2 bg-[#1877f2] text-white rounded-full hover:opacity-90">
              <Facebook className="w-4 h-4" />
            </button>

            <button className="p-2 bg-[#1da1f2] text-white rounded-full hover:opacity-90">
              <Twitter className="w-4 h-4" />
            </button>

            <button className="p-2 bg-muted text-muted-foreground rounded-full hover:bg-muted/80">
              <Share2 className="w-4 h-4" />
            </button>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="leading-relaxed mb-6">
              Jakarta, 18 Maret 2026 – KADIN Indonesia Bidang Kewirausahaan dan UMKM Pemerintah Indonesia terus menggelorakan program Masyarakat Berdaya Gizi (MBG) dan Koperasi Desa Kreatif Mandiri Produktif (KDKMP) sebagai pilar utama pemberdayaan UMKM serta koperasi...
            </p>

            <p className="leading-relaxed mb-6">
              Program MBG menerima mandat khusus bagi KADIN untuk menyusun Standar Sapras Pendukung Gizi (SSPG) serta SOP implementasinya. Kerangka ini bertujuan menciptakan pelaksanaan yang terstruktur dan efektif di lapangan.
            </p>

            <p className="leading-relaxed mb-6">
              MBG membawa dampak positif bagi perkembangan UMKM dengan membuka peluang usaha baru, khususnya di sektor pangan dan gizi sebagai tulang punggung ekonomi rakyat.
            </p>

            <p className="leading-relaxed mb-6">
              Meski demikian, implementasi di lapangan belum optimal dan masih ditemukan penyalahgunaan program oleh oknum tertentu.
            </p>

            <p className="leading-relaxed">
              Kesimpulannya, program MBG dan KDKMP berpotensi menjadi pilar utama pertumbuhan ekonomi inklusif menuju Indonesia Emas 2045.
            </p>
          </div>

        </div>
      </article>
  )
}