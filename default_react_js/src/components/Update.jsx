import { useState } from 'react';

function Update(props) {

    const [name, setName] = useState(props.student.name);
    const [phone, setPhone] = useState(props.student.phone);
    const [email, setEmail] = useState(props.student.email);

    const handleUpdate = () => {

        if (
            name.trim() === '' ||
            phone.trim() === '' ||
            email.trim() === ''
        ) {
            alert('Please fill in all fields');
            return;
        }

        props.onUpdate({
            index: props.student.index,
            name,
            phone,
            email
        });
    };

    return (
        <div>

            <h2>Update Student</h2>

            <label>Name:</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <br />

            <label>Phone:</label>
            <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />

            <br />

            <label>Email:</label>
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <br />

            <button onClick={handleUpdate}>
                Save
            </button>

        </div>
    );
}

export default Update;