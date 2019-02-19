import React from 'react';
import Tablet from "./Tablet";
import Desktop from "./Desktop";

const Home = () => {
    return (
        <div>
            <div className="container">
                <h1 className="header-big">Welcome to our store</h1>
                <h2 className="header-small">Desktops</h2>
                <div className="products">
                    <Desktop/>
                </div>
                <h2 className="header-small">Tablets</h2>
                <div className="products">
                    <Tablet/>
                </div>
            </div>
        </div>
        )

};

export default Home;
