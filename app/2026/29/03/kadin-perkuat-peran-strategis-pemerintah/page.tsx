import { Header } from "@/components/news/header"
import { ArticleContent } from "@/components/news/article-content"
import { Sidebar } from "@/components/news/sidebar"
import { Footer } from "@/components/news/footer"

export default function Home() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Breadcrumb */}
            <div className="max-w-6xl mx-auto px-4 py-4">
                <nav className="text-sm text-muted-foreground">
                    <ol className="flex items-center gap-2">
                        <li>
                            <a href="#" className="hover:text-primary transition-colors">Beranda</a>
                        </li>
                        <li>/</li>
                        <li>
                            <a href="#" className="hover:text-primary transition-colors">Hukum</a>
                        </li>
                        <li>/</li>
                        <li className="text-foreground font-medium truncate max-w-xs">
                            IDE Komitmen Dorong Sistem Hukum Demokratis
                        </li>
                    </ol>
                </nav>
            </div>

            {/* Main Content */}
            <main className="max-w-6xl mx-auto px-4 pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Article */}
                    <div className="lg:col-span-2">
                        <ArticleContent />
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <Sidebar />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
