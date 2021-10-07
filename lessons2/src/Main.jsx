import React from "react";
import Block from "./components/Block"

import './App.css';

class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            likes: 0,
            step: 10,
            move: 0
        }
        this.changeLikes = this.changeLikes.bind(this);
        this.onMove = this.onMove.bind(this)
    }
    changeLikes(step){
        this.setState({
            likes: this.state.likes + step
        })
    }
    onMove(){
        const {move, step} = this.state
        this.setState({
            move: move + step
        })
    }
    render() {
        const {likes, move} = this.state
        return (
            <div>
                <p>{likes}</p>
                <Block move={move}/>
                <button onClick={(step) => this.changeLikes(10)}>touch me!</button>
                <button onClick={this.onMove}>touch me!</button>
            </div>
        )
    }
}

export default Main;