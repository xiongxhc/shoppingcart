import React, { Component } from 'react';
import './index.scss';
import Item from './Item'
import Bar from './Bar';
import { connect } from 'react-redux';
import { fetchProducts } from '../../action/productActions.js'

class Grid extends Component {

	componentDidMount() {
		this.props.fetchProducts()
	}
	
	render() {
		return (
			<div className="grid">
				{!this.props.filterItems ? 
					<div>
						Loading
					</div> :
					<React.Fragment>
						<Bar />
						<div className="products">
							{this.props.filterItems.length !== 0 ? this.props.filterItems.map(each => (
								<Item key={each.id} item={each} addToCart={this.props.addToCart} />
							)) :
								<div className="empty">
									<p>Sorry, there is no product called "{this.props.text}"</p>
								</div>
							}
						</div>
					</React.Fragment>
				}
			</div>
		);
	}
}


const mapStateToProps = (state) => {
	return {
		text: state.products.text,
		filterItems: state.products.filterItems,
	};
}

export default connect(mapStateToProps,{fetchProducts})(Grid);