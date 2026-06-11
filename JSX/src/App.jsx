import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PostList from './pages/PostList';
import PostAdd from './pages/PostAdd';
import PostEdit from './pages/PostEdit';

function App() {
  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', padding: '20px' }}>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/add" element={<PostAdd />} />
        <Route path="/edit/:id" element={<PostEdit />} />
      </Routes>
    </div>
  );
}

export default App;