import React from 'react';

const Bar = ({count}) => {
    return (
        <div className="topbar">
            <div className="search">
                <p>Product Search ({count})</p> 
                <input placeholder="search products" />
            </div>
            <div className="filter">
                <p>Filter</p> 
                <select>
                    <option disabled selected value> select an option </option>
                    <option value={0}>Highest Price</option>
                    <option value={1}>Lowest Price</option>
                </select>
            </div>
        </div>
    )
}

export default Bar;