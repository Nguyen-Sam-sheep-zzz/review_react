import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosInstance from 'axios';

function ContactEdit({ contacts, setContacts }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', phone: '', image: '' });

  // Đổ dữ liệu cũ đã chọn vào form
  useEffect(() => {
    const currentContact = contacts.find(c => c.id === parseInt(id) || c.id === id);
    if (currentContact) {
      setForm(currentContact);
    } else {
      // Đề phòng trường hợp F5 mất state local, gọi API dự phòng lấy thông tin theo Id
      axiosInstance.get(`https://my-json-server.typicode.com/codegym-vn/mock-api-contacts/contacts/${id}`)
        .then(res => setForm(res.data))
        .catch(() => navigate('/'));
    }
  }, [id, contacts, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm({ ...form, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosInstance.put(`https://my-json-server.typicode.com/codegym-vn/mock-api-contacts/contacts/${id}`, form)
      .then(res => {
        alert('Updated contact successfully!!!');
        
        // CẬP NHẬT GIAO DIỆN LOCAL: Thay thế phần tử cũ bằng phần tử đã sửa đổi trong mảng tổng
        const updatedList = contacts.map(c => (c.id === parseInt(id) || c.id === id) ? form : c);
        setContacts(updatedList);
        
        navigate('/'); // Quay về trang danh bạ sau khi đóng alert
      })
      .catch(() => alert('Chỉnh sửa thất bại!'));
  };

  return (
    <div style={{ maxWidth: '450px', margin: '50px auto', fontFamily: 'Arial, sans-serif', padding: '25px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#fff' }}>
      <h2>Edit Contact</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontWeight: 'bold' }}>Avatar</label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '5px' }}>
            <img 
              src={form.image || 'https://via.placeholder.com/100'} 
              alt="Avatar" 
              style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '1px solid #ddd' }} 
            />
            <label htmlFor="change-upload" style={{ padding: '8px 12px', backgroundColor: '#6c757d', color: '#fff', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' }}>Change Image</label>
            <input id="change-upload" type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
          </div>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Name</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} required style={{ width: '100%', padding: '10px', marginTop: '5px', boxSizing: 'border-box' }} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required style={{ width: '100%', padding: '10px', marginTop: '5px', boxSizing: 'border-box' }} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Phone</label>
          <input type="text" name="phone" value={form.phone} onChange={handleChange} required style={{ width: '100%', padding: '10px', marginTop: '5px', boxSizing: 'border-box' }} />
        </div>

        <button type="submit" style={{ padding: '10px', backgroundColor: '#ffc107', color: '#000', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', marginBottom: '8px' }}>Save</button>
        <button type="button" onClick={() => navigate('/')} style={{ padding: '10px', backgroundColor: '#e9ecef', color: '#333', border: 'none', borderRadius: '4px', cursor: 'pointer', textAlign: 'center' }}>Cancel</button>
      </form>
    </div>
  );
}

export default ContactEdit;