import axios from 'axios'
const baseUrl = 'http://localhost:3001/students'

const getAllStudents = () => {
  const request = axios.get(baseUrl)
  return request.then((response) => response.data)
}

const create = (newStudent) => {
  const request = axios.post(baseUrl, newStudent)
  return request.then((response) => response.data)
}

export default {
  getAllStudents,
  create,
}
