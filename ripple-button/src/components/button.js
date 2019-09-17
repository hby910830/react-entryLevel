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

	x() {
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