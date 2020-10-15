import React, { Component } from 'react';
import Item from './Item'
import './index.scss';

class Grid extends Component {
	render() {
		return (
			<div className="grid">
				<div className="products">
					{this.props.products.map( each => (
						<Item item={each} />
					))}
				</div>
			</div>
		);
	}
}

export default Grid;