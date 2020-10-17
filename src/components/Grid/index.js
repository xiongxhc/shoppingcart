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
				{!this.props.products ? 
					<div>
						Loading
					</div> :
					<React.Fragment>
						<Bar
							count={this.props.products.length}
							search={this.props.search}
							searching={this.props.searching}
							filter={this.props.filter}
							filtering={this.props.filtering}
						/>
						<div className="products">
							{this.props.products.length !== 0 ? this.props.products.map(each => (
								<Item key={each.id} item={each} addToCart={this.props.addToCart} />
							)) :
								<div className="empty">
									<p>Sorry, there is no product called "{this.props.search}"</p>
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
		products: state.products.items,
	};
}

export default connect(mapStateToProps,{fetchProducts})(Grid);