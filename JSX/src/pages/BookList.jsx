import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Gọi danh sách sách khi vào trang
  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/codegym-vn/mock-api-books/books')
      .then(res => {
        setBooks(res.data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  // Hàm xử lý Xóa sách
  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa cuốn sách này không?")) {
      axios.delete(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${id}`)
        .then(() => {
          alert('Delete successfully!!!');
          // Cập nhật lại giao diện (loại bỏ cuốn sách vừa xóa khỏi state)
          setBooks(books.filter(book => book.id !== id));
        })
        .catch(err => alert('Xóa thất bại!'));
    }
  };

  if (loading) return <h3 style={{ textAlign: 'center' }}>Loading Library...</h3>;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2>Library</h2>
        <button onClick={() => navigate('/add')} style={styles.btnAdd}>Add a new Book</button>
      </div>

      <table border="1" cellPadding="10" cellSpacing="0" style={styles.table}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th>Title</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.quantity}</td>
              <td>
                <button onClick={() => navigate(`/edit/${book.id}`)} style={styles.btnEdit}>Edit</button>
                <button onClick={() => handleDelete(book.id)} style={styles.btnDelete}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: { maxWidth: '800px', margin: '30px auto', fontFamily: 'Arial, sans-serif' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' },
  table: { width: '100%', borderCollapse: 'collapse' },
  btnAdd: { padding: '10px 15px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' },
  btnEdit: { padding: '5px 10px', backgroundColor: '#ffc107', color: '#000', border: 'none', borderRadius: '3px', marginRight: '5px', cursor: 'pointer' },
  btnDelete: { padding: '5px 10px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }
};

export default BookList;