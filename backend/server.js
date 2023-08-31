const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 8000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/quests', require('./routes/questRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server has started on port ${port}`))
