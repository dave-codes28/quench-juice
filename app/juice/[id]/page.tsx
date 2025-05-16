"use client"

import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FloatingChat } from "@/components/floating-chat"
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useEffect, useState } from "react"
import { notFound, useRouter } from "next/navigation"
import Image from "next/image"
import { juices } from "@/lib/juices"

export default function JuicePage({ params }: { params: { id: string } }) {
  const juice = juices.find((j) => j.id === params.id)
  const router = useRouter()
  const currentIndex = juices.findIndex((j) => j.id === params.id)
  const prevJuice = juices[(currentIndex - 1 + juices.length) % juices.length]
  const nextJuice = juices[(currentIndex + 1) % juices.length]

  if (!juice) {
    notFound()
  }

  const [imageSize, setImageSize] = useState({ container: "w-64 h-64", inner: "w-56 h-56" })

  useEffect(() => {
    const updateImageSize = () => {
      if (juice.id === 'ginger-shot') {
        if (window.innerWidth < 768) {
          setImageSize({ container: "w-40 h-40", inner: "w-36 h-36" })
        } else {
          setImageSize({ container: "w-64 h-64 xl:w-80 xl:h-80", inner: "w-60 h-60 xl:w-72 xl:h-72" })
        }
      } else {
        if (window.innerWidth < 768) {
          setImageSize({ container: "w-64 h-64", inner: "w-56 h-56" })
        } else {
          setImageSize({ container: "w-[28rem] h-[28rem] xl:w-[32rem] xl:h-[32rem]", inner: "w-[24rem] h-[24rem] xl:w-[28rem] xl:h-[28rem]" })
        }
      }
    }

    updateImageSize()
    window.addEventListener("resize", updateImageSize)
    return () => window.removeEventListener("resize", updateImageSize)
  }, [])

  return (
    <div className={`min-h-screen flex flex-col bg-white dark:bg-gray-950`}>
      <Navbar />
      <main className={cn("flex-grow", juice.color)}>
        <div className="container mx-auto px-4 py-6 sm:py-8 relative bg-white/80 dark:bg-gray-950 rounded-2xl shadow-lg">
          {/* Back button */}
          <Link href="#" className="absolute top-4 right-4 z-10" onClick={e => { e.preventDefault(); if (window.history.length > 2) { router.back(); } else { router.push('/products'); } }}>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white/90 dark:hover:bg-gray-700/90 shadow-md"
              aria-label="Back to products"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </Link>

          <div className="max-w-4xl mx-auto relative">
            {/* Carousel-style navigation buttons with more spacing */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex absolute -left-12 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white/90 dark:hover:bg-gray-700/90 rounded-full shadow-md z-20"
              onClick={() => router.push(`/juice/${prevJuice.id}`)}
              aria-label="Previous juice"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex absolute -right-12 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white/90 dark:hover:bg-gray-700/90 rounded-full shadow-md z-20"
              onClick={() => router.push(`/juice/${nextJuice.id}`)}
              aria-label="Next juice"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            <div className="flex flex-col md:flex-row gap-8 md:items-center">
              {/* Image top and centered on mobile, left on desktop */}
              <div className="w-full flex justify-center md:block md:w-1/2 mb-6 md:mb-0">
                <div className={imageSize.container + " mx-auto md:mx-0"}>
                  <div className={imageSize.inner + " relative flex items-center justify-center"}>
                    <Image
                      src={juice.image}
                    alt={juice.name}
                      fill
                      className="object-contain"
                      priority
                  />
                  </div>
                </div>
              </div>
              {/* Details below image on mobile, right on desktop */}
              <div className="w-full md:w-1/2 flex flex-col">
                <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-center md:text-left font-pt-sans-caption tracking-tight">{juice.name}</h1>
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-center md:text-left text-base sm:text-lg">{juice.description}</p>
                <div className="prose dark:prose-invert mb-8 mx-auto md:mx-0">
                  <p className="mb-6">{juice.details}</p>
                  <div className="mb-6">
                    <h3 className={`text-lg font-medium mb-2 ${juice.accent}`}>Health Benefits</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {juice.healthBenefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
            </div>
                  <div className="mb-6">
                    <h3 className={`text-lg font-medium mb-2 ${juice.accent}`}>Nutrition Facts (per 250ml)</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {juice.nutritionFacts.map((fact, index) => (
                        <li key={index}>{fact}</li>
                      ))}
                    </ul>
                </div>
                  <div className="mb-6">
                    <h3 className={`text-lg font-medium mb-2 ${juice.accent}`}>Storage Instructions</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {juice.storage.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                  ))}
                </ul>
              </div>
                </div>
                <a
                  href="/order"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-white dark:bg-gray-800 border-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all ${juice.accent} border-${juice.accent.split("-")[1].split(" ")[0]} flex items-center justify-center rounded py-2 px-4 font-bold`}
                  style={{marginTop: '1rem', marginBottom: '1rem'}}
                >
                  Order Now
                </a>

                {/* Mobile navigation buttons below details */}
                <div className="flex md:hidden justify-between mt-8 gap-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => router.push(`/juice/${prevJuice.id}`)}
                    aria-label="Previous juice"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => router.push(`/juice/${nextJuice.id}`)}
                    aria-label="Next juice"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FloatingChat />
      </main>
      <Footer />
    </div>
  )
}
