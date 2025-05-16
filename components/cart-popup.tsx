"use client"

import React from "react"
import { useCart } from "./cart-context"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface CartPopupProps {
  open: boolean
  onClose: () => void
  onBuy: () => void
}

export function CartPopup({ open, onClose, onBuy }: CartPopupProps) {
  const { cartItems, removeFromCart, clearCart } = useCart()
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
          aria-label="Close cart"
        >
          <span className="text-xl">&times;</span>
        </button>
        <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div className="text-gray-500 text-center py-8">Your cart is empty.</div>
        ) : (
          <ul className="space-y-4 max-h-64 overflow-y-auto mb-4">
            {cartItems.map(item => (
              <li key={item.id} className="flex items-center space-x-3">
                <Image src={item.image} alt={item.name} width={40} height={40} className="rounded object-contain bg-gray-100 dark:bg-gray-800" />
                <div className="flex-1">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-xs text-gray-500">x{item.quantity}</div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 text-lg font-bold px-2"
                  aria-label={`Remove ${item.name}`}
                >
                  &times;
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className="flex flex-col gap-2">
          <Button
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded"
            onClick={onBuy}
            disabled={cartItems.length === 0}
          >
            Buy
          </Button>
          <Button
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 rounded"
            variant="ghost"
            onClick={clearCart}
            disabled={cartItems.length === 0}
          >
            Clear Cart
          </Button>
        </div>
      </div>
    </div>
  )
} 