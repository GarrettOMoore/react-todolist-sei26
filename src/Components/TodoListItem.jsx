import React from 'react';

const TodoListItem = (props) => {
	return(
		<li>
			{props.item.text}
		</li>
	)
};

export default TodoListItem;