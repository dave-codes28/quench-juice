"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"
import { juices } from "@/lib/juices"
import Image from "next/image"

export function JuiceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 })
  const carouselRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const isMobile = useMobile()

  // Update carousel size on window resize
  useEffect(() => {
    const updateSize = () => {
      if (carouselRef.current) {
        setCarouselSize({
          width: carouselRef.current.offsetWidth,
          height: carouselRef.current.offsetHeight,
        })
      }
    }

    // Initial size
    updateSize()

    // Add resize listener
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? juices.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === juices.length - 1 ? 0 : prevIndex + 1))
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.clientX)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    const currentX = e.clientX
    const diff = currentX - startX
    setTranslateX(diff)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const currentX = e.touches[0].clientX
    const diff = currentX - startX
    setTranslateX(diff)
  }

  const handleDragEnd = () => {
    if (!isDragging) return

    setIsDragging(false)

    // If dragged more than 15% of carousel width, change slide
    const threshold = carouselSize.width * 0.15
    if (Math.abs(translateX) > threshold) {
      if (translateX > 0) {
        handlePrev()
      } else {
        handleNext()
      }
    }

    setTranslateX(0)
  }

  const navigateToJuice = (id: string) => {
    router.push(`/juice/${id}`)
  }

  // Determine image size based on screen size and juice type
  const getImageSize = () => {
    const isGingerShot = juices[currentIndex].id === 'ginger-shot'
    if (isGingerShot) {
      if (isMobile) {
        return {
          container: "w-32 h-32",
          image: "w-32 h-32",
        }
      } else if (carouselSize.width < 640) {
        return {
          container: "w-40 h-40",
          image: "w-40 h-40",
        }
      } else {
        return {
          container: "w-48 h-48 md:w-56 md:h-56",
          image: "w-48 h-48 md:w-56 md:h-56",
        }
      }
    }
    if (isMobile) {
      return {
        container: "w-56 h-56",
        image: "w-56 h-56",
      }
    } else if (carouselSize.width < 640) {
      return {
        container: "w-64 h-64",
        image: "w-64 h-64",
      }
    } else {
      return {
        container: "w-80 h-80 md:w-96 md:h-96",
        image: "w-80 h-80 md:w-96 md:h-96",
      }
    }
  }

  const sizes = getImageSize()

  return (
    <div className="relative overflow-hidden flex flex-col items-center justify-center w-full" ref={carouselRef}>
      <div
        className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto transition-transform duration-300 ease-out"
        style={{
          transform: isDragging ? `translateX(${translateX}px)` : "translateX(0)",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleDragEnd}
      >
        <div className="w-full flex flex-col items-center">
          <div
            className={cn(
              sizes.container,
              "flex items-center justify-center mb-0 transition-all duration-500 cursor-pointer",
            )}
            onClick={() => navigateToJuice(juices[currentIndex].id)}
          >
            <div className={cn(sizes.image, "relative flex items-center justify-center")}>
              <Image
                src={juices[currentIndex].image || "/placeholder.svg"}
                alt={juices[currentIndex].name}
                width={400}
                height={700}
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                priority
              />
            </div>
          </div>

          <h2 className={cn("text-2xl sm:text-3xl font-medium mt-2 mb-1 text-gray-800 dark:text-gray-100", juices[currentIndex].accent)}>
            {juices[currentIndex].name}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-center max-w-md mb-2 px-4">
            {juices[currentIndex].description}
          </p>

          <Button
            onClick={() => {
              window.dispatchEvent(new Event('open-chat'))
            }}
            className={cn(
              "bg-white dark:bg-white text-gray-900 dark:text-gray-900 font-semibold text-lg px-8 py-3 rounded-lg shadow-lg transition-all duration-200 mt-2 w-full max-w-xs sm:max-w-sm md:max-w-md border-2 border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-200",
            )}
            style={{letterSpacing: '0.02em'}}
            variant="outline"
          >
            Order Now
          </Button>
          <Button
            onClick={() => {
              window.dispatchEvent(new Event('open-chat'))
            }}
            className={cn(
              "bg-white dark:bg-white text-green-700 dark:text-green-700 font-semibold text-base px-8 py-2 rounded-lg shadow transition-all duration-200 mt-2 w-full max-w-xs sm:max-w-sm md:max-w-md border border-green-300 dark:border-green-700 hover:bg-gray-50 dark:hover:bg-gray-200",
            )}
            style={{letterSpacing: '0.01em'}}
            variant="outline"
            data-testid="chat-trigger"
          >
            Chat with Sussan
          </Button>
        </div>
      </div>

      {/* Static nav buttons */}
      <Button
        variant="ghost"
        size={isMobile ? "default" : "icon"}
        className="fixed md:absolute left-4 md:left-0 top-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white/90 dark:hover:bg-gray-700/90 rounded-full shadow-md z-20"
        style={{transform: 'translateY(-50%)'}}
        onClick={handlePrev}
        aria-label="Previous juice"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </Button>

      <Button
        variant="ghost"
        size={isMobile ? "default" : "icon"}
        className="fixed md:absolute right-4 md:right-0 top-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white/90 dark:hover:bg-gray-700/90 rounded-full shadow-md z-20"
        style={{transform: 'translateY(-50%)'}}
        onClick={handleNext}
        aria-label="Next juice"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </Button>

      {/* Dots indicator */}
      <div className="flex justify-center items-center mt-6 space-x-2 w-full max-w-xs mx-auto">
        {juices.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-gray-800 dark:bg-gray-200 w-4" : "bg-gray-300 dark:bg-gray-700"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to juice ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
