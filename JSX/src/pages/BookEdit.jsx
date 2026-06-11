import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function BookEdit() {
  const { id } = useParams(); // Lấy id từ URL đường dẫn
  const navigate = useNavigate();
  const [book, setBook] = useState({ title: '', quantity: '' });
  const [loading, setLoading] = useState(true);

  // Lấy thông tin cũ của cuốn sách dựa vào id
  useEffect(() => {
    axios.get(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${id}`)
      .then(res => {
        setBook(res.data);
        setLoading(false);
      })
      .catch(err => {
        alert('Không tìm thấy thông tin cuốn sách!');
        navigate('/');
      });
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Gọi API PUT để chỉnh sửa thông tin sách
    axios.put(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${id}`, book)
      .then(res => {
        alert('Updated book successfully!!!');
        navigate('/'); // Quay về trang danh sách sau khi đóng alert
      })
      .catch(err => alert('Chỉnh sửa thất bại!'));
  };

  if (loading) return <h3 style={{ textAlign: 'center' }}>Loading Book Data...</h3>;

  return (
    <div style={styles.container}>
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Title</label>
          <input type="text" name="title" value={book.title} onChange={handleChange} required style={styles.input} />
        </div>
        <div style={styles.inputGroup}>
          <label>Quantity</label>
          <input type="number" name="quantity" value={book.quantity} onChange={handleChange} required style={styles.input} />
        </div>
        <button type="submit" style={styles.btnSubmit}>Save</button>
        <button type="button" onClick={() => navigate('/')} style={styles.btnCancel}>Cancel</button>
      </form>
    </div>
  );
}

const styles = {
  container: { maxWidth: '400px', margin: '50px auto', fontFamily: 'Arial, sans-serif', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' },
  form: { display: 'flex', flexDirection: 'column' },
  inputGroup: { marginBottom: '15px' },
  input: { width: '100%', padding: '8px', marginTop: '5px', boxSizing: 'border-box' },
  btnSubmit: { padding: '10px', backgroundColor: '#ffc107', color: '#000', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', marginBottom: '5px' },
  btnCancel: { padding: '10px', backgroundColor: '#6c757d', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }
};

export default BookEdit;