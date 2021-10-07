import React from "react";
import './block.css'

class Block extends React.Component{

    render() {
        const {move} = this.props;
        return(
            <div className="block" style={{left: move}}></div>
        )
    }
}
export default Block;