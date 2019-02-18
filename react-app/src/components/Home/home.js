import React from 'react';

const Home = () => (
            <div>
                <div className="container">
                    <h1 className="header-big">Welcome to our store</h1>
                    <h2 className="header-small">Desktops</h2>
                    <div className="products">
                        <div className="product">
                            <img src="https://i.imgur.com/s7zey8T.jpg" alt="Apple iMac 27 Retina"/>
                            <p className="price">$2099.99</p>
                            <h3>iMac 27 Retina</h3>
                        </div>

                        <div className="product">
                            <img src="https://i.imgur.com/CCanSEL.jpg" alt="Microsoft Surface Studio"/>
                            <p className="price">$3749.99</p>
                            <h3>Surface Studio</h3>
                        </div>

                        <div className="product">
                            <img src="https://i.imgur.com/qQx2zmv.jpg" alt="Dell Inspion 23"/>
                            <p className="price">$1987.99</p>
                            <h3>Dell Inspion 23</h3>
                        </div>


                        <div className="product">
                            <img src="https://i.imgur.com/7Zp9oiW.jpg" alt="Lenovo IdeaCenter"/>
                            <p className="price">$2487.99</p>
                            <h3>Lenovo IdeaCenter</h3>
                        </div>
                    </div>

                    <h2 className="header-small">Tablets</h2>
                    <div className="products">
                        <div className="product">
                            <img src="https://i.imgur.com/uROXKvy.jpg" alt="Xiamomi Mi Pad 2"/>
                            <p className="price">899.99</p>
                            <h3>Mi Pad 2</h3>
                        </div>

                        <div className="product">
                            <img src="https://i.imgur.com/9bliZbf.jpg" alt="Apple iPad Air"/>
                            <p className="price">$1249.99</p>
                            <h3>Apple iPad Air</h3>
                        </div>

                        <div className="product">
                            <img src="https://i.imgur.com/f6vLn7N.jpg" alt="Asus Transformer"/>
                            <p className="price">$1157.99</p>
                            <h3>Asus Transformer</h3>
                        </div>
                        <div className="product">
                            <img src="https://i.imgur.com/NUsqPRC.jpg" alt="iPad Mini"/>
                            <p className="price">$480.99</p>
                            <h3>iPad Mini</h3>
                        </div>
                    </div>
                </div>
            </div>
);


export default Home;
