import React, { Component } from "react"
import './css/style.css'

export default class Square extends Component {

    render() {
        return (
            <div>
                <div className="square"
                    style={
                        {backgroundColor: 
                        `rgb(${this.props.colors.red}, 
                        ${this.props.colors.green}, 
                        ${this.props.colors.blue})` }}>
                </div>
                <br />
            </div>
        )
    }
}

