import React from "react";

class Character extends React.Component {

    render() {
        return (
            <img
                style={{ width: "200px", height: "200px", cursor: "pointer" }}
                className="img-fluid img-thumbnail"
                onClick={() => this.props.shuffle(this.props.charKey)}
                src={process.env.PUBLIC_URL + '/images/' + this.props.image + ".png"}
                alt={this.props.image}>
            </img>
        );
    }

}

export default Character;