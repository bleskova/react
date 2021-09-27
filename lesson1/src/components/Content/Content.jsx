import React from "react";
import "./content.css";


class Content extends React.Component{
    render() {
        const {title} = this.props;
        return (
            <>
                <p className="container">{title}</p>
            </>
        )
    }
}

export default Content;