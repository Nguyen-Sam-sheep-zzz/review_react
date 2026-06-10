import React from 'react';
import EmailForm from './components/EmailForm';

function App() {
  return (
    <div style={{ padding: '40px 20px', maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>
        Ứng dụng Soạn thảo Email
      </h2>
      
      <EmailForm />
    </div>
  );
}

export default App;