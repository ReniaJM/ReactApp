import React from 'react';
import CardService from "../../servises/cardservise";
import PropTypes from 'prop-types';

const Desktop = () => {
    const products = CardService.getCard();
    const categoryDesktops = products
    .filter(product => product.category === "desktop")
    .filter(product => product.featured === true);
    return (
        <div>
            <div className="container">
                <div className="products">
                    {categoryDesktops.map(product =>(
                        <div  key={product.id} className="product">
                            <img src={product.image} alt={product.name}/>
                            <p className="price">{product.amount}</p>
                            <h3>{product.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

};
Desktop.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    amount: PropTypes.number,
    image: PropTypes.string,
};


export default Desktop;