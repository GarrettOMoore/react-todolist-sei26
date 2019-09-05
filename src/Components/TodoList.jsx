import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = (props) => {
	const showItems = props.items.map((item, key) => {
		return(
			<TodoListItem 
				toggle={props.toggle} 
				item={item} 
				key={key} 
				index={key} 
				delete={props.delete} 
			/>
		)
	})
	return(
		<>
			{showItems}
		</>
	)
};

export default TodoList;