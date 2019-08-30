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
			{n => <F4 n4={n}/> }
		</nContext.Consumer>
	</div>
}

function F4(props) {
	return <div className="bordered">4444,{props.n4}</div>
}

const nContext = React.createContext()

class App extends React.Component{
	constructor(){
		super()
		this.state = {
			n: 99
		}
	}
	render(){
		return (
			<nContext.Provider value="22">
				<F1/>
			</nContext.Provider>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister();
