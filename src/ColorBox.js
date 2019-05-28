import React, { Component } from 'react';
import './ColorBox.css';

class ColorBox extends Component {
	static defaultProps = {
		colors: [
			'#55efc4',
			'#00b894',
			'#ffeaa7',
			'#fdcb6e',
			'#81ecec',
			'#00cec9',
			'#fab1a0',
			'#e17055',
			'#74b9ff',
			'#0984e3',
			'#ff7675',
			'#d63031',
			'#a29bfe',
			'#6c5ce7',
			'#fd79a8',
			'#e84393',
			'#dfe6e9',
			'#b2bec3'
		]
	};

	constructor(props) {
		super(props);
		this.state = { color: this.props.colors[Math.floor(Math.random() * this.props.colors.length)] };
		this.handleClick = this.handleClick.bind(this);
	}

	getRandomColor() {
		let newColor;
		do {
			newColor = this.props.colors[Math.floor(Math.random() * this.props.colors.length)];
		} while (newColor === this.state.color);

		this.setState({ color: newColor });
	}

	handleClick() {
		this.getRandomColor();
	}

	render() {
		let style = { backgroundColor: this.state.color };
		return <div onClick={this.handleClick} className="ColorBox" style={style} />;
	}
}
export default ColorBox;
