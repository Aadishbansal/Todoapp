// EDIT
import React from "react";
import Header from "./Header";
import { Display } from "./Display";
// import { GrUpdate, GrAdd } from "react-icons/gr";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      update: false,
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
          data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Q",
          check: false,
          editAble: false,
        },
        {
          id: 3,
          data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae deleniti alias cupiditate vel placeat est. Placeat hice",
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
    if (!this.state.task) {
      alert("task can't be empty");
    } else if (this.state.update === true) {
      // if (Object.keys(e).length === 4) {
      // this.setState({ task: e.data });
      console.log("object");
      const newTodoList = [...this.state.todoList];
      newTodoList.map((item) => {
        return (item.id = e.id
          ? ((item.editAble = !item.editAble),
            this.setState({ task: item.data }))
          : "");
      });
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
      this.setState({ todoList: [...this.state.todoList, newTodo], task: "" });
    }
  };
  handleCheck = (e) => {
    const newTodoList = [...this.state.todoList];
    newTodoList.map((item, index) => {
      return index === e && !item.editAble ? (item.check = true) : "";
    });
    this.setState({ todoList: newTodoList });
    // return index === e && !item.editAble && !item.check
  };

  handleRemove = (e) => {
    const newTodoList = [];
    this.state.todoList.map((item) => {
      return item.id !== e ? newTodoList.push(item) : "";
    });

    this.setState({ todoList: newTodoList });
  };
  handleEdit = (e) => {
    const newTodoList = [...this.state.todoList];
    newTodoList.map((item) => {
      return item.id === e.id
        ? ((item.editAble = !item.editAble),
          this.setState({ task: item.data, update: true }))
        : "";
    });
    this.setState({ todoList: newTodoList });
  };
  render() {
    const input = (
      <div className=" mt-4 mx-auto " style={{ width: "25em" }}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your task"
            value={this.state.task}
            onChange={this.dataChanged}
            aria-label="Enter your task"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-secondary text-white"
            type="button"
            id="button-addon2"
            onClick={this.handleAddTodo}
          >
            {
              this.state.update ? "Update" : "Add"
              /* <GrUpdate style={{ textColor: "white" }} />
              <GrAdd />*/
            }
          </button>
        </div>
      </div>
    );
    return (
      <>
        <Header />
        {input}
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
