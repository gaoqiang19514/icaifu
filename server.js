const express = require('express')
const app = new express()
const bodyParser = require('body-parser')
const router = express.Router();
const routes = require('./server/routes')
const checkToken = require('./server/token/checkToken.js')

app.use(bodyParser.json())

router.get('/', routes.index)

router.get('/users', checkToken, routes.getUsers)
router.post('/login', routes.login)

app.use('/', router)

app.listen(8888, function(){
	console.log('Express server listening')
})