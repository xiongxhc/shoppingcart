import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './index.scss'
import Title from './Title.js'
import { CartIcon, Logout } from '../../icons'
import { userLogin, userLogout } from '../../action/userAction.js'

class Header extends Component {
	render() {
		const { login, cartItems, userLogin, userLogout } = this.props
		return (
			<header className="header">
				<div className="title">
					<Title text={"EStore"} />
				</div>
				<div className="righticons">
					<Link to='/cart' className="cart">
						<CartIcon width={25} color={"#FFF"}/>
						<p>({cartItems.length})</p>
					</Link>
					{login ? 
						<div className="logout" onClick={() => userLogout()}>
							<Logout width={25} color={"#FFF"}/>
							<p>Logout</p>
						</div> :
						<div className="login" onClick={() => userLogin()}>
							<p>Login</p>
						</div>
					}
					
				</div>
			</header>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		login: state.user.login,
		cartItems: state.cart.cartItems,
	};
}

export default connect(mapStateToProps, {userLogin, userLogout})(Header);