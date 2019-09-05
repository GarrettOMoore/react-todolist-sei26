import React, {Component} from 'react';

const Controls = (props) => {
		return(
			<>
				<input onChange={props.handleChange} type="text"></input>
				<button onClick={props.handleSubmit}>Add</button>
			</>
		)
};

export default Controls;