import React, { Component } from "react";

export default class RandomColorButton extends Component {

    render() {
        return(
            <div>
                <button onClick={this.props.clickRandomColor}>Random Colors</button>
            </div>
        )
    }
}