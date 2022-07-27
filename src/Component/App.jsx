import React from "react";
import Header from "./Header";
import Content from "./Display";
import Enter from "./Enter";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      temp: [],
      // description: "",
    };
    this.handleChanges = this.handleChanges.bind(this);
  }

  handleChanges(newTask) {
    this.setState({ temp: [...this.state.temp, newTask] });
    console.log(this.state.temp);
  }
  handleRemove() {
    this.setState({ temp: !this.state.temp });
  }
  render() {
    return (
      <>
        <Header />
        <Enter
          handleData={this.handleChanges}
        />
        <Content important={this.state.temp} handleRemove={this.handleRemove} />
      </>
    );
  }
}

export  {App};
