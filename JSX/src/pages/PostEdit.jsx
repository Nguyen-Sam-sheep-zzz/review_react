import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updatePost } from '../features/postSlice';

function PostEdit() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Tìm post cũ từ danh sách trong Store Redux
  const posts = useSelector((state) => state.posts.list);
  const [form, setForm] = useState({ title: '', body: '' });

  useEffect(() => {
    const currentPost = posts.find((p) => p.id === parseInt(id) || p.id === id);
    if (currentPost) {
      setForm({ title: currentPost.title, body: currentPost.body });
    } else {
      navigate('/'); // Không thấy thì thảy về trang chủ
    }
  }, [id, posts, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Gửi hành động thunk updatePost kèm id và data mới
    dispatch(updatePost({ id, updatedData: form })).then(() => {
      alert('Chỉnh sửa post thành công!');
      navigate('/'); // Quay lại trang danh sách sau khi đóng alert
    });
  };

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', fontFamily: 'Arial, sans-serif', padding: '25px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#fff' }}>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '15px' }}>
          <label>Title</label>
          <input type="text" name="title" value={form.title} onChange={handleChange} required style={{ width: '100%', padding: '10px', marginTop: '5px', boxSizing: 'border-box' }} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Content</label>
          <textarea name="body" value={form.body} onChange={handleChange} required rows="5" style={{ width: '100%', padding: '10px', marginTop: '5px', boxSizing: 'border-box' }}></textarea>
        </div>

        <button type="submit" style={{ padding: '10px', backgroundColor: '#ffc107', color: '#000', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', marginBottom: '8px' }}>Save</button>
        <button type="button" onClick={() => navigate('/')} style={{ padding: '10px', backgroundColor: '#e9ecef', color: '#333', border: 'none', borderRadius: '4px', cursor: 'pointer', textAlign: 'center' }}>Cancel</button>
      </form>
    </div>
  );
}

export default PostEdit;