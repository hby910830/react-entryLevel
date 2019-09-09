import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const themeContext = React.createContext()

function Button() {
	return <button>button</button>
}

function Input() {
	return <input type="text"/>
}

function Box(props) {
	return <div className={`box ${props.theme}`}>{props.children}</div>
}

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			theme: 'red'
		}
	}

	change = () => {
		if(this.state.theme === 'red'){
			this.setState({theme: 'green'})
		}else{
			this.setState({theme: 'red'})
		}
	}

	render() {
		return (
			<themeContext.Provider value={this.state.theme}>
				<div className='app'>
					<button onClick={this.change}>换肤</button>
					<themeContext.Consumer>
						{theme =>
							<div>
								<Box theme={theme}>
									<Button/>
								</Box>
								<Box theme={theme}>
									<Input/>
								</Box>
							</div>
						}
					</themeContext.Consumer>
				</div>
			</themeContext.Provider>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister();
