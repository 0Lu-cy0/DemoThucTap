import { useState, useCallback, useRef, useEffect } from 'react'
import type { ChatMessage, ChatState } from '../types/chat'

type UseChatResult = {
  state: ChatState
  sendMessage: (content: string) => void
  connect: () => void
  disconnect: () => void
}

// Demo WebSocket URL - in production, this would be configured
const WS_URL = 'ws://localhost:8080/ws/chat'

export function useChat(): UseChatResult {
  const [state, setState] = useState<ChatState>({
    messages: [],
    isConnected: false,
    isTyping: false,
  })

  const wsRef = useRef<WebSocket | null>(null)

  const connect = useCallback(() => {
    if (wsRef.current?.readyState === WebSocket.OPEN) return

    try {
      wsRef.current = new WebSocket(WS_URL)

      wsRef.current.onopen = () => {
        setState((prev) => ({ ...prev, isConnected: true }))
      }

      wsRef.current.onclose = () => {
        setState((prev) => ({ ...prev, isConnected: false }))
      }

      wsRef.current.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data)
          const message: ChatMessage = {
            id: crypto.randomUUID(),
            content: data.content || event.data,
            sender: 'other',
            timestamp: new Date(),
          }
          setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
            isTyping: false,
          }))
        } catch {
          // Handle plain text messages
          const message: ChatMessage = {
            id: crypto.randomUUID(),
            content: event.data,
            sender: 'other',
            timestamp: new Date(),
          }
          setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
          }))
        }
      }

      wsRef.current.onerror = () => {
        setState((prev) => ({ ...prev, isConnected: false }))
      }
    } catch {
      console.warn('WebSocket connection failed - chat will work in demo mode')
    }
  }, [])

  const disconnect = useCallback(() => {
    if (wsRef.current) {
      wsRef.current.close()
      wsRef.current = null
    }
  }, [])

  const sendMessage = useCallback((content: string) => {
    if (!content.trim()) return

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      content: content.trim(),
      sender: 'user',
      timestamp: new Date(),
    }

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage],
    }))

    // Send via WebSocket if connected
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({ content: content.trim() }))
      setState((prev) => ({ ...prev, isTyping: true }))
    } else {
      // Demo mode: simulate response after delay
      setTimeout(() => {
        const demoResponse: ChatMessage = {
          id: crypto.randomUUID(),
          content: 'Thanks for your message! This is a demo response. Connect to a backend for real chat.',
          sender: 'other',
          timestamp: new Date(),
        }
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, demoResponse],
        }))
      }, 1000)
    }
  }, [])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      disconnect()
    }
  }, [disconnect])

  return { state, sendMessage, connect, disconnect }
}
