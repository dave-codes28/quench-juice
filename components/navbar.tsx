"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Add scroll detection for better mobile experience
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav
      className={cn(
        "bg-white/80 dark:bg-gray-950/80 sticky top-0 z-50 backdrop-blur transition-shadow duration-300",
        isScrolled ? "shadow-md dark:shadow-gray-900/50" : "shadow-sm dark:shadow-gray-900/30",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 relative flex items-center justify-center">
              <Image
                src="/Quench-logo.png"
                alt="Quench Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 font-space-grotesk tracking-tight">Quench</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link
              href="/"
              className="text-sm lg:text-base text-gray-800 dark:text-gray-100 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-sm lg:text-base text-gray-800 dark:text-gray-100 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-sm lg:text-base text-gray-800 dark:text-gray-100 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              About Us
            </Link>
            <button
              type="button"
              className="text-sm lg:text-base text-gray-800 dark:text-gray-100 hover:text-green-600 dark:hover:text-green-400 transition-colors bg-transparent border-none outline-none cursor-pointer"
              onClick={() => {
                const footer = document.querySelector('footer')
                if (footer) {
                  footer.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Contact
            </button>
            <ThemeToggle />
            <Button
              className="bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-sm lg:text-base py-1.5 px-3 lg:py-2 lg:px-4"
              onClick={() => {
                // Find and click the floating chat button to open the chat
                const chatButton = document.querySelector('[data-testid="chat-button"]')
                if (chatButton instanceof HTMLElement) {
                  chatButton.click()
                }
              }}
            >
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-1">
            <ThemeToggle />
            <Button variant="ghost" size="sm" onClick={toggleMenu} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMenuOpen ? "max-h-60" : "max-h-0",
          )}
        >
          <div className="flex flex-col space-y-3 pb-4">
            <Link
              href="/"
              className="text-gray-800 dark:text-gray-100 hover:text-green-600 dark:hover:text-green-400 transition-colors py-2 text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-gray-800 dark:text-gray-100 hover:text-green-600 dark:hover:text-green-400 transition-colors py-2 text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-gray-800 dark:text-gray-100 hover:text-green-600 dark:hover:text-green-400 transition-colors py-2 text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <button
              type="button"
              className="text-gray-800 dark:text-gray-100 hover:text-green-600 dark:hover:text-green-400 transition-colors py-2 text-sm text-left bg-transparent border-none outline-none cursor-pointer"
              onClick={() => {
                setIsMenuOpen(false)
                const footer = document.querySelector('footer')
                if (footer) {
                  footer.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Contact
            </button>
            <Button
              className="bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 w-full text-sm py-1.5"
              onClick={() => {
                setIsMenuOpen(false) // Close the mobile menu
                // Find and click the floating chat button to open the chat
                const chatButton = document.querySelector('[data-testid="chat-button"]')
                if (chatButton instanceof HTMLElement) {
                  chatButton.click()
                }
              }}
            >
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
