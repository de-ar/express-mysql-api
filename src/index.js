console.clear()
// imports
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 7714

// config
app.set('trust proxy', 1)
app.enable('trust proxy')

// middlewares
app.use(express.json())
app.use(morgan('dev'))
// app.use(helmet())
// app.use(cors())

// routes
app.use('/employees', require('./routes/employees'))

// start server
app.listen(PORT, () =>
  console.log(`api listening on http://localhost:${PORT}\n`),
)
