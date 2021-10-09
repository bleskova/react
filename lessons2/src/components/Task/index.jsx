import React from "react";
import './index.css'

class Task extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        const {task} = this.props
        return(
            <div>
                <p>{task.title}</p>
                
            </div>
        )
    }
}
export default Task;