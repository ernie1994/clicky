import React from "react";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Jumbo from "./components/Jumbo";
import Characters from "./components/Characters";

class App extends React.Component {

    state = {
        score: 0,
        topScore: 0
    };

    render() {
        return (
            <>
                <NavBar
                    score={this.state.score}
                    topScore={this.state.topScore}
                />
                <br></br>
                <br></br>
                <Container fluid>
                    <Row>
                        <Jumbo />
                    </Row>
                    <Row >
                        <Characters
                            increaseScore={this.increaseScore}
                            reset={this.reset}
                        />
                    </Row>
                </Container>
            </>
        );
    }

    increaseScore = () => {
        this.setState({ score: this.state.score + 1 })
    };

    reset = () => {
        const newState = { score: 0 };
        if (this.state.score > this.state.topScore) {
            newState.topScore = this.state.score;
        }
        this.setState(newState);
    };

}

export default App;