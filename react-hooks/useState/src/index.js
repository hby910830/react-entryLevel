//用了hooks以后，react的无状态函数组件就可以不用写成class APP extends React.Component就能获取状态和属性方法
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class App2 extends React.Component {
	constructor() {
		super()
		this.state = {
			count: 10
		}
	}
	add = () =>{
		this.setState({
			count: this.state.count + 1
		})
	}
	minus = () =>{
		this.setState({
			count: this.state.count - 1
		})
	}

	render() {
		return (
			<div>
				APP2
				<div>{this.state.count}</div>
				<button onClick={this.add}>+1</button>
				<button onClick={this.minus}>-1</button>
			</div>
		)
	}
}

//App1可以完全替代App2
function App1() {
	const [count/*值*/, setCount/*更新函数*/] = useState(10)
	console.log(useState(10)); //[10, ƒ]

	const add = () => {
		setCount(count + 1)
	}
	const minus = () => {
		setCount(count - 1)
	}

	return (
		<div>
			APP1
			<div>{count}</div>
			<div>
				<button onClick={add}>+1</button>
				<button onClick={minus}>-1</button>
			</div>
		</div>
	)
}

function App(){
	return(
		<div>
			<App1/>
			<hr/>
			<App2/>
		</div>
	)
}

ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister();
