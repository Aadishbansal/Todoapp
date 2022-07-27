import React from "react";
class display extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temp: props.important };
    // this.removeItem = this.removeItem.bind(this);
  }
  // removeItem(e) {
  //   this.setState({
  //     temp: this.state.temp.filter((item) => {
  //       item == !e;
  //     }),
  //   });
  // this.setState({temp:temp.filter(x)})
  // console.log(this.props.temp);
  // console.log(this.props.important);
  // this.props.handleRemove();
  // }
  cheCk = () => {
    console.log(this.state.temp);
  };
  render() {
    // const Title = <h5 className="card-title">{this.props.title}</h5>;
    // const Description = <p className="card-text">{this.props.description}</p>;
    // let x = thi s.props.task;
    // const main=
    // const show=` {this.state.temp.length > 0 ?<div className="card w-75">
    //       <div className="card-body"><p className="card-text">{this.props.task}</p>  <button className="btn btn-primary">Remove</button>
    //       </div>
    //     </div> :""}`

    return (
      <div className="container">
        {/* <button onClick={this.cheCk}>this is check</button> */}
        {this.props.important.length > 0
          ? this.props.important.map((item) => (
              <div className="card w-75">
                <div className="card-body">
                  <p className="card-text">{item}</p>
                  <button className="btn btn-primary" onClick={this.removeItem}>
                    Remove
                  </button>
                </div>
              </div>
            ))
          : ""}
      </div>
    );
  }
}
export default display;
