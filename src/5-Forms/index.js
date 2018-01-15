// ------------------------------------------------------------------- //
//  Forms
// ------------------------------------------------------------------- //
//  Objectives:
// • Manage forms by using event listeners and component state
// • Identify the difference between controlled and uncontrolled inputs

import React from "react";

export default class FormExercise extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <PrettyPrint value={this.state} />

        <form>
          <input type="text" name="title" placeholder="Title" />
          <textarea name="description" placeholder="description" />
          <small>Number of characters remaining: 100</small>
          <input type="number" name="price" placeholder="Price" min={0} />
          <label><input type="checkbox" name="taxable"/> Taxable</label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

// You also create React Components using functions
// instead of classes if they don't have any state.
function PrettyPrint(props) {
  return (
    <code>
      {JSON.stringify(props.value, null, 2)}
    </code>
  );
}
