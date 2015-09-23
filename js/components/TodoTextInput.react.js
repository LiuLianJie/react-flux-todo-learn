/**
 * Copyright (c) 2015, jliu
 * All rights reserved.
 * 
 * THis module for todo input
 *	<TodoTextInput 
 *		id="todotext" 
 *		className="todo-input" 
 *		placeHoder="please fill some tasks"
 *		onSave={this.save}
 *		value="default"/>
 */

var React = require('react');
var ReactPropTypes = React.PropTypes;

var ENTER_KEY_CODE = 13;

var TodoTextInput = React.createClass({
	propTypes:{
		className: ReactPropTypes.string,
		id: ReactPropTypes.string,
		placeHoder: ReactPropTypes.string,
		onSave: ReactPropTypes.func.isRequired,
		value: ReactPropTypes.string
	},
	getInitialState: function(){
		return {
			value:this.props.value || ''
		}
	},
	render: function(){
		return (
			<div>
				<input 
					className={this.props.className}
					id={this.props.id} 
					placeHoder={this.props.placeHoder}
					onBlur={this._save}
					onChange={this._onChange}
					onKeyDown={this._onKeyDown}
					value={this.state.value}
					autoFocus={true}
				/>
			</div>
		)
	},
	_save:function(){
		this.props.onSave(this.state.value);
		this.setState({
			value:''
		})
	},
	_onChange:function(e){
		this.setState({
			value:e.target.value
		});
	},	
	_onKeyDown:function(event){
		if(event.keyCode === ENTER_KEY_CODE){
			this._save();
		}
	}
});

module.exports = TodoTextInput;