import React from "react";
import './Nav.scss'

import {
    Link, NavLink
} from "react-router-dom";

class Nav extends React.Component {

    render() {
        return (
            <div className="topnav">
                <NavLink to="/" activeClassName="selected" exact = {true}>
                    Home
                </NavLink>
                <NavLink to="/todo" activeClassName="selected">
                    Todos
                </NavLink>
                <NavLink to="/about" activeClassName="selected">
                    About
                </NavLink>
            </div>
        )
    }
}

export default Nav