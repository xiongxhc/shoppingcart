import React from 'react';
import Header from '../components/Header';
import CartList from '../components/CartList';
import Footer from '../components/Footer';

class Cart extends React.Component {
	render() {
        const {
            cart, search, searching, filter, filtering, products, addToCart
        } = this.props
		return (
			<div className="Home">
				<Header />
				{/* <CartList products={products}/> */}
				<Footer />
			</div>
		);
	}
}

export default Cart;
