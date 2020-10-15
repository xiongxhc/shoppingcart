import React from 'react';

const Item = ({item}) => {
    return (
        <div className="item">
            <a href={'#' + item.id}>
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
    )
}

export default Item;