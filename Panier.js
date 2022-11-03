import React from "react";
import Basket from "./Basket";
import Product from "./Product";
import produits from "./Products";

class Panier extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      total: 0,
      showComponent: false,
      nbrProds: 0,
    };
  }
  deleProd(ind) {
    let lsProducts = this.state.products.filter((e, i) => i !== ind);
    let tot =
      this.state.total -
      this.state.products[ind].price * this.state.products[ind].number;
    this.setState({
      products: lsProducts,
      total: tot,
      showComponent: this.state.showComponent,
      nbrProds: this.state.nbrProds - this.state.products[ind].number
    });
  }
  ajouter(data) {
    if (this.state.products.includes(data)) {
      data.number = data.number + 1;
      let total = this.state.total + data.price;
      this.setState({
        products: [...this.state.products],
        total: total,
        showComponent: this.state.showComponent,
        nbrProds: this.state.nbrProds + 1
      });
    } else {
      data.number = 1;
      let prods = [...this.state.products, data];
      let tot = this.state.total + data.price;
      this.setState({
        products: prods,
        total: tot,
        showCompoenet: this.state.showComponent,
        nbrProds: this.state.nbrProds + 1
      });
    }
  }
  removeItem(data) {
    if (data.number > 0) {
      data.number = data.number - 1;
      let total = this.state.total - data.price;
      this.setState({
        products: [...this.state.products],
        total: total,
        showComponent: this.state.showComponent,
        nbrProds: this.state.nbrProds - 1
      });
    } else {
      let newState = this.state.products.filter((ele) => ele !== data);
      console.log(newState);
      this.setState({
        products: newState,
        total: this.state.total,
        showComponent: false,
        nbrProds: this.state.nbrProds - data.number
      });
    }
  }
  onButtonClick() {
    let prods = this.state.products;
    let total = this.state.total;
    this.setState({
      products: prods,
      total: total,
      showComponent: !this.state.showComponent,
    });
  }
  render() {
    return (
      <div className="panier">
        <div className="products">
          {produits.map((ele) => (
            <Product {...ele} handleClick={() => this.ajouter(ele)} />
          ))}
        </div>
        <button 
          className={this.state.total > 0 ? "basket-btn full" : "basket-btn"} 
          onClick={this.onButtonClick.bind(this)}
          data-len={this.state.nbrProds}
        >
          {this.state.showComponent ? "Hide" : "Show"} Basket 
        </button>
        {
          this.state.showComponent 
          &&
          (
            <Basket
                total={this.state.total}
                productsList={this.state.products}
                remove={this.deleProd.bind(this)}
                addItem={this.ajouter.bind(this)}
                removeItem={this.removeItem.bind(this)}
            />
          )
        }
      </div>
    );
  }
}

export default Panier;
