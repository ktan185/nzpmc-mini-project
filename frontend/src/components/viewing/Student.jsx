import styles from './viewing.module.css'

const Student = ({ id, name, dob }) => {
  return (
    <p className={styles.student} key={id}>
      Name: {name} <br />
      DOB: {dob}
    </p>
  )
}

const StudentList = ({ students }) => {
  return (
    <div className={styles.listContainer}>
      {students.length > 0 ? (
        students.map((student) => (
          <Student key={student.id} name={student.name} dob={student.dob} />
        ))
      ) : (
        <p>No students exist!</p>
      )}
    </div>
  )
}

export default StudentList
