const express = require('express')
const app = new express()
const bodyParser = require('body-parser')
const router = express.Router();
const routes = require('./server/routes')
const checkToken = require('./server/token/checkToken.js')

app.use(bodyParser.json())
app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
router.get('/', routes.index)

router.get('/users', checkToken, routes.getUsers)
router.post('/verifyToken', routes.verifyToken)
router.post('/login', routes.login)

app.use('/', router)

app.listen(8888, function(){
	console.log('Express server listening')
})