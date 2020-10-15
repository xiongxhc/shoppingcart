import React, { Component } from 'react';
import './index.scss';
import Item from './Item'
import Bar from './Bar';

class Grid extends Component {
	render() {
		return (
			<div className="grid">
				<Bar count={this.props.products.length}/>
				<div className="products">
					{this.props.products.map( each => (
						<Item key={each.id} item={each} />
					))}
				</div>
			</div>
		);
	}
}

export default Grid;