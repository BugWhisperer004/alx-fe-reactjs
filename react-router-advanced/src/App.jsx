// src/App.jsx
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProtectedRoute from './auth/ProtectedRoute';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import Posts from './components/Posts';
import Post from './components/Post';
import NotFound from './components/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <header style={{ padding: 12, borderBottom: '1px solid #eee' }}>
        <nav style={{ display: 'flex', gap: 12 }}>
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/profile">Profile</Link>
        </nav>
      </header>

      <main style={{ padding: 12 }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            {/* Protected */}
            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<Profile />}>
                <Route index element={<ProfileDetails />} />
                <Route path="settings" element={<ProfileSettings />} />
              </Route>
            </Route>

            {/* Dynamic */}
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:postId" element={<Post />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>
  );
}

