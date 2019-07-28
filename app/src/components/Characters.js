import React from "react";
import Col from "react-bootstrap/Col";
import Character from "./Character";

class Characters extends React.Component {

    state = {
        characters: [
            { image: "beth", clicks: 0, key: 0 },
            { image: "birdperson", clicks: 0, key: 1 },
            { image: "evilmorty", clicks: 0, key: 2 },
            { image: "gianthead", clicks: 0, key: 3 },
            { image: "goldenford", clicks: 0, key: 4 },
            { image: "jerry", clicks: 0, key: 5 },
            { image: "jessica", clicks: 0, key: 6 },
            { image: "meeseeks", clicks: 0, key: 7 },
            { image: "morty", clicks: 0, key: 8 },
            { image: "mr", clicks: 0, key: 9 },
            { image: "rick", clicks: 0, key: 10 },
            { image: "summer", clicks: 0, key: 11 },
        ]
    };

    render() {
        return (
            <>
                {
                    this.state.characters.map(character => {
                        return (
                            <Col xs={6} md={4} lg={3} key={Math.random()} >
                                <Character
                                    image={character.image}
                                    shuffle={this.shuffle}
                                    charKey={character.key}
                                />
                            </Col>
                        );
                    })
                }
            </>
        );
    };

    reset = () => {
        this.props.reset();
        this.setState({
            characters: this.state.characters.map(char => {
                char.clicks = 0;
                return char;
            })
        });

    };

    shuffle = charKey => {
        let character = this.state.characters.filter(character => character.key === charKey)[0];

        if (character.clicks === 0) {
            this.props.increaseScore();
            this.setState(
                {
                    characters: this.state.characters.map(char => {
                        if (char.key === charKey) {
                            char.clicks = 1;
                        }
                        return char;
                    })
                },
                function () {
                    let allClicked = this.state.characters.reduce((total, value) => {
                        if (value.clicks === 0) return false;
                        return total;
                    }, true);

                    if (allClicked) {
                        this.reset();
                    }
                }
            );
        } else {
            this.reset();
        }

        this.setState({
            characters: this.state.characters.sort(() => Math.random() - 0.5)
        });
    };

}

export default Characters;