import React from "react";
class Product extends React.Component{
    render(){
        return (
            <div className="product">
                <h1>
                    {this.props.name}
                    <span>
                        {this.props.emoji}
                    </span>
                </h1>
                
                <h4>Price: {this.props.price} DH</h4> 
                <button onClick={this.props.handleClick}>Add</button>
            </div>
        )
    }
}

export default Product;
