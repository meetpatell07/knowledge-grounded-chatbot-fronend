import type { SourceType } from '@/lib/api'

export interface Message {
  role: 'user' | 'assistant'
  content: string
  source?: SourceType
  timestamp: Date
}

