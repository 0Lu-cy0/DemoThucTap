export type ChatMessage = {
  id: string
  content: string
  sender: 'user' | 'other'
  timestamp: Date
}

export type ChatState = {
  messages: ChatMessage[]
  isConnected: boolean
  isTyping: boolean
}
