import React from "react";
import CardService from "../../servises/cardservise";

const Catalog = () => (

const cards = CardService.getCard();

    return (
        <div>
            <div className="container">
                <h1 className="header-big">Catalog</h1>

                <div className="catalog">

                    <div className="column-left">
                        <div className="filter">
                            <div className="filter-header">
                                <h4>Search</h4>
                                <a href="#" className="clear">Clear</a>
                            </div>
                            <div>
                                <input type="text" placeholder="search..."/>
                            </div>
                            <h4>Manufacturer</h4>
                            <div>
                                <div>
                                    <input type="radio" name="manufacturere" id="all" value="all" checked/>
                                    <label htmlFor="all">All</label>
                                </div>
                                <div>
                                    <input type="radio" name="manufacturere" id="apple" value="apple"/>
                                    <label htmlFor="apple">Apple</label>
                                </div>
                                <div>
                                    <input type="radio" name="manufacturere" id="dell" value="dell"/>
                                    <label htmlFor="dell">Dell</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="column-right">
                        <div className="products">
                            <Card {this.props.cards}/>

                            {/*{cards.map(card =>(*/}
                                {/*<div key={card.id} className="product">*/}
                                    {/*<img src={card.image} alt={card.name}/>*/}
                                    {/*<p className="price">{card.amount}</p>*/}
                                    {/*<h3>{card.name}</h3>*/}
                                {/*</div>*/}
                            {/*))}*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
)

export default Catalog;