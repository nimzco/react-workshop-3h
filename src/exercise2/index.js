// -------------------------------------------------------------------------- //
// Creating a component
// -------------------------------------------------------------------------- //

import React from 'react';
import ReactDOM from 'react-dom';

class LeWorkshop extends React.Component {
  render() {
    const {nbAttendees} = this.props;

    return (
      <div>
        LeWorkshop has {nbAttendees} attendees
      </div>
    )
  }
}

ReactDOM.render(
  <LeWorkshop nbAttendees={20}/>,
  document.getElementById("root")
);
