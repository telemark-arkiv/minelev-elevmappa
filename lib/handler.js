const { readFileSync } = require('fs')
const md = require('markdown-it')()
const { send } = require('micro')

exports.frontpage = (request, response) => {
  const readme = readFileSync(`${__dirname}/../README.md`, 'utf-8')
  send(response, 200, md.render(readme))
}

exports.showFile = (request, response) => {
  const file = readFileSync(`${__dirname}/../lib/data/digital-strategi.pdf`, 'utf-8')
  send(response, 200, file.toString('base64'))
}
