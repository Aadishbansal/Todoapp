import React from "react";

class Data extends React.Component {
  constructor(props) {
    super(props);
    this.handleDescriptionChange.bind(this);
    this.finalSubmit.bind(this);
    this.state = {
      temp: "",
    };
  }
  //   this.state = {
  // title: "",
  // title: "",
  // description: "",
  // }
  // }
  // inputHandleChangeTitle(e) {
  //   this.props.({
  //     title: e.target.value,
  //   });
  // }
  // inputHandleChangeDescription(e) {
  //   this.setState({
  //     description: e.target.value,
  //   });
  // }
  //
  // handleChange() {
  //   console.log("this is the ", this.props.title);
  // }

  // handleTitleChange(e) {
  //   this.setState({ title: e.target.value });
  //   console.log(this.state.title);
  // }

  // onDataChange(){

  // }
  // oNsubmit() {
  //   console.log(this.state.title);
  // }

  handleDescriptionChange = (e) => {
    this.setState({ temp: e.target.value });
    console.log(this.state.temp);
  };
  finalSubmit = () => {
    this.props.onDataChange(this.state.temp);
  };

  render() {
    // const handleTitleChange = (e) => {
    //   const name = e.target.name;
    //   const value = e.target.value;
    //   this.setState((name, value) => ({ name: value }));
    //   console.log(this.state.title);
    // };
    return (
      <>
        <div className="container-lg">
          {/* Decsription */}
          <div className="form-floating mb-3">
            <input
              type="text"
              name="description"
              className="form-control"
              id=""
              value={this.props.task}
              onChange={(e) => this.handleDescriptionChange(e)}
              placeholder="Enter description to complete"
            />
            <label htmlFor="floatingInput">Description</label>
          </div>
          <button
            type="button"
            // onClick={this.oNsubmit}
            onClick={this.finalSubmit}
            className="btn btn-dark"
          >
            Add
          </button>
          {/* Title */}
          {/* <div className="form-floating mb-3">
            <input
              type="text"
              // name="title"
              className="form-control"
              id=""
              value={this.state.title}
              onChange={(e) => this.handleTitleChange(e)}
              placeholder="Enter task to complete"
            />
            <label htmlFor="floatingInput">Title</label>
          </div> */}
        </div>
      </>
    );
  }
}
export default Data;
