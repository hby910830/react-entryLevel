//用了hooks以后，react的无状态函数组件就可以不用写成class APP extends React.Component就能获取状态和属性方法
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

function Box1() {
	return (
		<div className='box'>登录</div>
	)
}

function Box2() {
	return (
		<div className='box'>注册</div>
	)
}

function App() {
	let [ui, setUi] = useState('登录')
	let onClickLogin = () => setUi('登录')
	let onClickSignUp = () => setUi('注册')
	return (
		<div className='app'>
			<button onClick={onClickLogin}>登录</button>
			<button onClick={onClickSignUp}>注册</button>
			<div>{ui === '登录' ? <Box1/> : <Box2/>}</div>
		</div>
	)
}

ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister();
