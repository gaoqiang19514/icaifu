const jwt = require('jsonwebtoken')

module.exports = function(user_id){
	return jwt.sign({
        user_id: user_id
    }, 'sinner77', {
        expiresIn: '60s'
    });
}