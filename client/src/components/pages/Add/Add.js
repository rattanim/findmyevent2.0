import React, { Component } from 'react';
import Form from '../../form';
// import Navbar from '../../NavBar';
// const add = () => (
// 	<div>
// 		<h2>Add page</h2>
// 	</div>
// );

class Add extends Component {
	onSubmit = (fields) => {
		console.log('Add comp got: ', fields);
	};

	render() {
		return (
			<div className="Add">
				<Form onSubmit={(fields) => this.onSubmit(fields)} />
			</div>
		);
	}
}

export default Add;
