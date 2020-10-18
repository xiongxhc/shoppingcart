import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './index.scss';
import Title from './Title.js'
import { CartIcon, Logout } from '../../icons'

class Header extends Component {
	render() {
		const { cartItems } = this.props
		return (
			<header className="header">
				<div className="title">
					<Title text={"EStore"} />
				</div>
				<div className="righticons">
					{cartItems ? 
						<Link to='/cart' className="cart">
							<CartIcon width={25} color={"#FFF"}/>
							<p>({cartItems.length})</p>
						</Link> : <div />
					}
					<a href='/' className="logout">
						<Logout width={25} color={"#FFF"}/>
						<p>Logout</p>
					</a>
				</div>
			</header>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		cartItems: state.cart.cartItems,
	};
}

export default connect(mapStateToProps)(Header);