// -------------------------------------------------------------------------- //
// Events & setState
// -------------------------------------------------------------------------- //
// Exercice
//   - When the user clicks on `+1`, increment the `clickCount`
//   - When the user clicks on `Reset` resets the `clickCount`
//   - Bonus: When the click counts is > 10, show a special message

import React from 'react';

export default class Counter extends React.Component {
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

