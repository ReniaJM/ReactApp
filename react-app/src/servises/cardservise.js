import products from "products";

class CardService {
    static getCard() {
        console.log(products)
        return products;
    }

    static getCardById(id) {
        return products.find(card => card.id === id);
    }
}

export default CardService ;
