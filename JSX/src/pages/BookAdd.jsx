import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function BookAdd() {
  const [book, setBook] = useState({ title: '', quantity: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post('https://my-json-server.typicode.com/codegym-vn/mock-api-books/books', book)
      .then(res => {
        alert('Created book successfully!!!');
        navigate('/'); // Điều hướng về trang danh sách
      })
      .catch(err => alert('Có lỗi xảy ra khi tạo mới!'));
  };

  return (
    <div style={styles.container}>
      <h2>Add a new Book</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Title</label>
          <input type="text" name="title" value={book.title} onChange={handleChange} required style={styles.input} />
        </div>
        <div style={styles.inputGroup}>
          <label>Quantity</label>
          <input type="number" name="quantity" value={book.quantity} onChange={handleChange} required style={styles.input} />
        </div>
        <button type="submit" style={styles.btnSubmit}>Add</button>
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
  btnSubmit: { padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: '5px' },
  btnCancel: { padding: '10px', backgroundColor: '#6c757d', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }
};

export default BookAdd;