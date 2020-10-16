import React, { Component } from 'react';
import './index.scss';

class CartList extends Component {
	render() {
		return (
			<div className="cartlist">
				{/* <div className="cartproducts">
					{this.props.products.length !== 0 ? this.props.products.map(each => (
						<div key={each.id}>{each.name}</div>
					)) : 
						<div className="emptycart">
							<p>Sorry, no product has been added to cart</p>
						</div>
					}
				</div> */}
			</div>
		);
	}
}

export default CartList;