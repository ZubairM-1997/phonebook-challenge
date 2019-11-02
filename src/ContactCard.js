import React from 'react'

export default class ContactCard extends React.Component{
	render(){
		return(
			<div>
				<h1>{this.props.name}</h1>
				<li>{this.props.number}</li>
				<li>{this.props.address}</li>
			</div>
		)
	}
}