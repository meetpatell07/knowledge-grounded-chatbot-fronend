export interface Message {
  role: 'user' | 'assistant'
  content: string
  source?: 'KB' | 'KB+LLM' | 'LLM' | 'error'
  timestamp: Date
}

