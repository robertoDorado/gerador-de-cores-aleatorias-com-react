import React, { Component } from 'react'
import ColorTable from '../color-table/ColorTable'


export default class SaveButton extends Component {

    captureColors = (r, g, b) => `rgb(${r}, ${g}, ${b})`

    render() {

        return(
            <div>
                <button onClick={this.props.saveColor}>Save Color</button>
                <br />
                <br />

                <ColorTable backgroundColor={this.captureColors} list={this.props.list} />
            </div>
        )
    }
}