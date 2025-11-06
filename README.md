# KG Chatbot Frontend

A modern Next.js frontend for the Knowledge Base Chatbot application.

## Features

- 🎨 Modern, clean UI with dark mode support
- 💬 Real-time chat interface
- 📚 Source indicators (KB, KB+LLM, LLM)
- 🔄 Session management
- 📱 Fully responsive design
- ⚡ Fast and optimized

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Backend API running (default: http://localhost:8000)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create environment file:
```bash
cp .env.local.example .env.local
```

3. Update `.env.local` with your backend API URL if needed:
```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:

```bash
npm run build
npm start
```

## Project Structure

```
frontend/
├── app/              # Next.js app directory
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Main chat page
│   └── globals.css   # Global styles
├── components/       # React components
│   ├── ChatMessage.tsx
│   └── ChatInput.tsx
├── lib/             # Utilities
│   └── api.ts       # API client
├── types/           # TypeScript types
│   └── chat.ts
└── package.json
```

## API Integration

The frontend communicates with the FastAPI backend:

- `POST /chat` - Send a message and get a response
- `GET /health` - Health check endpoint

## Features

### Chat Interface
- Send messages via Enter key (Shift+Enter for new line)
- Auto-scroll to latest message
- Loading indicators
- Error handling

### Session Management
- Automatic session creation
- "New Chat" button to start fresh
- Session ID persistence during conversation

### Source Indicators
- 📚 Knowledge Base (KB) - Direct from knowledge base
- 🤖 KB + AI - Knowledge base enhanced with AI
- 🤖 AI - AI-generated response

## Styling

The app uses Tailwind CSS with:
- Custom color scheme
- Dark mode support (system preference)
- Responsive design
- Smooth animations

