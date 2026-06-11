import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from 'axios';
import axios from 'axios'; // Import axios từ đúng thư viện axios

function ContactAdd({ contacts, setContacts }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', phone: '', image: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Xử lý upload ảnh chuyển sang chuỗi Base64 để hiển thị & lưu trữ
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm({ ...form, image: reader.result }); // Chuỗi base64 của ảnh
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosInstance.post('https://my-json-server.typicode.com/codegym-vn/mock-api-contacts/contacts', form)
      .then(res => {
        alert('Created contact successfully!!!');
        
        // CẬP NHẬT GIAO DIỆN LOCAL: Gộp thêm dữ liệu mới vào mảng tổng
        // Do Mock Server trả về id giả lập cố định, ta tạo id ngẫu nhiên độc bản để không lỗi key trùng lặp
        const newContactWithId = { ...res.data, id: Date.now() }; 
        setContacts([newContactWithId, ...contacts]);
        
        navigate('/'); // Điều hướng về trang danh bạ
      })
      .catch(() => alert('Có lỗi xảy ra khi thêm mới!'));
  };

  return (
    <div style={styles.container}>
      <h2>Add Contact</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        
        <div style={styles.inputGroup}>
          <label style={{ fontWeight: 'bold' }}>Avatar</label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '5px' }}>
            <img 
              src={form.image || 'https://via.placeholder.com/100'} 
              alt="Preview" 
              style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '1px solid #ddd' }} 
            />
            {/* Ẩn input file gốc đi, kích hoạt qua label làm nút Add Image */}
            <label htmlFor="file-upload" style={styles.btnUpload}>Add image</label>
            <input id="file-upload" type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
          </div>
        </div>

        <div style={styles.inputGroup}>
          <label>Name</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} required style={styles.input} />
        </div>

        <div style={styles.inputGroup}>
          <label>Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required style={styles.input} />
        </div>

        <div style={styles.inputGroup}>
          <label>Phone</label>
          <input type="text" name="phone" value={form.phone} onChange={handleChange} required style={styles.input} />
        </div>

        <button type="submit" style={styles.btnSubmit}>Add</button>
        <button type="button" onClick={() => navigate('/')} style={styles.btnCancel}>Cancel</button>
      </form>
    </div>
  );
}

const styles = {
  container: { maxWidth: '450px', margin: '50px auto', fontFamily: 'Arial, sans-serif', padding: '25px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' },
  form: { display: 'flex', flexDirection: 'column' },
  inputGroup: { marginBottom: '15px' },
  input: { width: '100%', padding: '10px', marginTop: '5px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' },
  btnUpload: { padding: '8px 12px', backgroundColor: '#6c757d', color: '#fff', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' },
  btnSubmit: { padding: '10px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', marginBottom: '8px' },
  btnCancel: { padding: '10px', backgroundColor: '#e9ecef', color: '#333', border: 'none', borderRadius: '4px', cursor: 'pointer', textAlign: 'center' }
};

export default ContactAdd;