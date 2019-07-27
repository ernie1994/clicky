import React from "react";

class NavBar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <a className="navbar-brand" href="/">Clicky Game</a>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <h3 className="navbar-text">Score: {this.props.score}  | Top Score: {this.props.topScore} </h3>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default NavBar