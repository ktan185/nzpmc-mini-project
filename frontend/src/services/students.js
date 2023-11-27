import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/students/'

const getAllStudents = () => {
  const request = axios.get(baseUrl)
  return request.then((response) => response.data)
}

const getMatchingStudents = (studentName) => {
  const request = axios.get(`${baseUrl}${studentName}`)
  return request.then((response) => response.data)
}

const createStudent = (newStudent) => {
  const request = axios.post(baseUrl, newStudent)
  return request.then((response) => response.data)
}

export default {
  getAllStudents,
  getMatchingStudents,
  createStudent,
}
