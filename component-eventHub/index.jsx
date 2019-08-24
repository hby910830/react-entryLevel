let money = {
	amount: 100000
}
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

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			money
		}
	}

	render() {
		return (
			<div className='root'>
				<BigPapa/>
				<YoungPapa/>
			</div>
		)
	}
}

class BigPapa extends React.Component {
	constructor() {
		super()
		this.state = {
			money
		}
	}

	render() {
		return (
			<div className='papa'>
				大爸 {this.state.money.amount}
				<Son1/>
				<Son2/>
			</div>
		)
	}
}

class YoungPapa extends React.Component {
	constructor() {
		super()
		this.state = {
			money
		}
	}

	render() {
		return (
			<div className='papa'>
				小爸 {this.state.money.amount}
				<Son3/>
				<Son4/>
			</div>
		)
	}
}

class Son1 extends React.Component {
	constructor() {
		super()
		this.state = {
			money
		}
	}

	render() {
		return (
			<div className="son">
				儿子1 {this.state.money.amount}
			</div>
		)
	}
}

class Son2 extends React.Component {
	constructor() {
		super()
		this.state = {
			money
		}
	}

	minus() {
		money.amount -= 100
		this.setState({
			money
		})
		eventHub.trigger('我花钱了', 100)
	}

	render() {
		return (
			<div className="son">
				儿子2 {this.state.money.amount}
				<button onClick={this.minus.bind(this)}>消费100</button>
			</div>
		)
	}
}

class Son3 extends React.Component {
	constructor() {
		super()
		this.state = {
			money
		}
		eventHub.on('我花钱了', () => {
			this.setState({
				money
			})
		})
	}

	render() {
		return (
			<div className="son">
				儿子3 {this.state.money.amount}
			</div>
		)
	}

}

class Son4 extends React.Component {
	constructor() {
		super()
		this.state = {
			money
		}
	}

	render() {
		return (
			<div className="son">
				儿子4 {this.state.money.amount}
			</div>
		)
	}
}

ReactDOM.render(
	<App/>,
	document.querySelector('#app')
)
