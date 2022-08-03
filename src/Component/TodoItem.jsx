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
        // {
        //   id: 0,
        //   data: "a",
        //   check: false,
        // },
        // {
        //   id: 1,
        //   data: "b",
        //   check: false,
        // },
        // {
        //   id: 2,
        //   data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Q",
        //   check: false,
        // },
        // {
        //   id: 3,
        //   data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae deleniti alias cupiditate vel placeat est. Placeat hice",
        //   check: false,
        // },
      ],
    };
  }
  dataChanged = (e) => {
    this.setState({ task: e.target.value });
  };
  handleAddTodo = () => {
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
      };
      this.setState({
        todoList: [...this.state.todoList, newTodo],
        task: "",
        update: false,
      });
      console.log(this.state.todoList);
    }
  };
  handleCheck = (id) => {
    const newTodoList = [...this.state.todoList];
    newTodoList.map((item) => {
      return item.id === id ? (item.check = true) : "";
    });
    this.setState({ todoList: newTodoList });
    console.log(this.state.todoList);
  };

  handleRemove = (id) => {
    const newTodoList = this.state.todoList.filter((item) => {
      return item.id !== id;
    });

    this.setState({ todoList: newTodoList }); 
  };
  handleEdit = (id) => {
    const newTodoList = this.state.todoList.filter((item) => item.id !== id);
    const selected = this.state.todoList.find((item) => {
      return item.id === id;
    });
    this.setState({
      task: selected.data,
      update: true,
      todoList: newTodoList,
    });
    // newTodoList.map((item) => {
    //   return item.id === e.id
    //     ? ((item.editAble = !item.editAble),
    //       // this.setState({ task: item.data, update: true }))
    //       this.setState({ task: item.data, update: true }))
    //     : "";
    // });
    // this.setState({ todoList: newTodoList });
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
