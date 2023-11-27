import { useState, useEffect } from 'react'
import studentService from '../services/students'

const Viewing = () => {
  const [students, setStudents] = useState([])

  useEffect(() => {
    studentService
      .getAllStudents()
      .then((students) => {
        setStudents(students)
      })
      .catch((error) => {
        console.error('Error fetching students:', error)
      })
  }, [])

  return (
    <div>
      <h1>Students</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} {student.dob}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Viewing
