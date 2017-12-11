import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

class SayHello extends React.Component {
  static propTypes = {
    firstName: PropTypes.string
  };

  render() {
    const { firstName } = this.props;
    return <div>Hello {firstName}</div>;
  }
}

// class SayHello extends React.Component {
//   static propTypes = {
//     firstName(props, propName, componentName) {
//       if (typeof props[propName] !== "string") {
//         return Error(`prop: ${propName} needs to be a string`);
//       }
//     }
//   };

//   render() {
//     const { firstName } = this.props;
//     return <div>Hello {firstName}</div>;
//   }
// }

ReactDOM.render(<SayHello firstName={true} />, document.getElementById("root"));
