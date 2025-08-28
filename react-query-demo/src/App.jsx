import React, { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import PostsComponent from './components/PostsComponent.jsx'

// Configure sensible defaults to demonstrate caching behavior
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30 * 1000,         // 30s = remain "fresh" in cache after fetch
      cacheTime: 5 * 60 * 1000,     // 5min = stay in memory before garbage-collected
      refetchOnWindowFocus: false,  // avoid surprise refetches while demoing
      retry: 1,                     // retry failed queries once
    },
  },
})

export default function App() {
  const [view, setView] = useState('posts') // 'posts' | 'home'

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ maxWidth: 900, margin: '40px auto', padding: '0 16px' }}>
        <header style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <h1 style={{ marginRight: 'auto' }}>React Query Demo</h1>
          <button onClick={() => setView('home')}>Home</button>
          <button onClick={() => setView('posts')}>Posts</button>
        </header>

        <main style={{ marginTop: 24 }}>
          {view === 'home' ? (
            <Home />
          ) : (
            <PostsComponent />
          )}
        </main>
      </div>

      {/* Devtools help you visualize cache, freshness, and query states */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>
        Navigate back to <strong>Posts</strong> within 30 seconds to see instant load from cache
        (no network request), thanks to <code>staleTime</code>.
      </p>
    </div>
  )
}

