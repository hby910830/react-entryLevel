import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

function F1() {
	return <div className="bordered">
		1111
		<F2/>
	</div>
}

function F2() {
	return <div className="bordered">
		2222
		<F3/>
	</div>
}

function F3() {
	return <div className="bordered">
		3333,
		<nContext.Consumer>
			{x => <F4 n4={x.n} setN={x.setN}/>}
		</nContext.Consumer>
	</div>
}

function F4(props) {
	return (
		<div className="bordered">
			4444,{props.n4}
			<button onClick={props.setN}>click me</button>
		</div>
	)
}

const nContext = React.createContext()

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			x: {
				n: 99,
				setN: () => {
					this.setState({
						x: {
							...this.state.x,
							n: this.state.x.n + 1
						}
					})
					console.log('执行完毕')
				}
			}
		}
	}

	render() {
		return (
			<nContext.Provider value={this.state.x}>
				<F1/>
			</nContext.Provider>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister();
