
var React = require('react');
var TodoItem = require('./TodoItem.react');

var Main = React.createClass({
	render: function(){
		return (
			<ul>
				<TodoItem todo="sdfsdf"/>
				<TodoItem todo="2324"/>
				<TodoItem todo="23dfs"/>
			</ul>
		)
	}
});

module.exports = Main;