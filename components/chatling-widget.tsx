"use client"

import { useEffect } from 'react'

declare global {
  interface Window {
    chtlConfig: {
      chatbotId: string;
      hide?: boolean;
    };
    Chtl?: {
      show: () => void;
      hide: () => void;
    };
  }
}

export function ChatlingWidget() {
  useEffect(() => {
    // Set Chatling configuration
    window.chtlConfig = {
      chatbotId: "3611398584",
      hide: true // Hide the widget by default
    }

    // Only add the script if it doesn't exist
    if (!document.getElementById("chtl-script")) {
      const script = document.createElement('script')
      script.async = true
      script.type = "text/javascript"
      script.src = "https://chatling.ai/js/embed.js"
      script.id = "chtl-script"
      script.dataset.id = "3611398584"
      document.body.appendChild(script)
    }

    // Handler for opening chat
    const openChatHandler = () => {
      if (window.Chtl && typeof window.Chtl.show === "function") {
        window.Chtl.show()
      }
    }
    window.addEventListener("open-chat-widget", openChatHandler)

    return () => {
      window.removeEventListener("open-chat-widget", openChatHandler)
    }
  }, [])

  return null
} 