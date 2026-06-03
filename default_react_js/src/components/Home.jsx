import { useState } from 'react';
function Home(props) {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    function handleAddStudent() {
        if (name.trim() === '' || phone.trim() === '' || email.trim() === '') {
            alert('Please fill in all fields')
            return
        }

        const student = {
            name,
            phone,
            email
        };

        props.onSubmit(student);
        
        setName('')
        setPhone('')
        setEmail('')
    }

    return (
        <div>
            <h1>Student List</h1>
            <label htmlFor="Name">Name:</label>
            <input type="text" id="Name" name="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <label htmlFor="Phone">Phone:</label>
            <input type="text" id="Phone" name="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <br />  
            <label htmlFor="Email">Email:</label>
            <input type="text" id="Email" name="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            <button type="submit" onClick={handleAddStudent}>
                add student
            </button>

            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        props.students.map((student, index) => (
                            <tr key={index}>
                                <td>{student.name}</td>
                                <td>{student.phone}</td>
                                <td>{student.email}</td>

                                <td>
                                    <button
                                        onClick={() => props.onEdit(index)}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() => props.onDelete(index)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Home