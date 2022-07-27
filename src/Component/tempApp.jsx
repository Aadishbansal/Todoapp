// import './App.css';
import React from "react";
import Header from "./Component/Header.js";
import Content from "./Component/Display";
import Enter from "./Component/Enter.js";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
    };
    this.onDataChange.bind(this);
  }
  // onDataChange(t,d) {
  //   this.setState({ title: t, description:d });
  // }
  onDataChange = (newDescription) => {
    this.setState({ description: newDescription });
    console.log(this.state.description);
  };
  render() {
    return (
      <>
        <Header />
        <Enter
          task={this.state.description}
          // title={this.state.title}
          // onDataChange={() => this.onDataChange()}
          // description={this.state.description}
          onDataChange={this.onDataChange}
        />
        <Content
        // title={this.state.title}
        // description={this.state.description}
        />
      </>
    );
  }
}

export default App;
