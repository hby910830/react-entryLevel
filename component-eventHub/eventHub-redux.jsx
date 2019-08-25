//数据
let money = {
	amount: 100000
}
let user = {
	id: 123,
	nickName: '土豪'
}

let store = {
	money,
	user
}


//eventHub
let fnLists = {}
let eventHub = {
	on(eventName, fn) {
		fnLists[eventName] = fnLists[eventName] || []
		fnLists[eventName].push(fn)
	},
	trigger(eventName, data) {
		fnLists[eventName].forEach(fn => fn.call(null, data))
	}
}

let manager = { //管家，统一管理状态的变化
	init() {
		eventHub.on('我花钱了', data => {  //subscribe
			store.money.amount -= data  //reducer
			render()
		})
	}
}
manager.init()

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			store
		}
	}

	render() {
		return (
			<div className='root'>
				<BigPapa money={this.state.store.money.amount}/>
				<YoungPapa money={this.state.store.money.amount}/>
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
		eventHub.trigger('我花钱了', 100) ////eventName--action(type)   data--payload
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
		<App/>,
		document.querySelector('#app')
	)
}

render()