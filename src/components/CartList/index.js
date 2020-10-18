import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.scss';
import { addToCart, removeFromCart } from '../../action/cartActions.js'

class CartList extends Component {
	render() {
		const { cartItems } = this.props
		return (
			<div className="cartlist">
				<div className="cartproducts">
					{cartItems.length !== 0 ? cartItems.map(each => (
						<div key={each.id}>{each.name}</div>
					)) : 
						<div className="emptycart">
							<p>Your cart is empty</p>
						</div>
					}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		cartItems: state.cart.cartItems,
	};
}

export default connect(mapStateToProps,{addToCart, removeFromCart})(CartList);