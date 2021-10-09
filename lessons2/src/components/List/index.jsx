import { findByLabelText } from "@testing-library/react";
import React from "react";
import './index.css'

class List extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        const {task} = this.props;
        const style = {
            display: 'flex',
            alignItems: 'center',
            margin: '5px'
        }
        return(
            <div style={style}>
                <span>{1+task.id}.   {task.title}     </span>
                {task.done ? <div> &#9989; </div> : <div>  &#9745; </div> }
                {!task.done && <div>  ✘ </div>}
            </div>
        )
    }
}
export default List;