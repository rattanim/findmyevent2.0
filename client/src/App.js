import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Events from './components/pages/Events/Events';
import Add from './components/pages/Add/Add';
// require other components
class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" component={Home} />
					<Route exact path="/events" component={Events} />
					<Route exact path="/add" component={Add} />
				</div>
			</Router>
		);
	}
}

export default App;
