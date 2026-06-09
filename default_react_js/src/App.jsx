import { useEffect, useState } from 'react'
import './App.css'

const MESSAGE_ERROR = {
    username: "Username error",
    email: "Email error",
    password: "Password error",
    confirmPassword: "Password must be the same"
};

const REGEX = {
    username: /^[a-zA-Z]{2,}$/, // chỉ chấp nhận chữ cái, tối thiểu 2 ký tự
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // định dạng email chuẩn
    password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/ // mật khẩu có thể chứa ký tự đặc biệt, tối thiểu 6 ký tự
};

function App() {

    const [form, setForm] = useState({});

    function handleChange(event) {
        let error = ""; // biến để lưu lỗi nếu có
        const { name, value } = event.target; // lấy tên trường và giá trị mới

        // Logic validate từng trường:
        if (name === "password") {
            // Nếu đang nhập password và confirmPassword đã nhập
            if (form.confirmPassword && form.confirmPassword.value) {
                // So sánh password với confirmPassword
                error = value === form.confirmPassword.value ? "" : MESSAGE_ERROR[name];
            } else {
                // Nếu chưa có confirmPassword, kiểm tra password theo regex
                error = REGEX[name].test(value) ? "" : MESSAGE_ERROR[name];
            }
        } else if (name === "confirmPassword") {
            // Với confirmPassword, kiểm tra khớp với password
            error = value === (form.password ? form.password.value : "") ? "" : MESSAGE_ERROR[name];
        } else {
            // Với username và email, kiểm tra theo regex tương ứng
            error = REGEX[name].test(value) ? "" : MESSAGE_ERROR[name];
        }

        // Cập nhật lại state form với value và lỗi mới của trường đang nhập
        setForm({
            ...form, // giữ nguyên dữ liệu cũ của các trường khác
            [name]: { value, error } // cập nhật giá trị và lỗi mới cho trường này
        });
    }

    function handleSubmit() {
        // Kiểm tra tất cả các trường đã có giá trị (không trống)
        const isFilled =
            form.username && form.username.value &&
            form.email && form.email.value &&
            form.password && form.password.value &&
            form.confirmPassword && form.confirmPassword.value;

        // Kiểm tra có trường nào đang có lỗi hay không
        const isError =
            isFilled &&
            (form.username.error || form.email.error || form.password.error || form.confirmPassword.error);

        // Nếu đủ dữ liệu và không có lỗi thì alert thành công, ngược lại yêu cầu nhập đủ đúng thông tin
        alert(isFilled && !isError
            ? "Sign up successfully!!!"
            : "Please fill out all the fields!!!");
    }


    return (
        <div style={{ maxWidth: 400, margin: "0 auto", padding: 20 }}>
            <h1>Sign up</h1>
            <form>
                {/* Username input với highlight lỗi nếu có */}
                <div className={`custom-input ${form.username && form.username.error ? "custom-input-error" : ""}`}>
                    <label>Username</label>
                    <input
                        name="username"
                        value={(form.username && form.username.value) || ""}
                        onChange={handleChange} // gọi validate từng ký tự nhập
                    />
                    {/* Hiển thị lỗi nếu có */}
                    {form.username && form.username.error && <p className="error">{form.username.error}</p>}
                </div>

                {/* Email input */}
                <div className={`custom-input ${form.email && form.email.error ? "custom-input-error" : ""}`}>
                    <label>Email</label>
                    <input
                        name="email"
                        value={(form.email && form.email.value) || ""}
                        onChange={handleChange}
                    />
                    {form.email && form.email.error && <p className="error">{form.email.error}</p>}
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
                    {form.password && form.password.error && <p className="error">{form.password.error}</p>}
                </div>

                {/* Confirm Password input */}
                <div className={`custom-input ${form.confirmPassword && form.confirmPassword.error ? "custom-input-error" : ""}`}>
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={(form.confirmPassword && form.confirmPassword.value) || ""}
                        onChange={handleChange}
                    />
                    {form.confirmPassword && form.confirmPassword.error && <p className="error">{form.confirmPassword.error}</p>}
                </div>

                {/* Nút submit */}
                <button type="button" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}


export default App
