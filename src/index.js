import React from 'react';
import ReactDOM from 'react-dom';
import WorkshopBoilerplate from 'react-workshop-solutions';
import "react-workshop-solutions/styles.css";

const routes = [
  {id: 'introduction', label: 'Introduction', component: require('./Introduction').default},
  {id: 'events-state', label: 'Events & SetState', component: require('./Events-set-state').default, showSolution: true},
  {id: 'lifecycle-mount', label: 'Lifecycle methods 1', component: require('./Lifecycle-mount').default, showSolution: true},
  {id: 'lifecycle-unmount', label: 'Lifecycle methods 2', component: require('./Lifecycle-unmount').default, showSolution: true},
  {id: 'lists', label: 'Lists', component: require('./Lists').default, showSolution: true},
  {id: 'refs', label: 'Using Refs', component: require('./Refs').default, showSolution: true},
  {id: 'lifting-state-up', label: 'Lifting State Up', component: require('./Lifting-state-up').default, showSolution: true},
  {id: 'forms', label: 'Forms', component: require('./Forms').default, showSolution: true},
];

ReactDOM.render(
  <WorkshopBoilerplate routes={routes} />,
  document.getElementById("root")
);
