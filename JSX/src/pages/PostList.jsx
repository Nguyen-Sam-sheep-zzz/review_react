import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchPosts } from '../features/postSlice';

function PostList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { list: posts, loading, error } = useSelector((state) => state.posts);

  // Chỉ fetch dữ liệu từ API nếu danh sách đang rỗng
  useEffect(() => {
    if (posts.length === 0) {
      dispatch(fetchPosts());
    }
  }, [dispatch, posts.length]);

  if (loading) return <h3 style={{ textAlign: 'center' }}>Loading posts...</h3>;
  if (error) return <h3 style={{ textAlign: 'center', color: 'red' }}>Error: {error}</h3>;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2>Post</h2>
        <button onClick={() => navigate('/add')} style={styles.btnAdd}>Add new Post</button>
      </div>

      <table border="1" cellPadding="10" cellSpacing="0" style={styles.table}>
        <thead>
          <tr style={{ backgroundColor: '#e9ecef' }}>
            <th style={{ width: '30%' }}>Title</th>
            <th style={{ width: '55%' }}>Content</th>
            <th style={{ width: '15%' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td style={{ fontWeight: 'bold' }}>{post.title}</td>
              <td>{post.body}</td>
              <td style={{ textAlign: 'center' }}>
                <button onClick={() => navigate(`/edit/${post.id}`)} style={styles.btnEdit}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: { maxWidth: '900px', margin: '30px auto', fontFamily: 'Arial, sans-serif', backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' },
  table: { width: '100%', borderCollapse: 'collapse' },
  btnAdd: { padding: '10px 15px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' },
  btnEdit: { padding: '6px 12px', backgroundColor: '#ffc107', color: '#000', border: 'none', borderRadius: '4px', cursor: 'pointer' }
};

export default PostList;