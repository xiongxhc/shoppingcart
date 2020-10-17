import React from 'react';
import Header from './components/Header';
import Grid from './components/Grid';
import Footer from './components/Footer';

import data from './db/products.json'

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			products: data.Products,
			search: "",
			filter: "",
			cart: []
		};
	}

	searching = (e) => {
		const { value } = e.target;
		const searchValue = value.toString().toLowerCase();
		this.setState({
			search: searchValue,
			products: this.state.products.filter(each => each.name.toString().toLowerCase().includes(searchValue))
		})
	}

	filtering = (e) => {
		const { value } = e.target;
		if (value === "low") {
			this.setState({
				filter: value,
				products: this.state.products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
			})
		}
		if (value === "high") {
			this.setState({
				filter: value,
				products: this.state.products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
			})
		}
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
					search={this.state.search}
					searching={this.searching}
					filter={this.state.filter}
					filtering={this.filtering}
					// products={this.state.products}
					addToCart={this.addToCart}
				/>
				<Footer />
			</div>
		);
	}
}

export default App;
