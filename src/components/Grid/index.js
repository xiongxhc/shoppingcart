import React, { Component } from 'react';
import './index.scss';
import Item from './Item'
import Bar from './Bar';

class Grid extends Component {
	render() {
		return (
			<div className="grid">
				<Bar 
					count={this.props.products.length}
					search={this.props.search} 
					searching={this.props.searching}  
					filter={this.props.filter} 
					filtering={this.props.filtering} 
				/>
				<div className="products">
					{this.props.products.length !== 0 ? this.props.products.map(each => (
						<Item key={each.id} item={each} addToCart={this.props.addToCart}/>
					)) : 
						<div className="empty">
							<p>Sorry, there is no product called "{this.props.search}"</p>
						</div>
					}
				</div>
			</div>
		);
	}
}

export default Grid;