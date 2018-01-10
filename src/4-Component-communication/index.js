// ------------------------------------------------------------------- //
//  Communicating between components
// ------------------------------------------------------------------- //
//  In the example below, we're relying on component refs to trigger
//  visibility updates on our modal. While component refs can be useful
//  in certain situations, they should not be used to imperatively
//  "make things happen" in your app.
//
//  Instructions:
// • Convert the code below to use props to control the visibility of
//   the Modal component instead of relying on component refs.
// • You will need to lift the visibility state up in order to be
//   able to pass it down as a prop to the Modal component
//
//  Objectives:
// • Recognize why relying on component refs to imperatively trigger
//   updates in your app is an anti-pattern (and which pattern to use instead)
// • Use the `children` prop in React for rendering elements embedded
//   within the JSX tags of a custom component

import React from "react";

export default class App extends React.Component {
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
