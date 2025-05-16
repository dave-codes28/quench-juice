import React, { createContext, useContext, useState, ReactNode } from "react"
import { OrderModal } from "./order-modal"

interface OrderModalContextType {
  openOrderModal: () => void
  closeOrderModal: () => void
}

const OrderModalContext = createContext<OrderModalContextType | undefined>(undefined)

export function useOrderModal() {
  const ctx = useContext(OrderModalContext)
  if (!ctx) throw new Error("useOrderModal must be used within OrderModalProvider")
  return ctx
}

export function OrderModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const openOrderModal = () => setOpen(true)
  const closeOrderModal = () => setOpen(false)

  return (
    <OrderModalContext.Provider value={{ openOrderModal, closeOrderModal }}>
      {children}
      <OrderModal open={open} onClose={closeOrderModal} />
    </OrderModalContext.Provider>
  )
} 