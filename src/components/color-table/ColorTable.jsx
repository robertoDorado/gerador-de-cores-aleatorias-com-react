import React, { Component } from 'react'
import './css/style.css'

export default class ColorTable extends Component {

    randomKeyValues = (value) => Math.random() * value

    render() {

        return(
            <ul className="wrap-table">
                {this.props.list.map((items) => {

                    if(items.length > 0) {

                        return(
                            <li key={this.randomKeyValues(parseInt(Math.floor(items.join('')) * Math.random()))}>
                                <div style={{backgroundColor: this.props.backgroundColor(...items)}} className='small-square'></div>
                                <span className='color-name'>{this.props.backgroundColor(...items)}</span>
                            </li>
                        )
                    }else {
                        return ''
                    }
                })}
            </ul>
        )
    }
}