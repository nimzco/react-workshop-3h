// ------------------------------------------------------------------- //
//  Forms
// ------------------------------------------------------------------- //
//  Objectives:
// • Manage forms by using event listeners and component state
// • Identify the difference between controlled and uncontrolled inputs


import React from "react";

export default class Solution extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <code>
          {JSON.stringify(this.state)}
        </code>

        <input type="text" name="company" placeholder="Company" />
        <input type="text" name="name" placeholder="Name" />
        <textarea name="message" placeholder="message" />
        <small>Number of characters remaining: ?</small>
      </div>
    );
  }
}
