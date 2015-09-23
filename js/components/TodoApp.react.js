
var React = require('react');
var Header = require('./Header.react');
var Main = require('./Main.react');
var Footer = require('./Footer.react');
var TodoStore = require('../stores/TodoStore');

function getTodoState(){
	return {
		allTodos: TodoStore.getAll()
	}
}

var TodoApp = React.createClass({
	
	getInitialState: function(){
		return getTodoState();
	},
	componentDidMount: function(){
		TodoStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function(){
		TodoStore.removeChangeListener(this._onChange);
	},
	render: function(){
		return (
			<div>
				<Header/>
				<Main 
					allTodos={this.state.allTodos}
					areAllComplete={false}/>
				<Footer allTodos={this.state.allTodos}/>
			</div>
		)
	},
	_onChange: function(){
		this.setState(getTodoState());
	}
});

module.exports = TodoApp;