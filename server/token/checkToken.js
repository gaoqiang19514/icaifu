const jwt = require('jsonwebtoken')


module.exports = function(req, res, next){
	if(req.get('Authorization')){
		let token = req.get('Authorization').split(' ')[1];

		let decoded = jwt.decode(token, 'sinner77');

		if(decoded){
			return next();
		}
	}else{
		res.send('未认证')
	}
}
