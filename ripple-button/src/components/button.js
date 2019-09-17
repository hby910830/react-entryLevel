import React from 'react';
import './button.css'

export default class Button extends React.Component {
	constructor() {
		super()
		this.state = {
			active: false,
			deltaX: 0,
			deltaY: 0
		}
		this.myRef = React.createRef()
	}

	rippleAnimation(event) {
		let {x, y} = this.myRef.current.getBoundingClientRect()
		let {clientX, clientY} = event
		let deltaX = clientX - x - 5
		let deltaY = clientY - y - 5
		this.setState({
			active: true,
			deltaX,
			deltaY
		})
	}

	animationEnd() {
		this.setState({
			active: false
		})
	}

	render() {
		return (
			<button ref={this.myRef} className='button2' onClick={this.rippleAnimation.bind(this)}>
				<span className="value">{this.props.value}</span>
				{
					this.state.active ?
						<span className='circle'
									onAnimationEnd={this.animationEnd.bind(this)}
									style={{left: this.state.deltaX, top: this.state.deltaY,}}/>
						: ''}
			</button>
		)
	}
}