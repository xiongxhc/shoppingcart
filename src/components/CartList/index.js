import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.scss';
import { addToCart, removeFromCart } from '../../action/cartActions.js'
import CartItem from './CartItem.js'

class CartList extends Component {
	render() {
		const { login, cartItems } = this.props
		var sum = 0
		cartItems.forEach(each => {
			sum += Number(each.price) * Number(each.count)
		});
		return (
			<div>
				{ login ?
					<React.Fragment>
						<div className="cartlist">
							<div className="cartproducts">
								{cartItems.length !== 0 ? cartItems.map(each => (
									<CartItem key={each.id} item={each} />
								)) : 
									<div className="emptycart">
										<p>Your cart is empty</p>
									</div>
								}
							</div>
						</div>
						<div className="checkout">
							<div className="values">
								<div>
									<p>Total Item</p>
									<p>{cartItems.length}</p>
								</div>
								<div>
									<p>Total Payment</p>
									<p>${sum.toFixed(2)}</p>
								</div>
							</div>
							<div>
								<button>Checkout</button>
							</div>
						</div> 
					</React.Fragment>
					:
					<div className="emptycart">
						<p>Please login to view cart</p>
					</div>
				}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		login: state.user.login,
		cartItems: state.cart.cartItems,
	};
}

export default connect(mapStateToProps,{addToCart, removeFromCart})(CartList);