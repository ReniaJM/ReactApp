import React, {Component} from "react";
import SerchInput from "../SearchInput/SearchInput";
import Allbuttons from "../AllButtons/allbuttons";
import ProductsListPage from "../ProductList/productlist";


class Catalog extends Component {
    state = {
        name: "",
        manufacture: ""
    };

    handleSearchInput = searchText => {
        this.setState({
            name: searchText
        });
    };

    handleChange = value => {
        this.setState({
            manufacture: value
        });
    };

    clearInput = () => {
        this.setState({
            name: "",
            manufacture: ""
        });
    };
render(){
    return (
        <div className="container">
            <h1 className="header-big">Catalog</h1>
            <div className="catalog">
                <div className="column-left">
                    <div className="filter">
                        <div className="filter-header">
                            <h4>Search</h4>
                            <button onClick={this.clearInput}>Clear</button>
                        </div>
                        <SerchInput
                            onChange={this.handleSearchInput}
                            name={this.state.name}
                        />
                        <h4>Manufacturer</h4>
                        <Allbuttons
                            onChange={this.handleChange}
                            manufacture={this.state.manufacture}
                        />
                    </div>
                </div>
                    <div className="column-right">
                        <ProductsListPage
                            name={this.state.name}
                            manufacture={this.state.manufacture}
                        />
                    </div>
            </div>
        </div>
    );
}

};

export default Catalog;