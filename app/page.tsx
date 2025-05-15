import { JuiceCarousel } from "@/components/juice-carousel"
import { FloatingChat } from "@/components/floating-chat"
import { Navbar } from "@/components/navbar"
import { CompanySection } from "@/components/company-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center relative overflow-hidden">
        {/* Subtle background illustration */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Light mode: faint orange circle */}
          <svg width="400" height="400" className="absolute left-[-100px] top-[-100px] opacity-10 block dark:hidden" viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="200" fill="#FFEDD5" />
          </svg>
          {/* Dark mode: subtle dark circle */}
          <svg width="400" height="400" className="absolute left-[-100px] top-[-100px] opacity-10 hidden dark:block" viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="200" fill="#27272a" />
          </svg>
          {/* Light mode: faint green ellipse */}
          <svg width="200" height="200" className="absolute right-[-60px] bottom-[-60px] opacity-10 block dark:hidden" viewBox="0 0 200 200" fill="none">
            <ellipse cx="100" cy="100" rx="100" ry="60" fill="#DCFCE7" />
          </svg>
          {/* Dark mode: subtle blue/gray ellipse */}
          <svg width="200" height="200" className="absolute right-[-60px] bottom-[-60px] opacity-10 hidden dark:block" viewBox="0 0 200 200" fill="none">
            <ellipse cx="100" cy="100" rx="100" ry="60" fill="#334155" />
          </svg>
        </div>
        <div className="container mx-auto px-4 py-12 md:py-24 z-10 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center w-full max-w-2xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-space-grotesk text-gray-800 dark:text-gray-100 leading-tight mb-1" style={{letterSpacing: '0.01em'}}>
              Juice. Just Better
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg font-space-grotesk mt-2 mb-4 text-center max-w-xl">
              Discover our collection of fresh, natural juices that will energize your day
            </p>
            <div className="w-full flex flex-col items-center mt-2">
              <JuiceCarousel />
            </div>
          </div>
        </div>
        {/* SVG wave divider */}
        <div className="w-full flex justify-center z-10 -mt-8 mb-8">
          {/* Removed the horizontal line */}
        </div>

        <CompanySection />
      </main>

      <FloatingChat />
      <Footer />
    </div>
  )
}
