// EDIT
import React from "react";
import Header from "./Header";
import { Display } from "./Display";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      todoList: [
        {
          id: 0,
          data: "a",
          check: false,
          editAble: false,
        },
        {
          id: 1,
          data: "b",
          check: false,
          editAble: false,
        },
        {
          id: 2,
          data: "c",
          check: false,
          editAble: false,
        },
        {
          id: 3,
          data: "d",
          check: false,
          editAble: false,
        },
      ],
    };
  }
  dataChanged = (e) => {
    this.setState({ task: e.target.value });
  };
  handleAddTodo = (e) => {
    console.log(e);
    if (!this.state.task) {
      alert("task can't be empty");
    } else {
      let id;
      this.state.todoList.length === 0
        ? (id = 0)
        : (id = this.state.todoList[this.state.todoList.length - 1].id + 1);
      const newTodo = {
        id: id,
        data: this.state.task,
        check: false,
        editAble: false,
      };
      // this.state.todoList.map((item) => {
      //   return;
      // });
      this.setState({ todoList: [...this.state.todoList, newTodo], task: "" });
    }
  };
  handleCheck = (e) => {
    const newTodoList = [...this.state.todoList];
    // this.state.todoList.map((item) => newTodoList.push(item));
    newTodoList.map((item, index) => {
      return index === e && !item.editAble ? (item.check = !item.check) : "";
    });
    this.setState({ todoList: newTodoList });
    // return index === e && !item.editAble && !item.check
  };

  handleRemove = (e) => {
    const newTodoList = [];
    for (let index = 0; index < this.state.todoList.length; index++) {
      if (index !== e) {
        newTodoList.push(this.state.todoList[index]);
      }
    }
    this.setState({ todoList: newTodoList });
  };
  handleEdit = (e) => {
    const newTodoList = [...this.state.todoList];
    newTodoList.map((item, index) => {
      return index === e && !item.check
        ? ((item.editAble = !item.editAble), this.setState({ task: item.data }))
        : "";
    });
    // console.log(x  );
    this.setState({ todoList: newTodoList });
  };
  render() {
    return (
      <>
        <Header />
        {/* Enter */}
        <div className="container-lg mt-4 my-2 w-50">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              value={this.state.task}
              onChange={this.dataChanged}
              placeholder="Enter Task to complete"
            />
            <label>Enter your task</label>
          </div>
          <button
            type="button"
            onClick={this.handleAddTodo}
            className="btn btn-dark"
          >
            Add
          </button>
        </div>
        <Display
          todoList={this.state.todoList}
          handleTaskRemove={this.handleRemove}
          handleCheck={this.handleCheck}
          handleEdit={this.handleEdit}
        />
      </>
    );
  }
}

export { TodoItem };
