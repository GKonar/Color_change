import React, { Component } from 'react';
import './BetterColorBox.css';

class ColorBox extends Component {
	render() {
		return (
			<div
				//
				className="BetterColorBox"
				style={this.props.color}
				onClick={this.props.randColor}
			/>
		);
	}
}
export default ColorBox;
