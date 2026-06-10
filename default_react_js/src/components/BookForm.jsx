import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function BookForm({ editingBook, onSubmit, onCancel }) {
    
  const handleValidate = (values) => {
    const errors = {};
    if (!values.title.trim()) {
      errors.title = 'Required';
    }
    if (!values.quantity) {
      errors.quantity = 'Required';
    } else if (isNaN(Number(values.quantity)) || Number(values.quantity) <= 0) {
      errors.quantity = 'Phải là số lớn hơn 0';
    }
    return errors;
  };

  return (
    <Formik
      initialValues={{
        title: editingBook ? editingBook.title : '',
        quantity: editingBook ? editingBook.quantity : ''
      }}
      enableReinitialize={true} // Tự động cập nhật form khi chọn sách khác để sửa
      validate={handleValidate}
      onSubmit={(values, actions) => {
        onSubmit(values);
        actions.resetForm(); // Xóa sạch dữ liệu form sau khi submit thành công
      }}
    >
      {() => (
        <Form style={{ marginBottom: '30px', border: '1px solid #ccc', padding: '15px', borderRadius: '5px' }}>
          <h3>{editingBook ? 'Cập nhật thông tin sách' : 'Thêm sách mới'}</h3>
          
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block' }}>Tiêu đề:</label>
            <Field type="text" name="title" style={{ width: '100%', padding: '5px' }} />
            <ErrorMessage name="title" component="div" style={{ color: 'red', fontSize: '14px' }} />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block' }}>Số lượng:</label>
            <Field type="number" name="quantity" style={{ width: '100%', padding: '5px' }} />
            <ErrorMessage name="quantity" component="div" style={{ color: 'red', fontSize: '14px' }} />
          </div>

          <button type="submit" style={{ padding: '7px 15px', cursor: 'pointer', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '3px' }}>
            {editingBook ? 'Update' : 'Submit'}
          </button>
          
          {editingBook && (
            <button 
              type="button" 
              onClick={onCancel} 
              style={{ marginLeft: '10px', padding: '7px 15px', cursor: 'pointer' }}
            >
              Hủy bỏ
            </button>
          )}
        </Form>
      )}
    </Formik>
  );
}

export default BookForm;