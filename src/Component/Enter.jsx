import React from "react";
class Data extends React.Component {
  // const temp = "data";
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };
  }
  dataChanged = (e) => {
    this.setState({ task: e.target.value });
  };
  finalChange = () => {
    if (!this.state.task) {
      alert("task can't be empty");
    } else {
      this.props.handleData(this.state.task);
      this.setState({ task: "" });
    }
  };

  render() {
    return (
      <>
        <div className="container-lg">
          {/* Decsription */}
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id=""
              value={this.state.task}
              onChange={this.dataChanged}
              placeholder="Enter Task to complete"
            />
            <label htmlFor="floatingInput">Enter your task</label>
          </div>
          <button
            type="button"
            onClick={this.finalChange}
            className="btn btn-dark"
          >
            Add
          </button>
        </div>
      </>
    );
  }
}
export default Data;
