
var React = require('react');
var TodoItem = require('./TodoItem.react');
var ReactPropTypes = require('react').PropTypes;
var AppActions = require('../actions/AppActions');

var Main = React.createClass({
	propsTypes:{
		allTodos: ReactPropTypes.object.isRequired,
		areAllComplete: ReactPropTypes.bool.isRequired
	},
	render: function(){
		var allTodos = this.props.allTodos;
		var todos = [];

		for(var key in allTodos){
			todos.push(<TodoItem key={key} todo={allTodos[key]}/>);
		}

		return (
			<div>
				<input 
					id="toggle-all"
					type="checkbox" 
					className="" 
					onChange={this.toggleAll}
					checked={this.props.areAllComplete?'checked':''}/>
				<lable>Mark all as complete</lable>
				<ul id="todo-list">
					{todos}
				</ul>
			</div>
		)
	},
	toggleAll: function(){
		AppActions.toggleCompleteAll();
	}
});

module.exports = Main;