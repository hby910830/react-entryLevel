import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
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

	return (
		<div className='app'>
			app
		</div>
	)
}

ReactDOM.render(
	<Router>
		<div>
			<div>
				<Link to="/"><button>首页</button></Link>
				<Link to="/login"><button>登录</button></Link>
				<Link to="/signUp"><button>注册</button></Link>
				<Link to="/welcome"><button>欢迎</button></Link>
			</div>
			<Route path="/" exact component={App} />
			<Route path="/login" component={Box1} />
			<Route path="/signUp" component={Box2} />
			<Route path="/welCome" component={Box3} />
		</div>
	</Router>
, document.getElementById('root'));

serviceWorker.unregister();
