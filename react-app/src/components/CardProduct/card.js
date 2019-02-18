import React from "react";
import CardService from "../../servises/cardservise";


const Card = () => {
    const products = CardService.getCard();

    return (
        <div>
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

export default Card;
