//用了hooks以后，react的无状态函数组件就可以不用写成class APP extends React.Component就能获取状态和属性方法
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

function Box1() {
	return (
		<div className='box'>登陆</div>
	)
}

function Box2() {
	return (
		<div className='box'>注册</div>
	)
}

function App() {
	let [n, setN] = useState(0)
	return (
		<div className='app'>
			{n}<button onClick={() => setN(n + 1)}>切换状态</button>
			<div>{n % 2 === 0 ? <Box1/> : <Box2/>}</div>
		</div>
	)
}

ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister();
