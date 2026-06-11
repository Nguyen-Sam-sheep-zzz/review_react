import { useState, useEffect } from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TodoList() {
  // 1. Khai báo các State cần quản lý
  const [todos, setTodos] = useState([]);       // Lưu danh sách công việc tải về từ API
  const [taskInput, setTaskInput] = useState(''); // Lưu nội dung chữ đang nhập ở ô input
  const [loading, setLoading] = useState(true);   // Trạng thái chờ khi đang tải dữ liệu

  // 2. Sử dụng useEffect để tự động gọi API lấy danh sách Todo ngay khi vừa vào trang
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10') // Giới hạn lấy 10 phần tử cho gọn bảng
      .then((response) => {
        setTodos(response.data); // Lưu mảng dữ liệu trả về vào state todos
        setLoading(false);       // Tắt trạng thái chờ loading
      })
      .catch((error) => {
        console.error('Lỗi khi lấy dữ liệu:', error);
        setLoading(false);
      });
  }, []);

  // 3. Hàm xử lý khi người dùng nhấn nút "Submit" để thêm Todo mới
  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn hành vi tải lại trang mặc định của thẻ <form>

    // Kiểm tra nếu ô nhập đang trống hoặc chỉ chứa khoảng trắng thì chặn lại
    if (!taskInput.trim()) {
      alert('Vui lòng nhập nội dung công việc!');
      return;
    }

    // Đối tượng Todo mới định nghĩa theo cấu trúc của API JSONPlaceholder
    const newTodo = {
      title: taskInput,
      completed: false,
      userId: 1 // Giả lập ID người dùng cố định
    };

    // Gọi API phương thức POST để thêm mới
    axios.post('https://jsonplaceholder.typicode.com/todos', newTodo)
      .then((response) => {
        // Hiển thị alert thông báo status thành công theo yêu cầu bài toán
        alert(`Sent successfully!!! Response Status: ${response.status}`);
        
        // Cập nhật giao diện local: thêm đối tượng nhận về từ API vào đầu danh sách hiển thị
        setTodos([response.data, ...todos]);
        
        // Xóa sạch ô nhập văn bản sau khi hoàn thành
        setTaskInput('');
      })
      .catch((error) => {
        alert(`Gửi thất bại! Mã lỗi: ${error.response?.status || 'Unknown'}`);
      });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Todo List</h2>
      
      {/* Form nhập dữ liệu */}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Nhập todo task tại đây..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Submit</button>
      </form>

      {/* Hiển thị danh sách kết quả */}
      {loading ? (
        <p style={{ textAlign: 'center' }}>Đang tải danh sách công việc...</p>
      ) : (
        <ul style={styles.list}>
          {todos.map((todo) => (
            <li key={todo.id} style={styles.listItem}>
              <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.title}
              </span>
              <span style={todo.completed ? styles.statusDone : styles.statusPending}>
                {todo.completed ? 'Done' : 'Pending'}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Đối tượng CSS inline giúp giao diện nhìn ngăn nắp, hiện đại
const styles = {
  container: {
    maxWidth: '500px',
    margin: '30px auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
  },
  title: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px'
  },
  form: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px'
  },
  input: {
    flex: 1,
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px'
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: 0
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px',
    borderBottom: '1px solid #eee',
    fontSize: '15px'
  },
  statusDone: {
    fontSize: '12px',
    color: '#28a745',
    backgroundColor: '#d4edda',
    padding: '3px 8px',
    borderRadius: '10px',
    fontWeight: 'bold'
  },
  statusPending: {
    fontSize: '12px',
    color: '#856404',
    backgroundColor: '#fff3cd',
    padding: '3px 8px',
    borderRadius: '10px',
    fontWeight: 'bold'
  }
};

export default TodoList;