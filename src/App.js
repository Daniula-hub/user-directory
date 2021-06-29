import logo from './logo.svg';
import './App.css';
import React from 'react';
import data from './data';
import Person from './Person';
import Button from './Button'



class App extends React.Component{
constructor(){
  super()

  this.state = { 
      peopleArr: data,
      eachPerson: 0,
  }
}

changePerson(direction){
  if (direction === 'previous'){
    this.setState({ eachPerson: this.state.eachPerson - 1 })
  } else if (direction === 'next'){
    this.setState({ eachPerson: this.state.eachPerson + 1})
  }
}

  render(){
    return (
    <div className="App">

     <Person person={this.state.peopleArr[this.state.eachPerson]} />

    
     <Button buttonTitle='< Previous' handleClick={() => this.changePerson('previous')} />
     <div className="middleButtons">
     <Button  buttonTitle='Edit' handleClick={() => this.changePerson('previous')} />
     <Button  buttonTitle='New' handleClick={() => this.changePerson('previous')} />
     <Button buttonTitle='Delete' handleClick={() => this.changePerson('previous')} />
     </div>

     <Button buttonTitle='Next  >' handleClick={() => this.changePerson('next')} />
     </div>
    );
  }
}

export default App;
