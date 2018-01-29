const jwt = require('jsonwebtoken')

const index = function(req, res){
	res.send('Hello')
}

const login = function(req, res){
	const token = jwt.sign({
        user_id: 'gaoqiang'
    }, 'sinner77', {
        expiresIn: '60s' //过期时间设置为60妙。那么decode这个token的时候得到的过期时间为 : 创建token的时间 +　设置的值
    });
	res.send({token: token})
}

const register = function(req, res){
	console.log(req.body)
	res.send('register')
}

module.exports = {
	index,
	login,
	register
}