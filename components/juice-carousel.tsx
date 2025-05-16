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
import { useOrderModal } from "@/components/order-modal-provider"
import { useCart } from "./cart-context"
import { CartPopup } from "./cart-popup"

export function JuiceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 })
  const carouselRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const isMobile = useMobile()
  const { openOrderModal } = useOrderModal()
  const { addToCart } = useCart()
  const [cartOpen, setCartOpen] = useState(false)

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
          container: "w-44 h-44",
          image: "w-44 h-44",
        }
      } else if (carouselSize.width < 640) {
        return {
          container: "w-56 h-56",
          image: "w-56 h-56",
        }
      } else {
        return {
          container: "w-64 h-64 md:w-80 md:h-80",
          image: "w-64 h-64 md:w-80 md:h-80",
        }
      }
    }
    if (isMobile) {
      return {
        container: "w-72 h-72",
        image: "w-72 h-72",
      }
    } else if (carouselSize.width < 640) {
      return {
        container: "w-80 h-80",
        image: "w-80 h-80",
      }
    } else {
      return {
        container: "w-[28rem] h-[28rem] md:w-[32rem] md:h-[32rem]",
        image: "w-[28rem] h-[28rem] md:w-[32rem] md:h-[32rem]",
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

          {/* Dots indicator - now above the plus button */}
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

          {/* Bigger orange plus button below dots */}
          <div className="flex w-full justify-center mt-4 mb-2">
            <button
              type="button"
              aria-label={`Add ${juices[currentIndex].name} to cart`}
              className="text-6xl font-bold text-orange-500 hover:text-orange-600 focus:outline-none"
              onClick={() => {
                addToCart({
                  id: juices[currentIndex].id,
                  name: juices[currentIndex].name,
                  image: juices[currentIndex].image,
                  price: juices[currentIndex].price,
                })
                setCartOpen(true)
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Chevron arrow navigation buttons */}
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 z-30 bg-white/80 dark:bg-gray-800/80 rounded-full p-1 shadow-md focus:outline-none"
        style={{cursor: 'pointer'}}
        aria-label="Previous juice"
        onClick={handlePrev}
      >
        <ChevronLeft className="h-6 w-6 text-gray-700 dark:text-gray-200" />
      </button>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 z-30 bg-white/80 dark:bg-gray-800/80 rounded-full p-1 shadow-md focus:outline-none"
        style={{cursor: 'pointer'}}
        aria-label="Next juice"
        onClick={handleNext}
      >
        <ChevronRight className="h-6 w-6 text-gray-700 dark:text-gray-200" />
      </button>

      <CartPopup
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        onBuy={() => {
          setCartOpen(false)
          openOrderModal()
        }}
      />
    </div>
  )
}
