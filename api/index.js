const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const recaptcha = require('./routes/recaptcha')

// Express
const app = express()

// Body parser
app.use(express.json())

// Http headers security
app.use(helmet())

// Cors
app.use(cors())

// Morgan logger
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Mount router
app.use(recaptcha)

// Export express app
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}

// Start server
// const port = process.env.PORT || 7000
// const mode = process.env.NODE_ENV
// const server = app.listen(port, () => {
//   console.log(`Server Started in ${mode} mode on port ${port}`.green)
// })

// Handle unhandled promise rejections
// process.on('unhandledRejection', (err) => {
//   console.log(`error: ${err.message}`)
//   // Close server and exit process
//   server.close(() => process.exit(1))
// })

// module.exports = { path: '/api', handler: app }
