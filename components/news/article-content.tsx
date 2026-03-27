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
          IDE Komitmen Dorong Sistem Hukum Demokratis melalui Revisi KUHAP dan RUU Polri
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6 pb-6 border-b border-border">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>Redaktur KonspirasiNews</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>27 Mei 2025</span>
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
            <strong>Jakarta</strong> – Institute of Democracy and Education (IDE) kembali menegaskan komitmennya dalam mendorong reformasi hukum nasional melalui penyelenggaraan diskusi publik bertajuk <em>&quot;Mendorong Reformasi Hukum KUHAP dan Polri&quot;</em> yang berlangsung pada Selasa, 27 Mei 2025, di Caffe Setahun Kemarin, Jakarta Pusat.
          </p>

          <p className="leading-relaxed mb-6">
            Kegiatan ini menghadirkan dua narasumber yang kompeten dan aktif dalam isu-isu demokrasi dan hukum, yaitu <strong>Faiz Naufal Alfarisi, S.H.</strong>, akademisi hukum dari Nalar Politik Kawula Indonesia, dan <strong>Juwita Tri Utami, S.H.</strong>, praktisi hukum dari LBH Dharma Loka Nusantara. Diskusi dipandu oleh moderator Inda Hudiria.
          </p>

          {/* Quote Block 1 */}
          <blockquote className="border-l-4 border-primary bg-secondary/50 p-4 my-6 italic">
            <p className="mb-2">
              &quot;Revisi KUHAP harus menjadi prioritas untuk menjamin proses hukum yang adil, transparan, dan bebas dari penyalahgunaan wewenang. KUHAP yang baru juga harus merespons tantangan era digital serta prinsip keadilan restoratif.&quot;
            </p>
            <cite className="text-sm text-muted-foreground not-italic">— Faiz Naufal Alfarisi, S.H.</cite>
          </blockquote>

          <p className="leading-relaxed mb-6">
            Dalam diskusi tersebut, Faiz Naufal menyoroti pentingnya revisi KUHAP (Kitab Undang-Undang Hukum Acara Pidana) sebagai upaya pembaruan hukum acara pidana yang masih menyimpan berbagai persoalan mendasar. Ia menekankan bahwa KUHAP saat ini belum mampu secara maksimal menjamin prinsip keadilan prosedural dan perlindungan terhadap hak tersangka, korban, serta saksi.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">Urgensi Pembaruan RUU Polri</h2>

          <p className="leading-relaxed mb-6">
            Sementara itu, Juwita Tri Utami menyoroti urgensi pembaruan RUU Polri guna membentuk institusi kepolisian yang lebih demokratis dan akuntabel. Ia menekankan pentingnya pembatasan kewenangan kepolisian yang selama ini terlalu luas tanpa pengawasan yang memadai.
          </p>

          {/* Quote Block 2 */}
          <blockquote className="border-l-4 border-accent bg-secondary/50 p-4 my-6 italic">
            <p className="mb-2">
              &quot;Reformasi RUU Polri perlu dilakukan untuk menciptakan mekanisme pengawasan eksternal yang independen serta memperkuat fungsi pelayanan masyarakat. Budaya kekerasan dan impunitas harus diakhiri dengan langkah struktural dan kultural yang nyata.&quot;
            </p>
            <cite className="text-sm text-muted-foreground not-italic">— Juwita Tri Utami, S.H.</cite>
          </blockquote>

          <h2 className="text-xl font-bold mt-8 mb-4">Dukungan Penuh dari IDE</h2>

          <p className="leading-relaxed mb-6">
            Ketua IDE, <strong>Herry Ahmad Gunawan</strong>, dalam pernyataannya menyampaikan dukungan penuh terhadap agenda revisi KUHAP dan RUU Polri sebagai langkah strategis menuju sistem hukum yang lebih adil, demokratis, dan menjunjung tinggi hak asasi manusia.
          </p>

          <blockquote className="border-l-4 border-primary bg-secondary/50 p-4 my-6 italic">
            <p className="mb-2">
              &quot;IDE mendukung sepenuhnya upaya pemerintah dan DPR dalam membahas RUU Polri dan revisi KUHAP. Ini adalah momentum penting untuk membangun sistem peradilan pidana yang berkeadilan dan akuntabel. Reformasi ini akan memperkuat supremasi hukum sekaligus kepercayaan publik terhadap aparat penegak hukum.&quot;
            </p>
            <cite className="text-sm text-muted-foreground not-italic">— Herry Ahmad Gunawan, Ketua IDE</cite>
          </blockquote>

          <p className="leading-relaxed mb-6">
            Diskusi ini dihadiri oleh berbagai elemen masyarakat, termasuk mahasiswa dari Forum Mahasiswa Merdeka yang turut memberikan pandangan dan masukan. Suasana dialog berlangsung terbuka dan konstruktif, memperkaya perspektif publik terhadap arah pembaruan hukum nasional.
          </p>

          <p className="leading-relaxed mb-6">
            IDE menegaskan bahwa reformasi KUHAP dan RUU Polri bukan semata perubahan teknis, melainkan bagian dari transformasi mendalam sistem hukum Indonesia menuju keadilan yang substantif, inklusif, dan modern.
          </p>
        </div>

        {/* Tags */}
        <div className="mt-8 pt-6 border-t border-border">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">Tags:</span>
            {["KUHAP", "RUU Polri", "Reformasi Hukum", "IDE", "Demokrasi", "HAM"].map((tag) => (
              <span
                key={tag}
                className="inline-block bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full hover:bg-muted transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
