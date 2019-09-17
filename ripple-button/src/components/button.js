import React from 'react';
import './button.css'

export default class Button extends React.Component {
	constructor() {
		super()
		this.state = {
			active: false
		}
	}

	x() {
		this.setState({
			active: true
		})
	}

	render() {
		return (
			<button className='button2' onClick={this.x.bind(this)}>
				{this.props.value}
				{this.state.active ? <span>sss</span> : ''}
			</button>
		)
	}
}