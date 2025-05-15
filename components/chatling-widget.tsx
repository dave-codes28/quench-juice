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

    // Load Chatling script
    const script = document.createElement('script')
    script.async = true
    script.type = "text/javascript"
    script.src = "https://chatling.ai/js/embed.js"
    script.id = "chtl-script"
    script.dataset.id = "3611398584"
    
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