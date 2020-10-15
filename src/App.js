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
			filter: ""
		};
	}

	searching = (e) => {
		const { value } = e.target;
		const searchValue = value.toString().toLowerCase();
		console.log(searchValue)
		
		this.setState({
			search: searchValue,
			products: data.Products.filter(each => each.name.toString().toLowerCase().includes(searchValue))
		})
	}

	filtering = (e) => {
		const { value } = e.target;
		if (value === "low") {
			this.setState({
				filter: e.target.value,
				products: data.Products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
			})
		}
		if (value === "high") {
			this.setState({
				filter: e.target.value,
				products: data.Products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
			})
		}
	}

	render() {
		return (
			<div className="App">
				<Header />
				<Grid 
					search={this.state.search}
					searching={this.searching}
					filter={this.state.filter}
					filtering={this.filtering}
					products={this.state.products}
				/>
				<Footer />
			</div>
		);
	}
}

export default App;
