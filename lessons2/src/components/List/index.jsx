import React from "react";
import './index.css'

class List extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        const {task} = this.props
        return(
            <div>
                <p>{task.title}</p>
                <p>{task.id}</p>
            </div>
        )
    }
}
export default List;