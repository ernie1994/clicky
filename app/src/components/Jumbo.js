import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

class Jumbo extends React.Component {

    render() {
        let style = {
            jumbo: {
                backgroundColor: "black",
                width: "100%"
            },
            headers: {
                color: "white",
                textAlign: "center"
            }
        };

        return (
            <Jumbotron style={style.jumbo}>
                <h1 style={style.headers} className="display-4">Clicky Game!</h1>
                <h3 style={style.headers}>
                    Click on an image to earn points,
                    but don't click on any more than once!
                </h3>
            </Jumbotron>
        );
    }

}

export default Jumbo;