import { useState } from 'react'
import styles from './registration.module.css'
import studentService from '../../services/students'

const Registration = () => {
  const [name, setName] = useState('')
  const [dob, setDob] = useState('')
  const [submitStatus, setSubmitStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submit!', name, dob)

    // Inform the user that they have succesfully submitted.
    setSubmitStatus('Your registration has been submitted successfully.')

    // Create the student data to send to MongoDB.
    const newStudent = {
      name: name,
      dob: dob,
    }
    // Post the data to MongoDB.
    studentService.create(newStudent).then((response) => {
      console.log(response)
    })

    // Reset the input fields
    setName('')
    setDob('')
  }

  return (
    <div className={styles.formContainer}>
      <h1>Registration Page</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="name">Please input your name</label>
        <input
          required
          className={styles.inputField}
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="dob">Please select your Date of Birth</label>
        <input
          required
          className={styles.dobSelect}
          type="date"
          id="dob"
          name="dob"
          value={dob}
          placeholder="dd/mm/yyyy"
          onChange={(e) => setDob(e.target.value)}
        />
        <button type="submit">Submit</button>
        {submitStatus && (
          <p className={styles.successMessage}>{submitStatus}</p>
        )}
      </form>

      <div className={styles.buttonContainer}>
        <button onClick={() => (window.location.href = '/viewing')}>
          Go to viewing page
        </button>
      </div>
    </div>
  )
}

export default Registration
