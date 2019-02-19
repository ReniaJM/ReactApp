import React from "react";
import CardService from "../../servises/cardservise";
import PropTypes from 'prop-types';


const Card = () => {
    const products = CardService.getCard();

    return (
        <div className="products">
        {products.map(product =>(
            <div  key={product.id} className="product">
                <img src={product.image} alt={product.name}/>
                <p className="price">{product.amount}</p>
                <h3>{product.name}</h3>
            </div>
        ))}
        </div>
    )
};



Card.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    amount: PropTypes.number,
    image: PropTypes.string,
};

export default Card;
