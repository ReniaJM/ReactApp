import React from "react";
import CardService from "../../servises/cardservise";
import PropTypes from 'prop-types';

const ProductsListPage = props => {
    const products = CardService.getCard();
    const searchTextLower = props.name.toString().toLowerCase();
    const productsFiltred = products.filter(product =>
        product.name.toLowerCase().includes(searchTextLower)
    );

    const manufactureLower = props.manufacture;
    const filtredProducts = productsFiltred.filter(product =>
        product.manufacture.toLowerCase().includes(manufactureLower)
    );

    return (
            <div>
                <div className="products">
                    {filtredProducts.map(product => (
                        <div className="product" key={product.id}>
                            <img src={product.image} alt="poster" />
                            <p className="price">{product.amount}</p>
                            <h4>{product.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
    );
};

ProductsListPage.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    amount: PropTypes.number,
    image: PropTypes.string,
};
export default ProductsListPage;
