const createToken = require('../token/createToken.js');

const index = function(req, res){
	res.send('home page')
}

const login = function(req, res){

	let username = req.param('username')
	let password = req.param('password')

	setTimeout(() => {

		if(username && username === 'Fred' && password && password === 'Flintstone'){
			const token = createToken(username)
			res.send({
				code: 1,
				text: '登录成功',
				token: token
			})
		}else{
			res.send({
				code: 0,
				text: '用户名或密码错误'
			})
		}
	}, 2000)
	
}

const getUsers = function(req, res){
	res.send([
		{id: 1, name: '撒点粉', age: 12},
		{id: 2, name: 'sdfdsf', age: 12},
		{id: 3, name: '发撒旦法', age: 65},
		{id: 4, name: '撒点粉', age: 12},
		{id: 5, name: '水电费', age: 345},
		{id: 6, name: 'sdfdsf', age: 12},
		{id: 7, name: 'sdfdsf', age: 456},
		{id: 8, name: '阿什顿飞', age: 456},
		{id: 9, name: '撒点粉', age: 12}
	])
}

module.exports = {
	index,
	login,
	getUsers
}

