import React from "react";
import './index.css'

class CustomInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
        this.changeInput = this.changeInput.bind(this)
        this.clearInput = this.clearInput.bind(this)
    }
    changeInput(e){
        this.props.change(e)
        this.setState({
            text: e.target.value 
        })
    }
    clearInput(){
        this.setState({
            text: ''
        })
    }
    render() {
        const {text} = this.state;      
        return(
            <>
            <input type="text" value={text} onChange={this.changeInput} onClick={this.clearInput} />
            </>
        )
    }
}
export default CustomInput;