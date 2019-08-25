import React from 'react';
import {connect} from 'react-redux'

class App extends React.Component {

	add1() {
		this.props.store.dispatch({type: 'add', payload: 1})
	}

	add2() {
		this.props.store.dispatch({type: 'add', payload: 2})
	}

	minus() {
		this.props.store.dispatch({type: 'minus', payload: 1})
	}

	addIfOdd() {
		if (this.props.value % 2 !== 0) {
			this.props.store.dispatch({type: 'add', payload: 1})
		}
	}

	addAsync() {
		setTimeout(() => {
			this.props.store.dispatch({type: 'add', payload: 1})
		}, 2000)
	}

	render() {
		return (
			<div className="App">
				你点击了 <span id="value">{this.props.n}</span> 次
				<div>
					<button id="add1" onClick={this.props.add1}>+1</button>
					<button id="add1" onClick={this.add2.bind(this)}>+2</button>
					<button id="minu1" onClick={this.minus.bind(this)}>-1</button>
					<button id="add1IfOdd" onClick={this.addIfOdd.bind(this)}>如果是单数就+1</button>
					<button id="addAfter2Sec" onClick={this.addAsync.bind(this)}>两秒钟后+1</button>
				</div>
			</div>
		)
	}
}

function x(state) {
	return {
		n: state.n
	}
}

const y = {
	add1: () => {
		return {type: 'add', payload: 1}
	}
}

export default connect(x, y)(App);
