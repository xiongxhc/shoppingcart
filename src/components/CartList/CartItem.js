import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart, removeFromCart } from '../../action/cartActions.js'
import { TrashIcon } from '../../icons'

class CartItem extends Component {
    render() {
        const { item, addToCart, removeFromCart, cartItems } = this.props
        var itemCount = item.count
        cartItems.find(each => {
            if(each.id === item.id) {
                itemCount = each.count
            }
        })
        return (
            <div className="cartitem">
                <a href={'#' + item.id}>
                    <img src={item.photo} alt={item.name} />
                </a>
                <div className="itemname">
                    <p>{item.name}</p>
                </div>
                <div className="quantity">
                    <p>Quantity: {itemCount}</p>
                </div>
                <div>
                    <div className="pricetag">
                        <div>${item.price}</div>
                    </div>
                    <div className="buttonset">
                        <button className="increase" onClick={() => addToCart(item)}>
                            <div>+</div>
                        </button>
                        <button className="decrease" onClick={() => removeFromCart(item)}>
                            <TrashIcon width={10}/>
                        </button>
                    </div>
                </div>
            </div>
        )
    } 
}

const mapStateToProps = (state) => {
	return {
        cartItems: state.cart.cartItems
    };
}

export default connect(mapStateToProps,{addToCart, removeFromCart})(CartItem);