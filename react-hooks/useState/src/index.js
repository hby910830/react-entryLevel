//用了hooks以后，react的无状态函数组件就可以不用写成class APP extends React.Component就能获取状态和属性方法
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


function App() {
	const [count/*值*/, setCount/*更新函数*/] = useState(10)
	console.log(useState(10)); //[10, ƒ]

	const add = () => {
		setCount(count + 1)
	}

	return (
		<div className='app'>
			<div>{count}</div>
			<div>
				<button onClick={add}>+1</button>
			</div>
		</div>
	)
}

ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister();
