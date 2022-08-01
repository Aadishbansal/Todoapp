import React from "react";
import { Display } from "./Display";
class Data extends React.Component {
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
handleEditData=()=>{
  console.log("first")
}
  render() {
    // console.log("Enter");
    return (
      <>
      
        <div className="container-lg my-4">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
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
        {/* <Display/>   */}
      </>
      
    );
  }
}
export default Data;
