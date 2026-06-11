import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BookList from './pages/BookList';
import BookAdd from './pages/BookAdd';
import BookEdit from './pages/BookEdit';

function App() {
  return (
    <div>
      <Routes>
        {/* Trang danh sách mặc định */}
        <Route path="/" element={<BookList />} />
        
        {/* Trang tạo mới */}
        <Route path="/add" element={<BookAdd />} />
        
        {/* Trang sửa (chứa tham số động :id trên url) */}
        <Route path="/edit/:id" element={<BookEdit />} />
      </Routes>
    </div>
  );
}

export default App;