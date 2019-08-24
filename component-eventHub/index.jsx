let money = {
	amount: 100000
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
				大爸
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
				小爸
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
				儿子1
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

	render() {
		return (
			<div className="son">
				儿子2
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
	}

	render() {
		return (
			<div className="son">
				儿子3
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
				儿子4
			</div>
		)
	}
}

ReactDOM.render(
	<App/>,
	document.querySelector('#app')
)
