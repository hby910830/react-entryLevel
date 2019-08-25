import React from 'react';
import {connect} from 'react-redux'

class App extends React.Component {
	render() {
		return (
			<div className="App">
				你点击了 <span id="value">{this.props.n}</span> 次
				<div>
					<button id="add1" onClick={this.props.add1}>+1</button>
					<button id="add1" onClick={this.props.add2}>+2</button>
					<button id="minu1" onClick={this.props.minus}>-1</button>
				</div>
			</div>
		)
	}
}

function getPartialStore(state) {
	return {
		n: state.n
	}
}

const actionCreator = {
	add1: () => {
		return {type: 'add', payload: 1}
	},
	add2: () => {
		return {type: 'add', payload: 2}
	},
	minus: () => {
		return {type: 'minus', payload: 1}
	}
}

export default connect(getPartialStore, actionCreator)(App);
