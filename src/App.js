import React, { Component } from 'react';
import './App.css';
import Fruit from './Fruit'
class App extends Component {

state = {
  fruits:[],
  fruitObj:{
    name:'',
    key:''
  }
}

addFruit = (event) => {
  event.preventDefault();
  
  const fruitItem = this.state.fruitObj;
  //console.log("Fruit name is",fruitItem.name);
  const data = fruitItem.name.split("-");
  
  if (data[0] !== "" && data[1] !== "") 
  {
      if (fruitItem.name !== "") 
      {
        const fruits = [...this.state.fruits, fruitItem];
        this.setState({ fruits: fruits, fruitObj: { name: "" } });
        // console.log(fruits);
      }
  } else 
  {
    alert("Values cannot be null");
  }
  };

changeHandler=(event)=>{
this.setState({
  fruitObj:{
    name: event.target.value,
    key: Date.now()
  }
})
}

deleteHandler=(key)=>{
  const filteredfruits= this.state.fruits.filter(i => i.key!==key);
  this.setState
  ({
    fruits: filteredfruits
  })
}

render(){
return (
  <div className="container">
      <div className="wrap">
        <form  onSubmit={this.addFruit}>
          <input type="text" placeholder="Enter Fruit eg.abcd-10" 
              value={this.state.fruitObj.name} onChange={this.changeHandler}/>
          <button className="addButton" type="submit">Submit</button>
        </form>
      <Fruit items={this.state.fruits} deleteHandler={this.deleteHandler}/>
      </div>
  </div>
    );
  }
}

export default App;