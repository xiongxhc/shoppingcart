import React from 'react';
import Header from './components/Header';
import Grid from './components/Grid';
import Footer from './components/Footer';

import data from './db/products.json'

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			cart: []
		};
	}

	addToCart = (item) => {
		const currCart = this.state.cart.slice();
		var hasItem = false;
		currCart.forEach((i) => {
			if(i.id === item.id) {
				i.count++;
				hasItem = true;
			}
		})
		if(!hasItem) {
			currCart.push({...item, count: 1})
		}
		this.setState({
			cart: currCart
		})
	}

	render() {
		return (
			<div className="App">
				<Header cart={this.state.cart}/>
				<Grid 
					addToCart={this.addToCart}
				/>
				<Footer />
			</div>
		);
	}
}

export default App;
