import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  
  // State lưu thông tin nhập từ form
  const [account, setAccount] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  // Xử lý thay đổi dữ liệu ô input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccount({ ...account, [name]: value });
  };

  // Xử lý sự kiện bấm nút Login
  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra thông tin đăng nhập theo yêu cầu đề bài
    if (account.email === 'admin@gmail.com' && account.password === 'letmein') {
      setError('');
      // Login thành công -> Chuyển trang và truyền kèm dữ liệu object qua state
      navigate('/home', { state: { email: account.email, role: 'Administrator' } });
    } else {
      setError('Email hoặc mật khẩu không chính xác!');
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={{ textAlign: 'center' }}>Login</h2>
        
        {error && <div style={styles.error}>{error}</div>}

        <div style={styles.inputGroup}>
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={account.email} 
            onChange={handleChange} 
            required 
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label>Password:</label>
          <input 
            type="password" 
            name="password" 
            value={account.password} 
            onChange={handleChange} 
            required 
            style={styles.input}
          />
        </div>

        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
}

const styles = {
  container: { display: 'flex', justifyContent: 'center', marginTop: '50px', fontFamily: 'Arial' },
  form: { width: '320px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9' },
  inputGroup: { marginBottom: '15px' },
  input: { width: '100%', padding: '8px', marginTop: '5px', boxSizing: 'border-box' },
  button: { width: '100%', padding: '10px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' },
  error: { color: 'red', marginBottom: '15px', textAlign: 'center', fontSize: '14px' }
};

export default Login;