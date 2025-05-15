"use client"

import { useState, useEffect } from "react"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ChatlingWidget } from './chatling-widget'

export function FloatingChat() {
  const [showBubble, setShowBubble] = useState(false)

  // Show chat bubble only after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShowBubble(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const openChat = () => {
    // Trigger Chatling's open method if available
    if (window.chtlConfig && (window as any).Chtl) {
      (window as any).Chtl.show()
    }
  }

  return (
    <>
      {showBubble && (
        <Button
          data-testid="chat-button"
          className={cn(
            "fixed bottom-4 sm:bottom-6 right-4 sm:right-6 rounded-full w-14 h-14 sm:w-14 sm:h-14 shadow-lg z-50 bg-green-500 hover:bg-green-600",
            "text-white"
          )}
          onClick={openChat}
          aria-label="Open chat"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      )}
      <ChatlingWidget />
    </>
  )
}
