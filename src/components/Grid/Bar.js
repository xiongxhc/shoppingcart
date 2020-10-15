import React from 'react';

const Bar = ({count, search, searching, filter, filtering}) => {
    return (
        <div className="topbar">
            <div className="search">
                <p>Product Search ({count})</p> 
                <input 
                    value={search}
                    onChange={searching} 
                    placeholder="search products"
                />
            </div>
            <div className="filter">
                <p>Filter</p> 
                <select value={filter} onChange={filtering}>
                    <option disabled value=""> select an option </option>
                    <option value="high">Highest Price</option>
                    <option value="low">Lowest Price</option>
                </select>
            </div>
        </div>
    )
}

export default Bar;