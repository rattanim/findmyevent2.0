import React from 'react';
import styles from '../index.css';

export default class Form extends React.Component {
	state = {
		eventName: '',
		notes: '',
		details: '',
		description: '',
		contactEmail: ''
	};

	change = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmit(this.state);
		this.setState({
			eventName: '',
			notes: '',
			details: '',
			description: '',
			contactEmail: ''
		});
	};

	render() {
		const inputStyle = {
			fontSize: '40px'
		};

		return (
			<form className="form-wrap" style={{ backgroundColor: 'blue' }}>
				<input
					style={inputStyle}
					name="eventName"
					placeholder="Event Name"
					value={this.state.eventName}
					onChange={(e) => this.change(e)}
				/>
				<br />
				<input
					className="form-input"
					name="notes"
					placeholder="Family Friendly?"
					value={this.state.notes}
					onChange={(e) => this.change(e)}
				/>
				<br />
				<input
					name="details"
					placeholder="Where?"
					value={this.state.details}
					onChange={(e) => this.change(e)}
				/>
				<br />
				<input
					name="description"
					placeholder="Location and other details."
					value={this.state.description}
					onChange={(e) => this.change(e)}
				/>
				<br />
				<input
					name="contactEmail"
					placeholder="Contact Email"
					value={this.state.contactEmail}
					onChange={(e) => this.change(e)}
				/>
				<br />
				<button onClick={(e) => this.onSubmit(e)}>Submit</button>
			</form>
		);
	}
}
