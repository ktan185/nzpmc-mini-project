import styles from './registration.module.css'
import { useNavigate } from 'react-router-dom'
import Form from './Form'

const Registration = () => {
  // Store navigation history
  const navigate = useNavigate()
  const navigateToViewing = () => {
    navigate('/viewing')
  }

  return (
    <div className={styles.formContainer}>
      <h1>Registration Page</h1>
      <Form />
      <div className={styles.buttonContainer}>
        <button onClick={navigateToViewing}>Go to viewing page</button>
      </div>
    </div>
  )
}

export default Registration
