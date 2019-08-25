import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";

const stateChanger = (state, action) => {
	if (state === undefined) {
		return 0
	} else {
		switch (action.type) {
			case 'add':
				return state + action.payload // 2. 根据操作生成新的 state 触发一个事件
			case 'minus':
				return state - 1
			default:
				return state
		}
	}
}
const store = createStore(stateChanger)

function add1() {
	// 1.dispatch 一个 action
	// 派发一个事件 === 触发一个事件
	store.dispatch({type: 'add', payload: 1})
}
function add2() {
	store.dispatch({type: 'add', payload: 2})
}
function onMinus() {
	store.dispatch({type: 'minus', payload: 1})
}
function addIfOdd() {
	if(store.getState() % 2 !== 0){
		store.dispatch({type: 'add', payload: 1})
	}
}
function addAsync() {
	setTimeout(() => {
		store.dispatch({type: 'add', payload: 1})
	}, 2000)
}
const render = () => {
	ReactDOM.render(
		<App
			value={store.getState()}
			onAdd1={add1}
			onAdd2={add2}
			onMinus={onMinus}
			addIfOdd={addIfOdd}
			onAddAsync={addAsync}
		/>,
		document.getElementById('root')
	);
}
render()
store.subscribe(render)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
