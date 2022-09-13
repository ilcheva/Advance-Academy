import { Component } from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
    links = [
        {
            id: 1,
            path: "/",
            text: "Home",
        },
        {
            id: 2,
            path: "/about",
            text: "About",
        },
    ];
    render() {
        return (
            <nav>
                <ul>
                    {this.links.map((link) => {
                        return (
                            <li key={link.id}>
                                <NavLink
                                    to={link.path}
                                    style={({ isActive }) => ({
                                        color: isActive ? "red" : "black",
                                    })}>
                                    {link.text}
                                </NavLink>
                                {/* <Link to={link.path}>{link.text}</Link> */}
                            </li>
                        );
                    })}
                </ul>
            </nav>
        );
    }
}
export default NavBar;
