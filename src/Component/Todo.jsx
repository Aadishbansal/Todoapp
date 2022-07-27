import { Component } from "react";
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      todolist: [],
    };
  }
  handleChange = (e) => {
    this.setState({ task: e.target.value });
    // console.log("task: "+this.state.task+"\ntodolist: "+this.state.todolist);
  };
  addTodo = () => {
    this.setState({
      todolist: [...this.state.todolist, this.state.task],
      task: "",
    });
    console.log(this.state.todolist);

  };
  removeTodo = (e) => {
    const newTodoList=[]
    for(let i = 0; i < this.state.todolist.length; i++) {
      if (this.state.todolist[i] !== e){
        newTodoList.push(this.state.todolist[i]);
      } 
    }
    this.setState({todolist:newTodoList})
  }
  // console.log(e);
// let newTodoList=this.state.todolist.filter((item)=>{
//   return item!==e
// })
// console.log(newTodoList);

  render() {
    return (
      <div>
        <h1>Todo list</h1>
        <input
          type="text"
          placeholder={this.props.placeholder}
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button onClick={this.addTodo} style={{borderWidth:'0px'}}>Add task</button>

        <div>
          {this.state.todolist.length > 0
            ? this.state.todolist.map((item) => {
                return (
                  <div  key={item}>
                    <h2 
                    //  style={{borderBottom: '1px solid purple'}}
                    >{item}
                    </h2>
                    <button style={{borderRadius:'20%',borderWidth:'0px'}} onClick={()=>this.removeTodo(item)}>Remove</button>
                    <hr />

                  </div>
                );
              })
            : "All tasks are completed"}
        </div>
      </div>
    );
  }
}
export { Todo };
