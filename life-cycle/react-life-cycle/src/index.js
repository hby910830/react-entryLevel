import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class App extends React.Component {
	constructor(){
		super()
	}
	render(){
		return (
			<div>
				<button>+1</button>
				<button>die</button>
			</div>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister();
