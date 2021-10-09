import React from "react";
import './index.css'

class Task extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        const {addChange} = this.props;
        return(
            <>
            <button  onClick={addChange}>ADD task</button>
            </>
        )
    }
}
export default Task;