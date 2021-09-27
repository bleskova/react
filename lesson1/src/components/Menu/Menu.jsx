import React from "react";
import "./menu.css";

class Menu extends React.Component{
    
    render() {
        const {menu} = this.props;
        return (
            <>
                <ul className="jc-fs">
                {menu?.map((e) => 
                    <li className="menu-link">
                        <a href="">{e}</a>
                    </li>
                )}

                </ul>
            </>
        )
    }
}

export default Menu;