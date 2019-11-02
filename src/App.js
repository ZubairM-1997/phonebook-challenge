import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactsList from './ContactsList'


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






  render(){

    return(
      <div>
        <ContactsList contacts={this.state.contacts}/>
      </div>

    )
  }
}

export default App;
