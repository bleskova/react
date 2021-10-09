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
        const {addChange} = this.props;
        const {text} = this.state;
        
        return(
            <>
            <input type="text" value={text} onChange={this.changeInput} />
            <button  onClick={addChange}>ADD task</button>
            </>
        )
    }
}
export default CustomInput;