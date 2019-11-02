import React from 'react'
import { Input } from 'semantic-ui-react'

export default class SearchBar extends React.Component{
	render(){
		return(
			<div>
				<Input placeholder="search...." onChange={this.props.stateChange}/>
			</div>
		)
	}
}