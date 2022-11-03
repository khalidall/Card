import React, { Component } from "react";
import Total from "./Total";

class Basket extends Component{
    render(){
        return(
            <div className="basket">
                <Total total={this.props.total}/>
                <div className="basket-products">
                    {this.props.productsList.map((ele, ind) => {
                        return(
                            <div key={ele.key}>
                                <h3>Name: {ele.name}</h3>
                                <h3>Price: {ele.price}</h3>
                                <button onClick={() => this.props.removeItem(ele)}>-</button>
                                {ele.number}
                                <button onClick={() => this.props.addItem(ele)}>+</button>
                                <br />
                                <button onClick={()=> this.props.remove(ind)}>Delete</button>
                            </div>
                        )
                    })}
                </div >
            </div>
        )
    }
}

export default Basket;
