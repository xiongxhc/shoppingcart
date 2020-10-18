import React from 'react';
import Header from '../components/Header';
import CartList from '../components/CartList';
import Footer from '../components/Footer';

class Cart extends React.Component {
	render() {
		return (
			<div className="App">
				<Header />
				<CartList />
				<Footer />
			</div>
		);
	}
}

export default Cart;
