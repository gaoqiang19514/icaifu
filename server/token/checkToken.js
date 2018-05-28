const jwt = require('jsonwebtoken')


module.exports = function(req, res, next){
	return next();
	if(req.get('Authorization')){
		let token = req.get('Authorization').split(' ')[1];

		let decoded = jwt.decode(token, 'sinner77');

		if(decoded){
			return next();
		}
	}else{
		res.status(401).send({
            type: 'fail',
            text: 'token过期'
        })
	}
}
