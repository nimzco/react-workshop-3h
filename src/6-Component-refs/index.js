// ------------------------------------------------------------------- //
//  Refs and components
// ------------------------------------------------------------------- //
//  Objectives:
// • Use refs to access the underlying component instances
// • Recognize why relying on component refs to imperatively trigger
//   updates in our app is an anti-pattern
//
//  Secondary objectives:
// • Use the `children` prop in React for rendering elements embedded
//   within the JSX tags of a custom component
//
//  In the example below, we're relying on component refs to trigger
//  uvisibility pdates on our modal. This is an anti-pattern.
//
//  Instructions:
// • Convert the code below to rely on state and props to toggle
//   updates in our app instead of relying on imperative ref methods

import React from "react";

export default class Exercise extends React.Component {
  registerModalRef = (instance) => {
    // If you're curious, you can inspect the instance in the console
    console.log(instance);

    this.modal = instance;
  }

  showModal = () => {
    this.modal.show();
  }

  hideModal = () => {
    this.modal.hide();
  }

  render() {
    return (
      <div>
        <button onClick={this.showModal}>Show Modal</button>

        <Modal ref={this.registerModalRef}>
          <p>This is the content of the modal!</p>
          <button onClick={this.hideModal}>Hide Modal</button>
        </Modal>
      </div>
    );
  }
}

class Modal extends React.Component {
  state = {
    visible: false,
  };

  show() {
    this.setState({visible: true});
  }

  hide() {
    this.setState({visible: false});
  }

  render() {
    const {children} = this.props;
    const {visible} = this.state;

    return visible ? (
      <div class="modal">
        {children}
      </div>
    ) : null;
  }
}
