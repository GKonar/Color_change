import React, { Component } from 'react';
import BetterColorBox from './BetterColorBox';
import './BetterBoxesContainer.css';

class BetterBoxesContainer extends Component {
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
			'#b2bec3',
			'#fad390',
			'#f8c291',
			'#f6b93b',
			'#e55039',
			'#fa983a',
			'#eb2f06',
			'#e58e26',
			'#b71540',
			'#6a89cc',
			'#4a69bd',
			'#1e3799',
			'#0c2461',
			'#82ccdd',
			'#60a3bc',
			'#3c6382'
		]
	};

	constructor(props) {
		super(props);
		this.state = {
			colors: this.props.colors,
			boxesNum: Array.from({ length: this.props.numOfBoxes })
		};
	}

	randomColor(idx) {
		let newColor;
		do {
			newColor = this.state.colors[Math.floor(Math.random() * this.state.colors.length)];
		} while (newColor === this.state.colors[idx]);

		let newColors = [...this.state.colors];
		newColors[idx] = newColor;

		this.setState({ colors: newColors });
	}

	render() {
		let boxes = this.state.boxesNum.map((box, index) => {
			const colorObj = { backgroundColor: this.state.colors[index] };
			return (
				<BetterColorBox
					//
					key={index}
					color={colorObj}
					randColor={() => this.randomColor(index)}
				/>
			);
		});

		return <div className="BetterBoxesContainer">{boxes}</div>;
	}
}

export default BetterBoxesContainer;
