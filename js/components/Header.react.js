
var React = require('react');
var TodoTextInput = require('./TodoTextInput.react');
var AppActions = require('../actions/AppActions');

var Header = React.createClass({
	render: function(){
		return (
			<header id="header">
				<h1>todos</h1>
				<TodoTextInput 
					id="new-todo"
					placeHoder="What needs to be done?"
					onSave={this.save}
				/>
			</header>
		)
	},
	save: function(text){
		if(text.trim()){
			AppActions.create(text);
		}
	}
});

module.exports = Header;
