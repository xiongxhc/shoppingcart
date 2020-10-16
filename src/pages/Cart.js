import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Cart extends React.Component {
	render() {
        const {
            cart, search, searching, filter, filtering, products, addToCart
        } = this.props
		return (
			<div className="Home">
				<Header />
				
				<Footer />
			</div>
		);
	}
}

export default Cart;
