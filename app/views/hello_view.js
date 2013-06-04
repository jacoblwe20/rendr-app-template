var BaseView = require('./base_view');

module.exports = BaseView.extend({
  className: 'hello_view',
  events : {
  	"click .hello-title" : "clicked"
  },
  clicked : function(){
  	debugger;
  }
});
module.exports.id = 'HelloView';
