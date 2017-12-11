// -------------------------------------------------------------------------- //
// Ex. 3 Lifecycle methods
// -------------------------------------------------------------------------- //

import React from "react";
import ReactDOM from "react-dom";
import Timer from "./Timer.solution";

class App extends React.Component {
  state = { showTimer: false };
  toggleShow = () => {
    this.setState({
      showTimer: !this.state.showTimer
    });
  };
  render() {
    const { showTimer } = this.state;
    return (
      <div>
        <label>Show Timer</label>
        <input type="checkbox" onChange={this.toggleShow} checked={showTimer} />
        {showTimer ? <Timer /> : null}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
