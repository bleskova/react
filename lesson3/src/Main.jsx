import React from "react";

import './App.css';


class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            total: 0,
        }
        this.addCart = this.addCart.bind(this)
    }
    componentDidMount() {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                this.setState({
                    products: json
                })
            })
    }
    addCart(price){
        const {products, total} = this.state;
        this.setState({
            total: price + total
        })
        console.log(products, price)
    }

    render() {
        const {products, total} = this.state;
        return (
            <div>
                <div className='cart'>
                    <span>Total:</span>
                    <span>{total.toFixed(2)}</span>
                </div>
                {products.length ? products.map((item) => <div key={item.id}>
                    <h3>{item.title}</h3>
                    <img className='image' src={item.image} alt=""/>
                    <span>Price:</span>
                    <span className='price'>{item.price}</span>
                    <button onClick={() => this.addCart(item.price)}>Add to cart</button>
                </div>)
                : <p>Loading...</p>
                }
                
            </div>
        )
    }
}

export default Main;
