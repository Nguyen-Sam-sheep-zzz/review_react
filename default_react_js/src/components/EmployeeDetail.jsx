import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Employee() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Lấy thông tin admin đã đăng nhập từ Router State
  const loginData = location.state;

  // Dữ liệu danh sách Employee đề bài cung cấp
  const employees = [
    { id: 1, name: "Hoa", age: 20 },
    { id: 2, name: "Khánh", age: 25 },
    { id: 3, name: "Tú", age: 22 },
  ];

  // Hàm xử lý điều hướng khi nhấn nút Detail của một Employee
  const handleDetailClick = (employee) => {
    // Truyền trực tiếp object dữ liệu của employee đó qua router state
    navigate('/employee-detail', { state: { employeeDetails: employee } });
  };

  // Bảo vệ router: Nếu chưa đăng nhập (không có loginData) thì chặn truy cập
  if (!loginData) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
        <h3>Quyền truy cập bị từ chối! Vui lòng đăng nhập trước.</h3>
        <button onClick={() => navigate('/')} style={{ padding: '8px 15px' }}>Quay về Login</button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '600px', margin: '30px auto', fontFamily: 'Arial' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Trang Quản Lý Nhân Viên</h2>
        <span style={{ color: '#555' }}>Xin chào: <strong>{loginData.userEmail}</strong></span>
      </div>
      <hr />
      
      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th>ID</th>
            <th>Tên</th>
            <th>Tuổi</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.age}</td>
              <td>
                <button 
                  onClick={() => handleDetailClick(emp)}
                  style={{ backgroundColor: '#17a2b8', color: 'white', border: 'none', padding: '5px 12px', cursor: 'pointer', borderRadius: '3px' }}
                >
                  Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button 
        onClick={() => navigate('/')} 
        style={{ marginTop: '20px', padding: '8px 15px', backgroundColor: '#6c757d', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}
      >
        Đăng xuất
      </button>
    </div>
  );
}

export default Employee;