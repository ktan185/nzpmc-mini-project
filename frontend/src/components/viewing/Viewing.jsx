import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import studentService from '../../services/students'
import styles from './viewing.module.css'
import StudentList from './Student'
import SearchBar from './Search'

const Viewing = () => {
  const [students, setStudents] = useState([])

  const navigate = useNavigate()
  const navigateToRegistration = () => {
    navigate('/')
  }

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

  const handleStudentSearch = (searchResults) => {
    setStudents(searchResults)
  }

  return (
    <div>
      <h1>Student Registry</h1>
      <SearchBar onSearchComplete={handleStudentSearch} />
      <StudentList students={students} />
      <div className={styles.buttonContainer}>
        <button onClick={navigateToRegistration}>
          Go to registration page
        </button>
      </div>
    </div>
  )
}

export default Viewing
