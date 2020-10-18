import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../action/cartActions.js'

class Item extends Component {
    render() {
        const { item, addToCart, cartItems } = this.props
        return (
            <div className="item">
                <a href={'#' + item.id}>
                    <img src={item.photo} alt={item.name} />
                    <p>
                        {item.name}
                    </p>
                </a>
                <div>
                    <div className="pricetag">
                        <div>${item.price}</div>
                    </div>
                    <button className="addtocart" onClick={() => addToCart(cartItems, item)}>
                        <div>Add To Cart</div>
                    </button>
                </div>
            </div>
        )
    } 
}

const mapStateToProps = (state) => {
	return {
		cartItems: state.cart.cartItems,
	};
}

export default connect(mapStateToProps,{addToCart})(Item);