import React, {Component} from 'react';

class TodoListItem extends Component {
	constructor(props) {
		super(props)
		this.state = {
			completed: false
		}
		this.toggleFinishedItem = this.toggleFinishedItem.bind(this);
	}

	toggleFinishedItem() {
		this.setState({
			completed: true
		})
	}
	
	render() {
		let text = this.state.completed ?  <s>{this.props.item.text}</s> : <p>{this.props.item.text}</p>;
		
		return(
	
			<div id="list-item-box">
				{text}
				<p onClick={this.toggleFinishedItem} className="check-icons">	&#9745; </p>
				<p onClick={() => this.props.delete(this.props.index)} className="check-icons"> &#x2716; </p>
			</div>
		)
	}
};

export default TodoListItem;