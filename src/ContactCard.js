import React from 'react'

export default class ContactCard extends React.Component{
	render(){
		return(
			<div>
				<h1>{this.props.name}</h1>
				<li>Number: {this.props.number}</li>
				<li>Address: {this.props.address}</li>
			</div>
		)
	}
}