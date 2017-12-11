// -------------------------------------------------------------------------- //
// Prop Types
// -------------------------------------------------------------------------- //

import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    const { firstName, lastName } = this.props;
    return (
      <div>
        Hello {firstName}, {lastName}
      </div>
    );
  }
}

ReactDOM.render(<App firstName={true} />, document.getElementById("root"));
