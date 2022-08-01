import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
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
  dataChanged = (e) => {
    this.setState({ task: e.target.value });
  };
  addTodo = () => {
    if (!this.state.task) {
      alert("task can't be empty");
    } else {
      const newTodo = {
        data: this.state.task,
        check: false,
        checkDecoration: "btn-outline-primary",
        textDecoration: "",
        editAble: false,
      };

      this.setState({ todoList: [...this.state.todoList, newTodo], task: "" });
      console.log(this.state.todoList);
    }
  };
  render() {
    return (
      <>
        {/* Entery Point  */}
        <div class="position-absolute top-50 start-50 translate-middle border-4 border p-2">
          <div className="container border-4 border p-3  d-flex">
            <div className="form-floating">
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
              onClick={this.addTodo}
              className="btn btn-dark"
            >
              Add
            </button>
          </div>
        </div>

        {/* Display  */}
      </>
    );
  }
}

export default Todo;
