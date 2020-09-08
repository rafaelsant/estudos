import React,{Component} from 'react';

import Table from '../Tables/Tables'
import Form from "../Form/Form"

class App extends Component{
    state = {
        characters : [
          {
            name: 'Charlie',
            job: 'janitor',
          },
          {
            name: 'Mac',
            job: 'Bouncer',
          },
          {
            name: 'Dee',
            job: 'Aspiring actress',
          },
          {
            name: 'Dannis',
            job: 'bartender',
          },
        ],
    }
    removeCharacter = (index) => {
      const {characters} = this.state
    
      this.setState({
        characters: characters.filter((character, i) => {
          return i !== index
        }),
      })
    }
    handleSubmit =(character)=>{
      this.setState({characters:[...this.state.characters,character]})
    }
  render() {
    const {characters} = this.state
    
    return(
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter}/>
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}
 
  export default App;