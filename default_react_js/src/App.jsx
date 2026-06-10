import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Employee from './components/Employee';
import EmployeeDetail from './components/EmployeeDetail';

function App() {
  return (
    <div>
      <Routes>
        {/* Route 1: Trang đăng nhập mặc định */}
        <Route path="/" element={<Login />} />
        
        {/* Route 2: Trang danh sách nhân viên */}
        <Route path="/employee" element={<Employee />} />
        
        {/* Route 3: Trang hiển thị chi tiết nhân viên */}
        <Route path="/employee-detail" element={<EmployeeDetail />} />
      </Routes>
    </div>
  );
}

export default App;