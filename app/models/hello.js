var Base = require( './base' );

module.exports = Base.extend({
	defaults : {
		hello : "world"
	},
	className : "hello-world"
});
module.exports.id = 'Hello';