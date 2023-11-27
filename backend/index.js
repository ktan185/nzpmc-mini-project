require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const Student = require('./models/student')

const PORT = process.env.PORT
app.listen(PORT)
app.use(express.json())
app.use(cors())

console.log(`Server running on port ${PORT}`)

app.get('/api/students', (request, response) => {
  Student.find({}).then((students) => {
    response.json(students)
  })
})

app.get('/api/students/:id', (request, response) => {
  Student.findById(request.params.id).then((student) => {
    response.json(student)
  })
})

app.post('/api/students', (request, response) => {
  const body = request.body

  if (body === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

  const student = new Student({
    name: body.name,
    dob: body.dob,
  })

  student.save().then((savedStudent) => {
    response.json(savedStudent)
  })
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'validationError') {
    return response.status(400).json({ error: error.messagge })
  }
  next(error)
}
app.use(errorHandler)

app.get('/api/students/:id', (request, response, next) => {
  Student.findById(request.params.id)
    .then((student) => {
      if (student) {
        response.json(student)
      } else {
        response.status(404).end()
      }
    })
    .catch((error) => next(error))
})
