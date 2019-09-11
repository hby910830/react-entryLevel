//用了hooks以后，react的无状态函数组件就可以不用写成class APP extends React.Component就能获取状态和属性方法
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class App2 extends React.Component {
	constructor() {
		super()
		this.state = {
			count: 10,
			user: {
				name: '韩宝亿',
				age: 18
			}
		}
	}

	add = () => {
		this.setState({
			count: this.state.count + 1
		})
	}
	minus = () => {
		this.setState({
			count: this.state.count - 1
		})
	}
	older = () => {
		this.setState({
			...this.state,
			user: {
				name: this.state.user.name,
				age: this.state.user.age + 1
			}
		})
	}

	render() {
		return (
			<div>
				APP2
				<div>{this.state.count}</div>
				<div>{this.state.user.name},{this.state.user.age}岁</div>
				<button onClick={this.add}>+1</button>
				<button onClick={this.minus}>-1</button>
				<button onClick={this.older}>变老</button>
			</div>
		)
	}
}

//App1可以完全替代App2
function App1() {
	/*Hooks can only be called inside the body of a function component.*/
	const [count/*值*/, setCount/*更新函数*/] = useState(10)
	console.log(useState(10)); //[10, ƒ]

	const [user, setUser] = useState({name: '韩宝亿', age: 18, hobbies: ['lol', 'dog', 'code']})


	/*Effect Hook 可以让你在函数组件中执行副作用操作*/
	useEffect(() => {
		document.getElementById('output').innerText = count
	})

	const add = () => {
		setCount(count + 1)
	}
	const minus = () => {
		setCount(count - 1)
	}
	const older = () => {
		setUser({
			...user,
			age: user.age + 1
		})
	}
	const addHobby = () => {
		let newHobby = parseInt(Math.random() * 10 + 1)
		setUser({
			...user,
			hobbies: [...user.hobbies, newHobby]
		})
	}

	return (
		<div>
			APP1
			<div>{count}</div>
			<div>{user.name}, {user.age}岁, 爱好: {user.hobbies.join(',')}</div>
			<div>
				<button onClick={add}>+1</button>
				<button onClick={minus}>-1</button>
				<button onClick={older}>变老</button>
				<button onClick={addHobby}>增加爱好</button>
			</div>
		</div>
	)
}

function App() {
	return (
		<div>
			<App1/>
			<hr/>
			<App2/>
		</div>
	)
}

ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister();
