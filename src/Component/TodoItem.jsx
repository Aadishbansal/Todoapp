import React from "react";
import { Display } from "./Display";
// import { GrUpdate, GrAdd } from "react-icons/gr";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      update: false,
      tempid: "",
      task: "",
      todoList: [],
    };
  }
  dataChanged = (e) => {
    this.setState({ task: e.target.value });
  };
  handleAddTodo = (e) => {
    e.preventDefault();

    if (!this.state.task) {
      alert("task can't be empty");
    } else if (this.state.update) {
      const newTodo = {
        id: this.state.tempid,
        data: this.state.task,
        check: false,
      };
      const tempTodoList = [...this.state.todoList, newTodo];
      const tempTodoListS = tempTodoList.sort((a, b) => {
        return a.id - b.id;
      });
      this.setState({
        todoList: tempTodoListS,
        task: "",
        tempid: "",
        update: false,
      });
    } else {
      let id;
      this.state.todoList.length === 0
        ? (id = 0)
        : (id = this.state.todoList[this.state.todoList.length - 1].id + 1);
      // : (id = this.state.todoList[this.state.todoList.length - 1].id + 1);
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
    }
  };
  handleClear = () => {
    this.state.todoList.length === 0
      ? alert("List is already empty")
      : this.setState({ todoList: [] });
  };
  handleCheck = (id) => {
    const newTodoList = [...this.state.todoList];
    newTodoList.map((item) => {
      return item.id === id ? (item.check = true) : "";
    });
    this.setState({ todoList: newTodoList });
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
      tempid: selected.id,
      todoList: newTodoList,
    });
  };
  componentDidMount() {
    const isLocalStorage = localStorage.getItem("state");
    if (isLocalStorage) {
      const newData = JSON.parse(isLocalStorage);
      this.setState({
        ...newData,
      });
    }
  }
  componentDidUpdate() {
    localStorage.setItem("state", JSON.stringify(this.state));
  }
  render() {
    const input = (
      <>
        <h3 className=" text-center my-3 text-white ">Todoapp</h3>
        <div className="container-fluid">
          <div className="row  justify-content-center">
            <div className="col-10 col-lg-6">
              {" "}
              <form
                action=""
                className="input-group mb-3"
                onSubmit={this.handleAddTodo}
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your task"
                  value={this.state.task}
                  onChange={this.dataChanged}
                  aria-label="Enter your task"
                />
                <button
                  className="btn btn-outline-secondary text-white"
                  type="button"
                  onClick={this.handleAddTodo}
                >
                  {
                    this.state.update ? "Update" : "Add"
                    //  ( <GrUpdate color="white" />
                    // ) : (
                    //   <GrAdd color="white" /> )
                  }
                </button>
                <button
                  className="btn btn-danger text-white btn-outline-secondary"
                  type="button"
                  onClick={this.handleClear}
                >
                  Clear
                </button>
              </form>
            </div>
            {/* <div className=" col-10 col-lg-6 mt-4 mx-auto ">
              <form
                action=""
                className="input-group mb-3"
                onSubmit={this.handleAddTodo}
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your task"
                  value={this.state.task}
                  onChange={this.dataChanged}
                  aria-label="Enter your task"
                />
                <button
                  className="btn btn-outline-secondary text-white"
                  type="button"
                  onClick={this.handleAddTodo}
                >
                  {
                    this.state.update ? "Update" : "Add"
                    //  ( <GrUpdate color="white" />
                    // ) : (
                    //   <GrAdd color="white" /> )
                  }
                </button>
                <button
                  className="btn btn-danger text-white btn-outline-secondary"
                  type="button"
                  onClick={this.handleClear}
                >
                  Clear
                </button>
              </form>
            </div> */}
          </div>
        </div>
      </>
    );
    return (
      <>
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
