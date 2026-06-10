import React from 'react';

function BookList({ books, onEdit, onDelete }) {
  return (
    <div>
      <h3>Danh sách sách hiện có</h3>
      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th>Tiêu đề</th>
            <th>Số lượng</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {books.length === 0 ? (
            <tr>
              <td colSpan="3" style={{ textAlign: 'center' }}>Không có sách nào trong danh sách.</td>
            </tr>
          ) : (
            books.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.quantity}</td>
                <td>
                  <button 
                    onClick={() => onEdit(book)} 
                    style={{ marginRight: '5px', backgroundColor: '#ff9800', color: 'white', border: 'none', padding: '3px 10px', cursor: 'pointer', borderRadius: '3px' }}
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => onDelete(book.id)} 
                    style={{ backgroundColor: '#f44336', color: 'white', border: 'none', padding: '3px 10px', cursor: 'pointer', borderRadius: '3px' }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default BookList;