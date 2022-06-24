import React, { Component } from 'react'
import Square from "./square/Square"
import SaveButton from "./save-button/SaveButton"
import RandomColorButton from './random-color/RandomColor'

export default class Controls extends Component {

    constructor(props) {
        super(props)

        this.setRed = this.setRed.bind(this)
        this.setGreen = this.setGreen.bind(this)
        this.setBlue = this.setBlue.bind(this)
        this.randomColors = this.randomColors.bind(this)
        this.onSaveColors = this.onSaveColors.bind(this)
    }

    state = {
        red: "10",
        blue: "10",
        green: "10",
        list:[]
    }

    setRed(e) {
        this.setState({red: e.target.value})
    }

    setBlue(e) {
        this.setState({blue: e.target.value})
    }

    setGreen(e) {
        this.setState({green: e.target.value})
    }

    randomColors = () => {

        let red = Math.floor(Math.random() * 256)
        let green = Math.floor(Math.random() * 256)
        let blue = Math.floor(Math.random() * 256)

        this.setState({
            red,
            green,
            blue,
            list: [...this.state.list, [red, green, blue]]
        })
    }

    onSaveColors() {

        this.setState(
        {
            list: [...this.state.list, [this.state.red, this.state.green, this.state.blue]]
        })
    }

    render() {

        const { red, blue, green, list } = this.state

        return(
            <div>
                <Square colors={{red, green, blue}} />

                <span>Red: {red}</span><br />
                <input value={red} type="range" min="0" max="255" name="red" onChange={this.setRed} />
                <br />
                <br />

                <span>Green: {green}</span><br />
                <input value={green} type="range" min="0" max="255" name="green" onChange={this.setGreen} />
                <br />
                <br />

                <span>Blue: {blue}</span><br />
                <input value={blue} type="range" min="0" max="255" name="blue" onChange={this.setBlue} />
                <br />
                <br />

                <RandomColorButton clickRandomColor={this.randomColors} /><br />
                <SaveButton saveColor={this.onSaveColors} colors={{red, green, blue}} list={list}/>
            </div>
        )
    }
}