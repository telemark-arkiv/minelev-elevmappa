// Packages
const Router = require('router')
const finalhandler = require('finalhandler')
const cors = require('cors')
const jwt = require('express-jwt')

// Utilities
const handler = require('./lib/handler')
const JWT_SECRET = process.env.JWT_SECRET
const handleUnauthorized = require('./lib/handle-unauthorized')

// Initialize a new router
const router = Router()

// CORS
router.use(cors())

// JWT
if (JWT_SECRET) {
  router.use(jwt({ secret: JWT_SECRET }).unless({ path: ['/'] }))
  router.use(handleUnauthorized)
}

// ROUTES
router.get('/', handler.frontpage)
router.get('/api/files/:id', handler.showFile)
router.get('/api/students', handler.getStudents)
router.get('/api/students/:id', handler.getStudent)

module.exports = (request, response) => {
  router(request, response, finalhandler(request, response))
}
