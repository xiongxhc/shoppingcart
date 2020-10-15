import React from 'react';
import './index.scss';
import Title from './Title.js'
import { CartIcon, Logout } from '../../icons'

const Header = ({cart}) => {
	return (
		<header className="header">
			<div className="title">
				<Title text={"EStore"} />
			</div>
			<div className="righticons">
				<a href='/' className="cart">
					<CartIcon width={25} color={"#FFF"}/>
					<p>({cart.length})</p>
				</a>
				<a href='/' className="logout">
					<Logout width={25} color={"#FFF"}/>
					<p>Logout</p>
				</a>
			</div>
		</header>
	);
}

export default Header;