import React from 'react'
import { Checkbox } from 'semantic-ui-react'


export default class CheckBox extends React.Component{
	render(){
		return(
			<Checkbox label="Sort Alphabetically"
			onChange={this.props.stateChange}/>
		)
	}
}