import React from 'react';
import Header from './components/Header';
import Grid from './components/Grid';
import Footer from './components/Footer';

class App extends React.Component {

	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className="App">
				<Header />
				<Grid />
				<Footer />
			</div>
		);
	}
}

export default App;
