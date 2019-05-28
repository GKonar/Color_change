import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './BoxesContainer.css';

class BoxesContainer extends Component {
	static defaultProps = {
		numBoxes: 18
	};

	render() {
		const boxes = Array.from({ length: this.props.numBoxes }).map(() => <ColorBox />);
		// console.log(Array.from({ length: 18 }, (v, i) => i));
		return <div className="BoxesContainer">{boxes}</div>;
	}
}

export default BoxesContainer;
