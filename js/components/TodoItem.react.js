
var React = require('react');
var TodoTextInput = require('./TodoTextInput.react');
var ReactPropTypes = React.PropTypes;
var classNames = require('classnames');
var AppActions = require('../actions/AppActions');

var TodoItem = React.createClass({
	propsType:{
		todo: ReactPropTypes.object.isRequired
	},
	getInitialState: function(){
		return {
			isEditing: false
		}
	},
	render: function(){
		var todo = this.props.todo;

		var input;
		if(this.state.isEditing){
			input = <TodoTextInput className="edit" onSave={this._onSave} value={todo.text}/>
		}

		return (
			<li className={classNames({
				'completed':todo.complete,
				'editing':this.state.isEditing
				})} 
				id={this.props.id}>
				
				<div className="view">
					<input 
						type="checkbox"
						onChange={this._onToggleComplete}
						checked={todo.complete?'checked':''}/>
					<lable onDoubleClick={this._onDoubleClick}>{todo.text}</lable>
					<button className="" onClick={this._onDestroyClick}>delete</button>
				</div>
				{input}
			</li>
		)
		
	},
	_onSave:function(text){
		AppActions.updateText(this.props.todo.id,text);
		this.setState({isEditing:false});
	},
	_onDoubleClick:function(){
		this.setState({isEditing:true});
	},
	_onToggleComplete: function(){
		AppActions.toggleComplete(this.props.todo);
	},
	_onDestroyClick: function(){
		AppActions.destroy(this.props.todo.id);
	}
});

module.exports = TodoItem;