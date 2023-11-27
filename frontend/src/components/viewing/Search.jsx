import { useState } from 'react'
import studentService from '../../services/students'
import styles from './viewing.module.css'

const SearchBar = ({ onSearchComplete }) => {
  const [studentToSearch, setSearchStudent] = useState([])

  function searchForStudent(searchTerm) {
    console.log('searching!', searchTerm)

    // Search database for matching results
    studentService
      .getMatchingStudents(searchTerm)
      .then((students) => {
        onSearchComplete(students)
      })
      .catch((error) => {
        console.error('Error fetching specific students:', error)
        onSearchComplete([])
      })
  }

  return (
    <div className={styles.searchBar}>
      <label>
        <input
          placeholder="Search For Student"
          className={styles.inputField}
          id="name"
          type="text"
          name="name"
          value={studentToSearch}
          onChange={(e) => setSearchStudent(e.target.value)}
        />
      </label>
      <button onClick={() => searchForStudent(studentToSearch)}>search</button>
    </div>
  )
}

export default SearchBar
