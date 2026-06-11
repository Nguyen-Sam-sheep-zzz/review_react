import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPost } from '../features/postSlice';

function PostAdd() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: '', body: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Gửi hành động thunk addPost
    dispatch(addPost(form)).then(() => {
      alert('Tạo post thành công!');
      navigate('/'); // Quay lại trang danh sách sau khi đóng alert
    });
  };

  return (
    <div style={styles.container}>
      <h2>New Post</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Title</label>
          <input type="text" name="title" value={form.title} onChange={handleChange} required style={styles.input} />
        </div>

        <div style={styles.inputGroup}>
          <label>Content</label>
          <textarea name="body" value={form.body} onChange={handleChange} required rows="5" style={styles.input}></textarea>
        </div>

        <button type="submit" style={styles.btnSubmit}>Add</button>
        <button type="button" onClick={() => navigate('/')} style={styles.btnCancel}>Cancel</button>
      </form>
    </div>
  );
}

const styles = {
  container: { maxWidth: '500px', margin: '50px auto', fontFamily: 'Arial, sans-serif', padding: '25px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#fff' },
  form: { display: 'flex', flexDirection: 'column' },
  inputGroup: { marginBottom: '15px' },
  input: { width: '100%', padding: '10px', marginTop: '5px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' },
  btnSubmit: { padding: '10px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', marginBottom: '8px' },
  btnCancel: { padding: '10px', backgroundColor: '#e9ecef', color: '#333', border: 'none', borderRadius: '4px', cursor: 'pointer', textAlign: 'center' }
};

export default PostAdd;