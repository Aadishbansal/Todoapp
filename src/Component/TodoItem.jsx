// EDIT
import React from "react";
import Header from "./Header";
import { Display } from "./Display";
import Enter from "./Enter";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        {
          data: "a",
          check: false,
          checkDecoration: "btn-outline-primary",
          textDecoration: "",
          editAble: false,
        },
        {
          data: "b",
          check: false,
          checkDecoration: "btn-outline-primary",
          textDecoration: "",
          editAble: false,
        },
        {
          data: "c",
          check: false,
          checkDecoration: "btn-outline-primary",
          textDecoration: "",
          editAble: false,
        },
        {
          data: "d",
          check: false,
          checkDecoration: "btn-outline-primary",
          textDecoration: "",
          editAble: false,
        },
        {
          data: "e",
          check: false,
          checkDecoration: "btn-outline-primary",
          textDecoration: "",
          editAble: false,
        },
        {
          data: "f",
          check: false,
          checkDecoration: "btn-outline-primary",
          textDecoration: "",
          editAble: false,
        },
        {
          data: "g",
          check: false,
          checkDecoration: "btn-outline-primary",
          textDecoration: "",
          editAble: false,
        },
        {
          data: "h",
          check: false,
          checkDecoration: "btn-outline-primary",
          textDecoration: "",
          editAble: false,
        },
      ],
    };
  }

  handleAddTodo = (newTask) => {
    let newTodo = {
      data: newTask,
      check: false,
      checkDecoration: "btn-outline-primary",
      textDecoration: "",
      editAble: false,
    };

    this.setState({ todoList: [...this.state.todoList, newTodo] });
    console.log(this.state.todoList);
  };
  handleCheck = (e) => {
    const newTodoList = [];
    this.state.todoList.map((item) => {
      newTodoList.push(item);
    });
    newTodoList.map((item, index) => {
      if (index === e) {
        if (item.check === false) {
          item.check = true;
          item.textDecoration = "text-decoration-line-through";
          item.checkDecoration = "btn-primary";
        }
      }
    });
    this.setState({ todoList: newTodoList });
    // this.state.todoList.map((item, index) => {
    //   if (index === e) {
    //     if (item.check === false) {
    //       item.check = true;
    //     }
    //   }
    // });
    // console.log(this.state.todoList);
  };

  handleRemove = (e) => {
    // let newTodoList=this.state.todoList.map((item,index)=>{
    //   return index!==e
    // })
    const newTodoList = [];
    for (let index = 0; index < this.state.todoList.length; index++) {
      if (index !== e) {
        newTodoList.push(this.state.todoList[index]);
      }
    }
    this.setState({ todoList: newTodoList });
  };
  handleEdit = (e) => {
    const newTodoList = [];
    this.state.todoList.map((item) => {
      return newTodoList.push(item);
    });
    newTodoList.map((item, index) => {
      return index === e
        ? (item.editAble = !item.editAble) // ? (item.editAble = !item.editAble) && (item.textDecoration = "")
        : "";
    });
    this.setState({ todoList: newTodoList });
    console.log(this.state.todoList);
  };
  render() {
    return (
      <>
        <Header />
        <Enter handleData={this.handleAddTodo} />
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
