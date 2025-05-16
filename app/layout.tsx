import { Space_Grotesk } from "next/font/google"
import "../styles/globals.css"
import type React from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { OrderModalProvider } from "@/components/order-modal-provider"
import { CartProvider } from "@/components/cart-context"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "700"], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: "Quench - Fresh, Organic Juices",
  description: "Discover our range of fresh, organic cold-pressed juices made from the finest ingredients.",
  generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} font-space-grotesk bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100`}>
        <CartProvider>
          <OrderModalProvider>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
              {children}
            </ThemeProvider>
          </OrderModalProvider>
        </CartProvider>
      </body>
    </html>
  )
}
