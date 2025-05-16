"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { juices } from "@/lib/juices"
import Image from "next/image"
import { FloatingChat } from "@/components/floating-chat"
import { useOrderModal } from "@/components/order-modal-provider"

export default function ProductsPage() {
  const { openOrderModal } = useOrderModal();
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <FloatingChat />
      <main className="flex-grow bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-light text-center mb-8 sm:mb-12">
            Our <span className="font-bold font-pt-sans-caption text-orange-500 dark:text-orange-400">Premium Juices</span>
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {juices.map((juice) => (
              <div
                key={juice.id}
                className={cn(
                  "rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg",
                  juice.color,
                )}
              >
                <div className="flex flex-col h-full">
                  <div className="p-4 sm:p-6 flex items-center justify-center">
                    <div className={cn(
                      juice.id === 'ginger-shot'
                        ? 'w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48'
                        : 'w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80',
                      'overflow-hidden flex items-center justify-center'
                    )}>
                      <Image
                        src={juice.image}
                        alt={juice.name}
                        width={juice.id === 'ginger-shot' ? 160 : 320}
                        height={juice.id === 'ginger-shot' ? 160 : 320}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-900 p-4 sm:p-6 flex-grow flex flex-col">
                    <div className="flex justify-between items-center mb-2">
                      <h2 className={cn("text-lg sm:text-xl font-medium font-pt-sans-caption", juice.accent)}>{juice.name}</h2>
                      <span className="font-bold text-sm sm:text-base dark:text-gray-300">{juice.price}</span>
                    </div>

                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 flex-grow">
                      {juice.description}
                    </p>

                    <div className="flex space-x-3">
                      <Link
                        href={`/juice/${juice.id}`}
                        className={cn(
                          "flex-grow text-center py-2 px-4 rounded border-2 transition-colors",
                          juice.borderAccent,
                          juice.accent,
                          "hover:bg-gray-50 dark:hover:bg-gray-800",
                        )}
                      >
                        View Details
                      </Link>
                      <button
                        type="button"
                        aria-label={`Add ${juice.name} to cart`}
                        className="ml-2 text-4xl font-bold text-orange-500 hover:text-orange-600 focus:outline-none"
                        // onClick={() => addToCart(juice)} // To be implemented
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
