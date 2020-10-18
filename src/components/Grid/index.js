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
		const { text, filterItems } = this.props
		return (
			<div className="grid">
				{!filterItems ? 
					<div className="noserver">
						<div className="loader"/>
						<p>Please connect to server...</p>
					</div> :
					<React.Fragment>
						<Bar />
						<div className="products">
							{filterItems.length !== 0 ? filterItems.map(each => (
								<Item key={each.id} item={each} />
							)) :
								<div className="empty">
									<div className="loader"/>
									<p>Sorry, there is no product called "{text}"</p>
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