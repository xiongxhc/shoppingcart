import React, { Component } from 'react';
import './index.scss';

class CartList extends Component {
	render() {
		return (
			<div className="cart">
				{/* <div className="products">
					{this.props.products.length !== 0 ? this.props.products.map(each => (
						<div key={each.id}>{each.name}</div>
					)) : 
						<div className="empty">
							<p>Sorry, no product has been added to cart</p>
						</div>
					}
				</div> */}
			</div>
		);
	}
}

export default CartList;