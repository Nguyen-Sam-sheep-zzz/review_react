import { useEffect, useState } from 'react'
import './App.css'
import { Formik } from "formik";

function App() {

    // Regex kiểm tra định dạng email
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    };

    // Khởi tạo state form chứa giá trị nhập
    const [form, setForm] = useState({});

    // Cập nhật giá trị khi người dùng nhập
    function handleChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    }

    // Hàm validate kiểm tra lỗi cho từng trường
    function handleValidate() {
        const errors = {};

        // Kiểm tra email có tồn tại không
        if (!form.email) {
            errors.email = "Required";
        } else if (!REGEX.email.test(form.email)) {
            errors.email = "Invalid email address";
        }

        // Kiểm tra password có tồn tại không
        if (!form.password) {
            errors.password = "Required";
        }

        return errors;
    }

    // Hàm xử lý khi Submit thành công
    function handleSubmit() {
        alert("Login successfully!!!");
    }

    return (
        <div style={{ maxWidth: 400, margin: "0 auto", padding: 20 }}>
            <h1>Login</h1>
            <Formik
                initialValues={form}
                validate={handleValidate}
                onSubmit={handleSubmit}
            >
                {/* destructuring các props từ Formik */}
                {({ errors, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        {/* Email field */}
                        <div className={`custom-input ${errors.email ? "custom-input-error" : ""}`}>
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email || ""}
                                onChange={handleChange}
                            />
                            {errors.email && <p className="error">{errors.email}</p>}
                        </div>

                        {/* Password field */}
                        <div className={`custom-input ${errors.password ? "custom-input-error" : ""}`}>
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                value={form.password || ""}
                                onChange={handleChange}
                            />
                            {errors.password && <p className="error">{errors.password}</p>}
                        </div>

                        {/* Submit button */}
                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    );
}



export default App
