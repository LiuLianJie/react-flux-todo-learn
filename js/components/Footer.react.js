
var React = require('react');
var ReactPropTypes = require('react').PropTypes;
var AppActions = require('../actions/AppActions');

var Footer = React.createClass({
	propTypes:function(){
		allTodos: ReactPropTypes.object.isRequired
	},
	render: function(){
		var allTodos = this.props.allTodos;
		var total = Object.keys(allTodos).length;

		if(total===0){
			return null;
		}

		var complete = 0;
		for(var id in allTodos){
			if(allTodos[id].complete){
				complete++;
			}
		}
		var itemLeft = total - complete;
		var itemLeftPhrase = itemLeft === 1 ? ' item' : ' items';
		itemLeftPhrase += ' left';

		var clearCompleteButton;
		if(complete){
			clearCompleteButton = <button 
							id="clear-completed" 
							onClick={this._onClearCompletedClick}>
							clear button
						  </button>	
		}

		return (
			<footer>
				<span>
					<strong>
						{itemLeft}
					</strong>
					{itemLeftPhrase}
				</span>
				{clearCompleteButton}
			</footer>
		)
	},
	_onClearCompletedClick:function(){
		AppActions.destroyCompleted();
	}
});

module.exports = Footer;

