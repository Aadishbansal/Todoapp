import React from "react";

let render=0;
export default class Temp extends React.Component {
  constructor(props) {
    super(props);
    // state initialization
    this.state = {
      todo: "",
      todoList: [],
    };
  }

  handleTodoValue = (event) => {
    this.setState({
      todo: event.target.value,
    });
  };

  handleAddTodo = () => {
    this.setState({
      todoList: [...this.state.todoList, this.state.todo],
      todo: "",
    });
  };

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <input
          type={"text"}
          placeholder={this.props.placeholder}
          value={this.state.todo}
          onChange={this.handleTodoValue}
        />
        <button style={{ marginLeft: "10px" }} onClick={this.handleAddTodo}>
          Add Todo
        </button>

        {this.state.todoList.length > 0
          ? this.state.todoList.map((todo) => {
            
              console.log("hey "+render++ +" t "+todo);
            return(

              <div style={{ margin: "20px" }}>
                <h4>{todo}</h4>
              </div>
  
            )
   })
          : null}
      </div>
    );
  }
}