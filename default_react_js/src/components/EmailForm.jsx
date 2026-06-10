import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function EmailForm() {
  // 1. Giá trị khởi tạo ban đầu cho các trường trong Form
  const initialValues = {
    to: '',
    title: '',
    message: '',
    attachment: null, // Lưu thông tin file upload
  };

  // 2. Hàm Validate kiểm tra điều kiện dữ liệu
  const handleValidate = (values) => {
    const errors = {};

    // Validate trường "To" (Email nhận)
    if (!values.to.trim()) {
      errors.to = 'Required';
    } else {
      // Biểu thức Regex kiểm tra định dạng email theo đúng yêu cầu đề bài:
      // - Trước @: Chấp nhận a-z, A-Z, 0-9, và ký tự +, -
      // - Sau @: Chấp nhận a-z, A-Z, 0-9, và ký tự -
      const emailRegex = /^[a-zA-Z0-9+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      if (!emailRegex.test(values.to)) {
        errors.to = 'Invalid email address';
      }
    }

    // Validate trường "Title"
    if (!values.title.trim()) {
      errors.title = 'Required';
    }

    // Validate trường "Message"
    if (!values.message.trim()) {
      errors.message = 'Required';
    }

    return errors;
  };

  // 3. Hàm xử lý khi người dùng nhấn "Submit" thành công
  const handleSubmit = (values, { resetForm }) => {
    // Log thử dữ liệu ra màn hình console để kiểm tra thông tin file đính kèm nếu có
    console.log('Dữ liệu gửi đi:', values);
    
    // Hiển thị thông báo thành công theo yêu cầu bài toán
    alert('Sent successfully!!!');
    
    // Xóa sạch form sau khi gửi thành công
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={handleValidate}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue }) => (
        <Form style={styles.formContainer}>
          <h3 style={styles.formTitle}>Soạn Thảo Email</h3>

          {/* Trường Người nhận (To) */}
          <div style={styles.formGroup}>
            <label style={styles.label}>To:</label>
            <Field type="text" name="to" style={styles.input} placeholder="Ví dụ: abc+123@domain.com" />
            <ErrorMessage name="to" component="div" style={styles.error} />
          </div>

          {/* Trường Tiêu đề (Title) */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Title:</label>
            <Field type="text" name="title" style={styles.input} />
            <ErrorMessage name="title" component="div" style={styles.error} />
          </div>

          {/* Trường Nội dung (Message) */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Message:</label>
            <Field as="textarea" name="message" rows="6" style={styles.textarea} />
            <ErrorMessage name="message" component="div" style={styles.error} />
          </div>

          {/* Trường Upload File (Attachment) */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Attachment:</label>
            <input
              type="file"
              name="attachment"
              style={styles.fileInput}
              onChange={(event) => {
                // Formik không tự bắt sự kiện file input mặc định, ta cần gán thủ công qua setFieldValue
                const file = event.currentTarget.files[0];
                setFieldValue('attachment', file);
              }}
            />
          </div>

          {/* Nút Submit */}
          <button type="submit" style={styles.submitBtn}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

// Đối tượng chứa CSS inline giúp giao diện nhìn gọn gàng và hiện đại hơn
const styles = {
  formContainer: {
    border: '1px solid #e0e0e0',
    padding: '25px',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
  },
  formTitle: {
    margin: '0 0 20px 0',
    color: '#333',
    borderBottom: '2px solid #3f51b5',
    paddingBottom: '10px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  textarea: {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
    borderRadius: '4px',
    border: '1px solid #ccc',
    resize: 'vertical',
  },
  fileInput: {
    display: 'block',
    marginTop: '5px',
  },
  error: {
    color: '#d32f2f',
    fontSize: '13px',
    marginTop: '4px',
  },
  submitBtn: {
    backgroundColor: '#3f51b5',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
  },
};

export default EmailForm;