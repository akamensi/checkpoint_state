import React from 'react';
import './App.css';
import Person from './Component/Person';

class App extends React.Component{
state = {
    person:{
      fullName:'Med',
      bio:'student',
      imgSrc:'https://gomycodelearndev.blob.core.windows.net/profiles/2a86c4b2-6556-4e47-aafd-9e1f7d6c64ec-133280115755574541.jpg',
      profession:'battal'
    },
    show : true
  }

  render(){
    return(
      <div >
        <h1>Hello World!</h1>
        <button id='ii' onClick={()=> this.setState({show:!this.state.show})}>{this.state.show ? 'Hide' : 'Show'}</button>
        {
          this.state.show && <Person person={this.state.person}/>
        }
        
      </div>
      
    )
  }
  
}



export default App;
