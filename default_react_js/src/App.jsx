import { useEffect, useState } from 'react'
import './App.css'


function App() {
    // Thông báo lỗi tương ứng với từng trường
    const MESSAGE_ERROR = {
        email: "Email error",
        password: "Password error"
    };

    // Regex để kiểm tra định dạng email & password
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/ // tối thiểu 6 ký tự, cho phép ký tự đặc biệt
    };

    // Khởi tạo state 'form' để lưu giá trị & lỗi của từng trường
    const [form, setForm] = useState({});

    // Xử lý khi người dùng nhập vào input
    function handleChange(event) {
        const { name, value } = event.target;

        // Kiểm tra hợp lệ giá trị vừa nhập dựa trên regex
        const error = REGEX[name].test(value) ? "" : MESSAGE_ERROR[name];

        // Cập nhật lại state form với giá trị mới và lỗi tương ứng
        setForm({
            ...form,
            [name]: { value, error }
        });
    }

    // Xử lý khi nhấn Submit
    function handleSubmit() {
        const isFilled =
            form.email && form.email.value &&
            form.password && form.password.value;

        const isError =
            isFilled &&
            (form.email.error || form.password.error);

        alert(
            isFilled && !isError
                ? "Login successfully!!!"
                : "Please fill out all the fields!!!"
        );
    }

    return (
        <div style={{ maxWidth: 400, margin: "0 auto", padding: 20 }}>
            <h1>Login</h1>
            <form>
                {/* Email input */}
                <div className={`custom-input ${form.email && form.email.error ? "custom-input-error" : ""}`}>
                    <label>Email</label>
                    <input
                        name="email"
                        value={(form.email && form.email.value) || ""}
                        onChange={handleChange}
                    />
                    {/* Hiển thị lỗi nếu có */}
                    {form.email && form.email.error && (
                        <p className="error">{form.email.error}</p>
                    )}
                </div>

                {/* Password input */}
                <div className={`custom-input ${form.password && form.password.error ? "custom-input-error" : ""}`}>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={(form.password && form.password.value) || ""}
                        onChange={handleChange}
                    />
                    {/* Hiển thị lỗi nếu có */}
                    {form.password && form.password.error && (
                        <p className="error">{form.password.error}</p>
                    )}
                </div>

                {/* Submit button */}
                <button type="button" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    );
}


export default App
