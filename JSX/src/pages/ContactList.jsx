import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ContactList({ contacts, setContacts, loading }) {
  const navigate = useNavigate();

  // Xử lý Xóa danh bạ
  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc muốn xóa danh bạ này không?")) {
      axios.delete(`https://my-json-server.typicode.com/codegym-vn/mock-api-contacts/contacts/${id}`)
        .then(() => {
          alert('Delete successfully!!!');
          // Ép giao diện local xóa bỏ contact này ngay lập tức
          setContacts(contacts.filter(c => c.id !== id));
        })
        .catch(() => alert('Xóa thất bại!'));
    }
  };

  if (loading) return <h3 style={{ textAlign: 'center' }}>Loading Contacts...</h3>;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2>Contacts</h2>
        <button onClick={() => navigate('/add')} style={styles.btnAdd}>Add Contact</button>
      </div>

      <table border="1" cellPadding="10" cellSpacing="0" style={styles.table}>
        <thead>
          <tr style={{ backgroundColor: '#e9ecef' }}>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(c => (
            <tr key={c.id}>
              <td style={{ textAlign: 'center' }}>
                <img 
                  src={c.image || 'https://via.placeholder.com/50'} 
                  alt="avatar" 
                  style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} 
                />
              </td>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.phone}</td>
              <td>
                <button onClick={() => navigate(`/edit/${c.id}`)} style={styles.btnEdit}>Edit</button>
                <button onClick={() => handleDelete(c.id)} style={styles.btnDelete}>Delete</button>
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
  btnEdit: { padding: '6px 12px', backgroundColor: '#ffc107', color: '#000', border: 'none', borderRadius: '4px', marginRight: '5px', cursor: 'pointer' },
  btnDelete: { padding: '6px 12px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }
};

export default ContactList;