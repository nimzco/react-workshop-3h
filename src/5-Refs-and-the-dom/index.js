// ------------------------------------------------------------------- //
//  Refs and the DOM
// ------------------------------------------------------------------- //
//  Objectives:
// • Use refs to access the underlying DOM nodes created by React
//
//  Instructions:
// • Store a reference to the input's DOM node
// • Add an event handler to focus the input when the button is clicked

import React from "react";

export default class Exercise extends React.Component {
  render() {
    return (
      <div>
        <input />
        <button>Focus input</button>
      </div>
    );
  }
}
