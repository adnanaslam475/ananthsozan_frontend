const express = require('express');
require('./db/mongoose')
const cors = require('cors');
const Auth = require('./routers/user')
const app = express()
app.use(cors())
app.use(express.json())

app.use('/', Auth)
module.exports = app
