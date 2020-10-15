import React, { Component } from 'react';
import './index.scss';

class Grid extends Component {
	render() {
		return (
			<div className="grid">
				<div className="products">
					{this.props.products.map( item => (
						<div key={item.id}>
							<div className="item">
								<a href={'#'+item.id}>
									<img src={item.photo} alt={item.name} />
									<p>
										{item.name}
									</p>
								</a>
								<div>
									<div className="pricetag">
										<div>${item.price}</div>
									</div>
									<button className="addtocart">
										<div>Add To Cart</div>
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default Grid;