import { useState } from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: 'Lập trình React JS', quantity: 10 },
    { id: 2, title: 'Học Formik căn bản', quantity: 5 }
  ]);

  // Quản lý trạng thái cuốn sách đang được sửa
  const [editingBook, setEditingBook] = useState(null);

  // Xử lý thêm mới hoặc cập nhật sách khi Form submit dữ liệu lên
  const handleFormSubmit = (values) => {
    if (editingBook) {
      // Chế độ EDIT: tìm và sửa phần tử trong mảng
      const updatedBooks = books.map((book) =>
        book.id === editingBook.id 
          ? { ...book, title: values.title, quantity: Number(values.quantity) } 
          : book
      );
      setBooks(updatedBooks);
      setEditingBook(null); // Reset về chế độ thêm mới
    } else {
      // Chế độ ADD: Thêm phần tử mới
      const newBook = {
        id: Date.now(),
        title: values.title,
        quantity: Number(values.quantity)
      };
      setBooks([...books, newBook]);
    }
  };

  // Xử lý khi nhấn nút Delete ở danh sách
  const handleDeleteBook = (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa cuốn sách này không?')) {
      setBooks(books.filter((book) => book.id !== id));
      // Nếu đang sửa chính cuốn sách bị xóa, đưa form về trạng thái thêm mới
      if (editingBook?.id === id) {
        setEditingBook(null);
      }
    }
  };
  

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h2>Ứng dụng Quản lý Sách</h2>
      
      {/* Truyền State và hàm xử lý vào Form Component thông qua props */}
      <BookForm 
        editingBook={editingBook} 
        onSubmit={handleFormSubmit} 
        onCancel={() => setEditingBook(null)}
      />

      {/* Truyền danh sách và hàm xử lý vào List Component thông qua props */}
      <BookList 
        books={books} 
        onEdit={(book) => setEditingBook(book)} 
        onDelete={handleDeleteBook} 
      />
    </div>
  );
}

export default App;