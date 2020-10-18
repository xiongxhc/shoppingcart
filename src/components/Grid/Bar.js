import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchProducts, sortProducts } from '../../action/productActions.js'

class Bar extends Component {
    render() {
        const { text, sort, products, filterItems, searchProducts, sortProducts } = this.props
        return (
            <div className="topbar">
                <div className="search">
                    <p>Product Search ({filterItems.length})</p>
                    <input 
                        value={text}
                        onChange={(e) => searchProducts(products, e.target.value)} 
                        placeholder="search products"
                    />
                </div>
                <div className="filter">
                    <p>Filter</p> 
                    <select 
                        defaultValue="" 
                        value={sort} 
                        onChange={(e) => sortProducts(filterItems, e.target.value)}
                    >
                        <option disabled value=""> select an option </option>
                        <option value="high">Highest Price</option>
                        <option value="low">Lowest Price</option>
                    </select>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
	return {
        text: state.products.text,
        sort: state.products.sort,
        products: state.products.items,
        filterItems: state.products.filterItems,
	};
}

export default connect(mapStateToProps,{searchProducts, sortProducts})(Bar);