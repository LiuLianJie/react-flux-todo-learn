/**
 *
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/TodoConstants');


var TodoActions = {
	create: function(text){
		AppDispatcher.dispatch({
			actionType:TodoConstants.TODO_CREATE,
			value:text
		});
	}
}

module.exports = TodoActions;