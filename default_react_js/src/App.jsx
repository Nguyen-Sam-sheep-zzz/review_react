import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Update from './components/Update'

function App() {
  const [students, setStudents] = useState([])

  const [editingStudent, setEditingStudent] = useState(null)

  const handleEditStudent = (index) => {
    setEditingStudent({
      ...students[index],
      index
    })
  }

  const handleCreateStudent = (student) => {
    setStudents([...students, student])
  }
  
  const handleDeleteStudent = (index) => {
    const newStudents = [...students]
    newStudents.splice(index, 1)
    setStudents(newStudents)
  }

  const handleUpdateStudent = (updatedStudent) => {
    const newStudents = [...students]
    newStudents[updatedStudent.index] = updatedStudent
    setStudents(newStudents)
  }



  return (
    <>
      <Home
        students={students}
        onSubmit={handleCreateStudent}
        onDelete={handleDeleteStudent}
        onEdit={handleEditStudent}
      />
      {
        editingStudent && (
          <Update
            student={editingStudent}
            onUpdate={handleUpdateStudent}
          />
        )
      }
    </>
  )

}

export default App
