import React, { Component } from "react";
 import "./App.css";
 import shortid from "shortid";
 class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      newItem : "",
      list: []
    }
  }
  updateInput(key, value){
    // update react state
    this.setState({
    [key]:value,
    })
  }
  addItem(){
    //create item with unique id
    const newItem={
      id: shortid.generate(),
      value: this.state.newItem.slice()
    }
    // copy of current list of items
    const list = [...this.state.list];
    // add new item to list
    list.push(newItem);
    // update staet with new list and reset newItem input
    this.setState({
      list,
      newItem:""
    })
  }
  deleteItem(id){
    const list = [...this.state.list];
    const updateList = list.filter(item => item.id !== id);
    this.setState({list:updateList});
  }
  strikethrough(id){
    const list = [...this.state.list];
    const updateList = [];
    for(let i=0;i<list.length;i++){
      if(list[i].id === id){
        list[i]= list[i].classList.add('lineThrough');
        updateList.push(list[i]);
      }
      else
        updateList.push(list[i]);
    }
    this.setState({list:updateList});
  }
  render(){
  return(
    <div className="App">
      <div className="container">
      <h2  className="app-title">To-do-List</h2>
    <div className="input-field">
    <input
    className="input-box"
    type="text"
    placeholder="Type an item here..."
    value={this.state.newItem}
    onChange={e => this.updateInput("newItem", e.target.value)}
    />
    <button
     className="add-btn btn-floating"
     onClick={() => this.addItem()}
     disabled={!this.state.newItem.length} > <i class="material-icons"> Add </i></button>
  </div><br />
  <ol className="todos">
    {this.state.list.map(item => {
      return(
        <li key={item.id} className="mytodo">
          <span
         className='todotext'
          >{item.value}</span>
          <button className="btn btn-floating" onClick={()=> this.strikethrough(item.id)}><i class="material-icons">strike it</i></button>
          <button className="btn btn-floating" onClick={()=> this.deleteItem(item.id)}><i class="material-icons">done</i></button>
        </li>
      )
    })}
  </ol>
  </div>
      </div>
    );
 }
 }
 export default App;