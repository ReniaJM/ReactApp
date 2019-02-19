import React from 'react';
import CardService from "../../servises/cardservise";
import PropTypes from 'prop-types';

const Tablet = () => {
    const products = CardService.getCard();
    const categoryDesktops = products
    .filter(product => product.category === "tablet")
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

Tablet.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    amount: PropTypes.number,
    image: PropTypes.string,
};


export default Tablet;
