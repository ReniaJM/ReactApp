import React from "react";

import Card from "../CardProduct/card";


const Catalog = () => {
    

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
                            <Card/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Catalog;