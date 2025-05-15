"use client"

import { useEffect } from 'react'

declare global {
  interface Window {
    chtlConfig: {
      chatbotId: string;
    };
  }
}

export function ChatlingWidget() {
  useEffect(() => {
    // Set Chatling configuration
    window.chtlConfig = {
      chatbotId: "2432456265"
    }

    // Load Chatling script
    const script = document.createElement('script')
    script.async = true
    script.type = "text/javascript"
    script.src = "https://chatling.ai/js/embed.js"
    script.id = "chtl-script"
    script.dataset.id = "2432456265"
    
    document.body.appendChild(script)

    return () => {
      // Cleanup script when component unmounts
      const scriptElement = document.getElementById('chtl-script')
      if (scriptElement) {
        document.body.removeChild(scriptElement)
      }
    }
  }, [])

  return null
} 