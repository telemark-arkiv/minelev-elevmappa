const { readFileSync } = require('fs')
const md = require('markdown-it')()
const { send } = require('micro')

exports.frontpage = async (request, response) => {
  const readme = readFileSync(`${__dirname}/../README.md`, 'utf-8')
  send(response, 200, md.render(readme))
}

exports.showFile = async (request, response) => {
  const file = readFileSync(`${__dirname}/../lib/data/smalltest.pdf`)
  send(response, 200, { file: file.toString('base64') })
}

exports.getStudents = async (request, response) => {
  const students = require('./data/students.json')
  send(response, 200, students)
}

exports.getStudent = async (request, response) => {
  const { id } = request.params
  const students = require('./data/students.json')
  const student = students.find(student => student.userName === id)
  send(response, 200, student)
}
