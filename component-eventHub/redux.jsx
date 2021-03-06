//redux
let createStore = Redux.createStore
let reducers = (state/* = {money: {amount: 100000}}*/, action) => {
	state = state || {
		money: {amount: 100000}
	}
	switch (action.type) {
		case '我花钱了':
			return {
				money: {
					amount: state.money.amount - action.payload
				}
			}
		default:
			return state
	}
}
const store = createStore(reducers)


class App extends React.Component {
	constructor() {
		super()
		// this.state = {
		// 	store: store.getState()
		// }
	}

	render() {
		return (
			<div className='root'>
				<BigPapa money={this.props.store.money.amount}/>
				<YoungPapa money={this.props.store.money.amount}/>
			</div>
		)
	}
}

class BigPapa extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className='papa'>
				大爸 {this.props.money}
				<Son1 money={this.props.money}/>
				<Son2 money={this.props.money}/>
			</div>
		)
	}
}

class YoungPapa extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className='papa'>
				小爸 {this.props.money}
				<Son3 money={this.props.money}/>
				<Son4 money={this.props.money}/>
			</div>
		)
	}
}

class Son1 extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="son">
				儿子1 {this.props.money}
			</div>
		)
	}
}

class Son2 extends React.Component {
	constructor(props) {
		super(props)
	}

	minus() {
		// eventHub.trigger('我花钱了', 100)  //action
		store.dispatch({type: '我花钱了', payload: 100})
	}

	render() {
		return (
			<div className="son">
				儿子2 {this.props.money}
				<button onClick={this.minus.bind(this)}>消费100</button>
			</div>
		)
	}
}

class Son3 extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="son">
				儿子3 {this.props.money}
			</div>
		)
	}

}

class Son4 extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div className="son">
				儿子4 {this.props.money}
			</div>
		)
	}
}

function render() {
	ReactDOM.render(
		<App store={store.getState()}/>,
		document.querySelector('#app')
	)
}

render()
store.subscribe(render)