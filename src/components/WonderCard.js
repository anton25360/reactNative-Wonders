import React, { Component } from 'react'
import './WonderCard.css';

export class WonderCard extends Component {
    render() {
        return (
            <div className='cardContainer'>
                <img src={this.props.imgLink} alt='background'/>
                <h1 className='cardTitle'>{this.props.name} in {this.props.location}</h1>
            </div>
        )
    }
}

export default WonderCard
