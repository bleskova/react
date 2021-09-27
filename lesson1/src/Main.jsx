import React from "react";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Content from "./components/Content/Content";
import './App.css';

class Main extends React.Component{
    render() {
        const navMenu = ['о нас',
        'послуги',
        'команда',
        'публикації',
        'контакти'];
        return (
            <div>
                <Header />
                <div className="flex" >
                    <Menu menu={navMenu}/>
                    <Content 
                        title={'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        }/>
                </div>

            </div>
        )
    }
}

export default Main;