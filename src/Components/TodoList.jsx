import React from 'react';
import TodolistItem from './TodoListItem'

const TodoList = (props) => {
	const allItems = props.items.map((item, key) => {
		return(
			<TodolistItem item={item} key={key} />
		)
	})
	return(
		<>
			<p>My Current List:</p>
			{allItems}
		</>
	)
};

export default TodoList;