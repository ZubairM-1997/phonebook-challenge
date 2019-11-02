import React from 'react'
import ContactCard from './ContactCard'
import SearchBar from './SearchBar'




export default class ContactsList extends React.Component{

	state = {
		searchTerm: ""
	}

	changeSearchTerm = (event) => {
		this.setState({
			searchTerm: event.target.value
		})
	}





	render(){




		return(
			<div>

				<SearchBar stateChange={this.changeSearchTerm}/>
				{
					this.props.contacts
						.filter(contact => contact.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
						.map(contact =>
							<ContactCard name={contact.name}
							number={contact.phone_number}
							address={contact.address}
							/>
					)
				}
			</div>

		)
	}
}