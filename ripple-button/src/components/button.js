import React from 'react';
import './button.css'

export default class Button extends React.Component {
	constructor() {
		super()
		this.state = {
			active: false
		}
		this.myRef = React.createRef()
	}

	x(event) {
		let {x, y} = this.myRef.current.getBoundingClientRect()
		let {clientX, clientY} = event
		let deltaX = clientX - x
		let deltaY = clientY - y
		console.log(deltaX, deltaY);
		this.setState({
			active: true
		})
	}

	render() {
		return (
			<button ref={this.myRef} className='button2' onClick={this.x.bind(this)}>
				{this.props.value}
				{this.state.active ? <span className='circle'/> : ''}
			</button>
		)
	}
}