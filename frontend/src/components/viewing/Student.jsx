import styles from './viewing.module.css'

const Student = ({ id, name, dob }) => {
  return (
    <p className={styles.student} key={id}>
      Name: {name} <br />
      DOB: {dob}
    </p>
  )
}

export default Student
