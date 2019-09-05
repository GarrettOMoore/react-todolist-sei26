import React from 'react';

const TodoListItem = (props) => {
	return(
		<div id="list-item-box">
			{props.item.isDone ? <li style={'text-decoration'= line-through}>{props.item.text}</li> : <li>{props.item.text}</li>}
			<p onClick={()=> props.toggle(props.index)} className="check-icons">	&#9745; </p>
			<p onClick={() => props.delete(props.index)} className="check-icons">&#x2716;</p>
		</div>
	)
};

export default TodoListItem;