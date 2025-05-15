"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hi there! How can I help you with your juice order today?", isUser: false },
  ])
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatWindowRef = useRef<HTMLDivElement>(null)
  const [showBubble, setShowBubble] = useState(false)

  // Scroll to bottom of messages when new messages are added
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  // Adjust chat window position on mobile
  useEffect(() => {
    const handleResize = () => {
      if (chatWindowRef.current) {
        if (window.innerWidth < 640) {
          chatWindowRef.current.style.width = "calc(100% - 32px)"
          chatWindowRef.current.style.right = "16px"
          chatWindowRef.current.style.left = "16px"
          chatWindowRef.current.style.bottom = "80px"
        } else {
          chatWindowRef.current.style.width = ""
          chatWindowRef.current.style.right = ""
          chatWindowRef.current.style.left = ""
          chatWindowRef.current.style.bottom = ""
        }
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Show chat bubble only after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShowBubble(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Listen for custom event to open chat from the new button
  useEffect(() => {
    const openChat = () => setIsOpen(true)
    window.addEventListener('open-chat', openChat)
    return () => window.removeEventListener('open-chat', openChat)
  }, [])

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault()

    if (!inputValue.trim()) return

    // Add user message
    setMessages([...messages, { text: inputValue, isUser: true }])
    setInputValue("")

    // Simulate agent response after a short delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Thanks for your message! One of our juice experts will be with you shortly.",
          isUser: false,
        },
      ])
    }, 1000)
  }

  return (
    <>
      {/* Floating chat bubble only after scroll */}
      {showBubble && !isOpen && (
        <Button
          data-testid="chat-button"
          className={cn(
            "fixed bottom-4 sm:bottom-6 right-4 sm:right-6 rounded-full w-14 h-14 sm:w-14 sm:h-14 shadow-lg z-50 bg-green-500 hover:bg-green-600",
            "text-white"
          )}
          onClick={toggleChat}
          aria-label="Open chat"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      )}
      {/* Always render chat window, show if isOpen */}
      <div
        ref={chatWindowRef}
        className={cn(
          "fixed bottom-24 right-6 w-[calc(100%-32px)] sm:w-80 md:w-96 bg-white dark:bg-card rounded-lg shadow-xl z-40 transition-all duration-300 transform",
          isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 pointer-events-none",
        )}
      >
        {/* Close button in chat window */}
        {isOpen && (
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
            className="absolute top-3 right-3 rounded-full p-1 hover:bg-gray-200 dark:hover:bg-gray-300 transition z-50"
          >
            <X className="h-5 w-5 text-gray-700 dark:text-gray-900" />
          </button>
        )}
        {/* Chat header */}
        <div className="bg-green-100 dark:bg-green-600 text-gray-800 dark:text-gray-100 p-3 sm:p-4 rounded-t-lg">
          <h3 className="font-medium">Juice Chat</h3>
          <p className="text-xs sm:text-sm text-green-700 dark:text-green-100">We typically reply in a few minutes</p>
        </div>

        {/* Chat messages */}
        <div className="h-64 sm:h-80 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                "max-w-[85%] p-2 sm:p-3 rounded-lg text-sm sm:text-base",
                message.isUser
                  ? "bg-green-100 dark:bg-green-600 text-gray-800 dark:text-gray-100 ml-auto rounded-br-none"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-none",
              )}
            >
              {message.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat input */}
        <form onSubmit={sendMessage} className="p-3 sm:p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex space-x-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 text-sm sm:text-base dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
            />
            <Button type="submit" className="bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700">
              Send
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
