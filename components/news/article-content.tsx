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
        {/* Category Badge */}
        <div className="mb-4">
          <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded">
            HUKUM
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight mb-4 text-balance">
          KADIN Dukung Maksimal Program MBG dan KDKMP: Peluang UMKM Besar, Tantangan Harga dan Implementasi Jadi Sorotan
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

        {/* Share Buttons */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-sm font-medium text-muted-foreground">Bagikan:</span>
          <button className="p-2 bg-[#1877f2] text-white rounded-full hover:opacity-90 transition-opacity">
            <Facebook className="w-4 h-4" />
          </button>
          <button className="p-2 bg-[#1da1f2] text-white rounded-full hover:opacity-90 transition-opacity">
            <Twitter className="w-4 h-4" />
          </button>
          <button className="p-2 bg-muted text-muted-foreground rounded-full hover:bg-muted/80 transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none text-foreground">
          <p className="text-lg leading-relaxed mb-6">
            Jakarta, 18 Maret 2026 – Dalam upaya memperkuat ekosistem Usaha Mikro, Kecil, dan Menengah (UMKM) serta koperasi di Indonesia, Kamar Dagang dan Industri (KADIN) memainkan peran sentral dalam program pemerintah Masyarakat Berdaya Gizi (MBG) dan Koperasi Desa Kreatif Mandiri Produktif (KDKMP). Hal ini terungkap dari hasil pertanyaan mendalam terhadap Raden Tedy, Kepala Badan Pengembangan UMKM dan Koperasi KADIN.

            Program MBG, yang dirancang untuk memberdayakan masyarakat melalui aspek gizi dan ekonomi, mendapat mandat khusus dari pemerintah bagi KADIN. Organisasi swasta terbesar ini ditugaskan menyusun acuan Standar Sapras Pendukung Gizi (SSPG) serta Standar Operasional Prosedur (SOP) terkait implementasi MBG. Tujuannya jelas: menciptakan kerangka kerja yang lebih terstruktur, efektif, dan berstandar jelas di tingkat lapangan. Menurut Raden Tedy, penyusunan ini krusial karena program pemerintah sering kali terhambat oleh kurangnya pedoman operasional yang konkret. Dengan SSPG dan SOP, pelaku UMKM diharapkan bisa menjalankan program tanpa kebingungan, sehingga manfaatnya tepat sasaran. Ini bukan sekadar dokumen administratif, melainkan fondasi bagi keberlanjutan program nasional yang melibatkan jutaan pelaku usaha kecil.

            Secara keseluruhan, MBG dinilai memiliki dampak positif signifikan terhadap perkembangan UMKM. Program ini berhasil membuka peluang usaha baru, terutama di sektor pangan dan gizi, yang selama ini jadi tulang punggung ekonomi rakyat. Aktivitas ekonomi di tingkat masyarakat meningkat, dengan UMKM yang ikut serta melaporkan peningkatan omset dan jangkauan pasar. Misalnya, inisiatif distribusi produk gizi sehat melalui jaringan UMKM telah menciptakan rantai pasok baru, di mana pedagang kecil bisa menjual barang bernilai tambah seperti makanan fortifikasi atau produk organik lokal. Dampaknya, tidak hanya UMKM yang untung, tapi juga masyarakat yang mendapat akses lebih baik terhadap nutrisi berkualitas. Raden Tedy menekankan bahwa MBG telah menjadi katalisator pertumbuhan ekonomi bawah, sejalan dengan target pemerintah untuk inklusi finansial UMKM hingga 90% pada 2026.

            Namun, implementasi MBG di lapangan belum sepenuhnya optimal. Ditemukan oknum-oknum tertentu yang memanfaatkan program untuk kepentingan pribadi, seperti penyelewengan dana atau distribusi tidak merata. Faktor ini menjadi penyebab utama berbagai kekurangan, termasuk lambatnya penyerapan anggaran dan ketidakadilan akses bagi UMKM di daerah terpencil. Kekurangan ini bukan hanya menggerus kepercayaan publik, tapi juga menghambat pencapaian target nasional. KADIN, melalui perannya dalam SSPG-SOP, berupaya membersihkan celah ini dengan mekanisme pengawasan yang lebih ketat. Tanpa penanganan tegas, potensi MBG sebagai pendorong ekonomi bisa terbuang sia-sia.

            Salah satu dampak paling nyata dari MBG adalah kenaikan harga bahan pokok penting (bapokting). Lonjakan permintaan (demand) yang signifikan, didorong oleh peningkatan aktivitas UMKM dan konsumsi masyarakat, bertemu dengan ketersediaan pasokan (supply) yang masih terbatas. Komoditas seperti beras, minyak goreng, gula, dan telur mengalami inflasi harga hingga 10-15% di beberapa wilayah, menurut pantauan awal. Kondisi ini dirasakan luas oleh masyarakat, terutama rumah tangga berpenghasilan rendah, yang budget belanja harian terganggu. Fenomena ini mengingatkan pada dinamika pasar klasik: stimulus permintaan tanpa penguatan rantai pasok hanya picu inflasi sementara. Pemerintah dan KADIN perlu intervensi cepat, seperti diversifikasi sumber pasok impor atau subsidi targeted, agar manfaat MBG tak berbalik jadi beban sosial.
            Selain MBG, program KDKMP menjadi perhatian utama pemerintah untuk revitalisasi koperasi desa. Kementerian Pertahanan (Kemhan) melakukan rekrutmen besar-besaran sebanyak 30.000 orang sebagai pendamping KDKMP di seluruh Indonesia. Angka ini menunjukkan komitmen nasional untuk menjangkau ribuan desa, dari Sabang hingga Merauke. KADIN merespons dengan membentuk Satuan Tugas (Satgas) KDKMP, yang bertugas koordinasi dan pendampingan langsung di daerah. Peran ini strategis, karena KADIN punya jaringan luas dengan pelaku usaha, memastikan program tak hanya birokratis tapi juga praktis. Satgas akan jadi jembatan antara kebijakan pusat dan realitas lokal, membantu koperasi desa bangkit dari keterpurukan pasca-pandemi.

            Para rekrutan pendamping KDKMP akan menjalani pelatihan khusus yang komprehensif. Fokusnya pada literasi, pemahaman, dan sosialisasi sistem serta praktik berkoperasi modern. Materi mencakup manajemen keuangan koperasi, digitalisasi operasional, hingga pemasaran digital. Dengan bekal ini, pendamping diharapkan bisa edukasi masyarakat desa, sehingga koperasi berjalan lebih baik dan berkelanjutan. Bayangkan ribuan desa di mana warga paham simpan pinjam berbasis koperasi, produksi bersama, dan distribusi adil—ini resep mengurangi kemiskinan struktural. Pelatihan bukan formalitas, tapi investasi jangka panjang untuk kemandirian ekonomi pedesaan.

            Sebagai puncak dukungan, KADIN mengembangkan aplikasi "Desapedia" untuk KDKMP. Saat ini, aplikasi ini dalam tahap uji coba di Kalimantan Timur, wilayah strategis dengan potensi desa digital tinggi. Desapedia dirancang sebagai platform layanan digital terintegrasi, mendukung aktivitas ekonomi masyarakat desa secara menyeluruh. Fitur unggulan termasuk toko sembako online, yang mudahkan akses kebutuhan pokok tanpa harus ke kota; serta layanan ojek online (motor dan mobil) untuk tingkatkan mobilitas dan logistik. Pengguna bisa pesan barang, bayar digital, dan lacak pengiriman real-time, mirip super app urban tapi disesuaikan desa.

            Melalui Desapedia, KADIN harapkan tercipta ekosistem ekonomi desa modern, terintegrasi, dan mudah diakses. Ini bukan gimmick, tapi transformasi: koperasi desa jadi pusat transaksi digital, UMKM lokal terhubung pasar nasional, dan masyarakat nikmati kemudahan ala kota. Uji coba di Kaltim jadi pembuktian konsep, dengan rencana ekspansi nasional jika sukses. Integrasi dengan MBG juga potensial, di mana produk gizi UMKM bisa dijual via app ini.

            Secara keseluruhan, Raden Tedy gambarkan optimisme KADIN terhadap MBG dan KDKMP sebagai pilar ekonomi inklusif. Dengan SSPG-SOP, Satgas, pelatihan, dan Desapedia, program ini bisa jadi game changer bagi UMKM dan koperasi. Tantangan seperti oknum dan inflasi bapokting harus diatasi kolaboratif antara pemerintah, KADIN, dan swasta. Di tengah target pertumbuhan ekonomi 5-6% tahun ini, inisiatif ini strategis untuk dorong IHSG dan stabilitas moneter. KADIN ajak semua pihak sinergi, agar desa berdaya dan UMKM berjaya—menuju Indonesia Emas 2045.
          </p>

        </div>
      </div>
    </article>
  )
}
