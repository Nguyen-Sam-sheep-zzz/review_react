
function StudentInfo(props) {
    return (
        <table style={{ border: '1px solid black' }}>
            <thread>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                </tr>
            </thread>
            <tbody>
                {
                    props.data.map((student) => (
                        <tr>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.address}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

export default StudentInfo;