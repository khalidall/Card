import React, { Component } from 'react';

class Total extends Component{
    render(){
        return (
            <h1 className='total'>Total: {this.props.total} DH</h1>
        )
    }
}

export default Total;