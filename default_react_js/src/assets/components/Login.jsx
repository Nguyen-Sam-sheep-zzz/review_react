import { useState } from 'react';

function Login({ onLoginSuccess }) {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        if (email === "admin@gmail.com" && password === "123") {
            onLoginSuccess();
        } else {
            alert("wrong email or password");
        }
    };

    return (
        <form>
            <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="form2Example1">Email address:</label>
                <input type="email" id="form2Example1" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="form2Example2">Password</label>
                <input type="password" id="form2Example2" class="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4" onClick={handleSubmit}>Sign in</button>
        </form>
    )
}

export default Login