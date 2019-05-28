import React from 'react';
import './App.css';
// import BoxesContainer from './BoxesContainer';
import BetterBoxesContainer from './BetterBoxesContainer';

function App() {
	return (
		<div className="App">
			<BetterBoxesContainer numOfBoxes={15} />
		</div>
	);
}

export default App;
