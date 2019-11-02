import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactsList from './ContactsList'
import CheckBox from './CheckBox'


class App extends React.Component{

  state = {
    contacts: []
  }

  componentDidMount(){
    return fetch('http://www.mocky.io/v2/581335f71000004204abaf83')
            .then(resp => resp.json())
            .then(data => this.setState({
              contacts: data.contacts
              } , () => {
                console.log(this.state.contacts)
              }
            )
          )

  }

  handleStateChange = (event) => {

    let sortedData = this.state.contacts
    sortedData.sort((a,b) => a.name.localeCompare(b.name))
    this.setState({
      contacts: sortedData
    })

  }




  render(){




    return(
      <div>
        <CheckBox stateChange={this.handleStateChange}/>
        <ContactsList contacts={this.state.contacts}/>
      </div>

    )
  }
}

export default App;
