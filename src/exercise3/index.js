// -------------------------------------------------------------------------- //
// Events & setState
// -------------------------------------------------------------------------- //

import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
  state = {
    clickCount: 0,
  };

  render() {
    const {clickCount} = this.state;

    return (
      <div>
        <h1>Clicked: {clickCount} times</h1>
        <button>+1</button>
        <button>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('root'));
