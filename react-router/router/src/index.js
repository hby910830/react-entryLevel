//用了hooks以后，react的无状态函数组件就可以不用写成class APP extends React.Component就能获取状态和属性方法
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

function Box1() {
	return <div className='box'>登录</div>
}

function Box2() {
	return <div className='box'>注册</div>
}

function Box3() {
	return <div className='box'>欢迎</div>
}

function App() {
	// let hash = window.location.hash
	let pathname = window.location.pathname

	// let initUi = hash === '#signUp' ? '注册' : '登录'
	// let initUi = pathname === '/signUp' ? '注册' : '登录'
	let initUi = ''
	if (pathname === '/signUp') {
		initUi = '注册'
	} else if (pathname === '/login') {
		initUi = '登录'
	} else {
		initUi = '欢迎'
	}

	let [ui, setUi] = useState(initUi)
	// let [ui, setUi] = useState('登录')

	let onClickLogin = () => {
		setUi('登录')
		// window.location.hash = 'login'	 		//页面不会刷新
		// window.location.pathname = 'login' //页面会刷新
		window.history.pushState(null, '', 'login') //页面不会刷新,但是需要后端配合把不存在的路由引向某一个页面
	}

	let onClickSignUp = () => {
		setUi('注册')
		// window.location.hash = 'signUp'   //页面不会刷新
		// window.location.pathname = 'signUp'	 //页面会刷新
		window.history.pushState(null, '', 'signUp') //页面不会刷新,但是需要后端配合把不存在的路由引向某一个页面
	}
	let onClickWelcome = () => {
		setUi('欢迎')
		// window.location.hash = 'welcome'   //页面不会刷新
		// window.location.pathname = 'welcome'	 //页面会刷新
		window.history.pushState(null, '', 'welcome') //页面不会刷新,但是需要后端配合把不存在的路由引向某一个页面
	}

	let showUi = () => {
		if (ui === '登录') {
			return <Box1/>
		} else if (ui === '注册') {
			return <Box2/>
		} else {
			return <Box3/>
		}
	}

	return (
		<div className='app'>
			<button onClick={onClickLogin}>登录</button>
			<button onClick={onClickSignUp}>注册</button>
			<button onClick={onClickWelcome}>欢迎</button>
			<div>{showUi()}</div>
		</div>
	)
}

ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister();
