"use client"
import React from "react"

export function OrderModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-lg w-full max-w-2xl h-[80vh] flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-10 p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
          aria-label="Close order form"
        >
          <span className="text-xl">&times;</span>
        </button>
        <iframe
          src="https://tally.so/r/w75LqR?transparentBackground=1"
          width="100%"
          height="100%"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          title="Juice ordering form"
          className="flex-1 rounded-b-lg"
        />
      </div>
    </div>
  )
} 