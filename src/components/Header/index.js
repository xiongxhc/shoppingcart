import React from 'react';
import { Link } from 'react-router-dom'
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
				{cart ? 
					<Link to='/cart' className="cart">
						<CartIcon width={25} color={"#FFF"}/>
						<p>({cart.length})</p>
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

export default Header;