import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  // Đón nhận dữ liệu object truyền từ router (nếu không có thì mặc định là null)
  const userStats = location.state;

  // Nếu người dùng cố tình vào thẳng link /home mà chưa đăng nhập
  if (!userStats) {
    return (
      <div style={{ textAlignment: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
        <h3>Bạn chưa đăng nhập! Vui lòng quay lại trang Login.</h3>
        <button onClick={() => navigate('/')} style={{ padding: '8px 15px' }}>Quay về Login</button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', padding: '20px', border: '1px solid #ddd', fontFamily: 'Arial', borderRadius: '5px' }}>
      <h2 style={{ color: '#28a745' }}>Đăng nhập thành công!</h2>
      <hr />
      <h3>Thông tin tài khoản:</h3>
      <p><strong>Email:</strong> {userStats.email}</p>
      <p><strong>Vai trò:</strong> {userStats.role}</p>
      
      <button 
        onClick={() => navigate('/')} 
        style={{ marginTop: '20px', padding: '8px 15px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}
      >
        Logout
      </button>
    </div>
  );
}

export default Home;