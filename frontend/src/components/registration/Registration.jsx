import styles from './registration.module.css'
import Form from './Form'

const Registration = () => {
  return (
    <div className={styles.formContainer}>
      <h1>Registration Page</h1>
      <Form />
      <div className={styles.buttonContainer}>
        <button onClick={() => (window.location.href = '/viewing')}>
          Go to viewing page
        </button>
      </div>
    </div>
  )
}

export default Registration
