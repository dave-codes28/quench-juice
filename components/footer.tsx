import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and description */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1">
            <div className="flex items-center mb-3 sm:mb-4">
              <span className="text-green-600 dark:text-green-400 text-xl sm:text-2xl font-bold font-pt-sans-caption">Quench</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
              Refreshing, nutritious juices made from the finest organic ingredients. Delivered fresh to your door.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-base sm:text-lg font-medium mb-3 sm:mb-4 text-gray-800 dark:text-gray-100">
              Quick Links
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-base sm:text-lg font-medium mb-3 sm:mb-4 text-gray-800 dark:text-gray-100">
              Contact Us
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 dark:text-green-400 mr-1 sm:mr-2 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                  27 Laniba ajibode extension, UI ibadan oyo state
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 dark:text-green-400 mr-1 sm:mr-2" />
                <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">08077567118 - 07087783915</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 dark:text-green-400 mr-1 sm:mr-2" />
                <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">quench.juice@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-base sm:text-lg font-medium mb-3 sm:mb-4 text-gray-800 dark:text-gray-100">
              Opening Hours
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              <li className="flex justify-between">
                <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">Monday - Friday</span>
                <span className="text-xs sm:text-sm text-gray-800 dark:text-gray-100 font-medium">8am - 8pm</span>
              </li>
              <li className="flex justify-between">
                <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">Saturday</span>
                <span className="text-xs sm:text-sm text-gray-800 dark:text-gray-100 font-medium">9am - 7pm</span>
              </li>
              <li className="flex justify-between">
                <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">Sunday</span>
                <span className="text-xs sm:text-sm text-gray-800 dark:text-gray-100 font-medium">10am - 6pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-6 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
          <p>&copy; {new Date().getFullYear()} Quench. All rights reserved.</p>
          <div className="mt-2 space-x-3 sm:space-x-4">
            <Link href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
