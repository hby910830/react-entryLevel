import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

//自己在页面上做console.log,只要打印console.log，就会出现在页面上
let div = document.createElement('div')
document.body.appendChild(div)
console.log = content => {
	div.innerHTML += `${content}<br>`
}

class Baba extends React.Component {
	constructor() {
		super()
		this.state = {
			hasChild: true
		}
	}

	killSon = () => {
		this.setState({
			hasChild: false
		})
	}

	callSon = () => {
		this.setState({
			word: '你还好吧！'
		})
	}

	render() {
		return (
			<div>
				我是你爸爸
				<button onClick={this.killSon}>kill son</button>
				<button onClick={this.callSon}>call son</button>
				{this.state.hasChild ? <App word={this.state.word}/> : null}
			</div>
		)
	}
}

class App extends React.Component {
	addOne = () => {
		console.log('用户点击了')
		this.setState({
			n: this.state.n + 1
		})
	}

	constructor() {
		super()
		this.state = {
			n: 0
		}
		console.log('创建App')
	}

	componentWillMount() {
		console.log('将要mount App')
	}

	render() { //update
		console.log('填充/更新App的内容')
		return (
			<div className='app'>
				{this.state.n}
				<br/>
				我爸说{this.props.word}
				<button onClick={this.addOne}>+1</button>
			</div>
		)
	}

	componentDidMount() {
		console.log('mount App 完毕')
	}

	componentWillUpdate(nextProps, nextState, nextContext) {
		console.log('update App之前')
	}

	//update is render
	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('update App之后')
	}

	componentWillUnmount() {
		console.log('App 快要死了，记得喂狗！')
	}
}

ReactDOM.render(<Baba/>, document.getElementById('root'));

serviceWorker.unregister();
