const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require('./controller/gameController')(app)


app.listen(3333, () => console.log('Server rodando na porta 3333'))