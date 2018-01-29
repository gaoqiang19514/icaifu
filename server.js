const express = require('express')
const app = new express()
const bodyParser = require('body-parser')


const routes = require('./server/routes')

app.use(bodyParser.json())

app.get('/', routes.index)

app.post('/login', routes.login)
app.post('/register', routes.register)

app.listen(8888, function(){
	console.log('Express server listening')
})