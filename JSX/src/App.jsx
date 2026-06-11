import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import ContactList from './pages/ContactList';
import ContactAdd from './pages/ContactAdd';
import ContactEdit from './pages/ContactEdit';

function App() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Lấy danh sách danh bạ gốc ban đầu
  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/codegym-vn/mock-api-contacts/contacts')
      .then(res => {
        setContacts(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Lỗi lấy danh bạ:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ backgroundColor: '#f4f6f9', minHeight: '100vh', padding: '20px' }}>
      <Routes>
        <Route path="/" element={<ContactList contacts={contacts} setContacts={setContacts} loading={loading} />} />
        <Route path="/add" element={<ContactAdd contacts={contacts} setContacts={setContacts} />} />
        <Route path="/edit/:id" element={<ContactEdit contacts={contacts} setContacts={setContacts} />} />
      </Routes>
    </div>
  );
}

export default App;