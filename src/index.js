import React from 'react';
import ReactDOM from 'react-dom';
import WorkshopBoilerplate from 'react-workshop-solutions';
import "react-workshop-solutions/styles.css";

const routes = [
  {id: 'introduction', label: '0 - Introduction', component: require('./0-Introduction').default},
  {id: 'events-state', label: '1 - Events set state', component: require('./1-Events-set-state').default, showSolution: true},
  {id: 'lifecycle-mount', label: '2 - Data fetching', component: require('./2-Data-fetching').default, showSolution: true},
  {id: 'refs', label: '3 - Refs and the DOM', component: require('./3-Refs-and-the-dom').default, showSolution: true},
  {id: 'refs-2', label: '4 - Component Refs', component: require('./4-Component-refs').default},
  {id: 'lifting-state-up', label: '5 - Communicating between components', component: require('./5-Component-communication').default, showSolution: true},
  {id: 'forms', label: '6 - Forms', component: require('./6-Forms').default, showSolution: true},
  {id: 'context', label: '7 - Context', component: require('./7-Context').default, showSolution: true},
  {id: 'higher-order-components', label: '8 - Higher-order Components', component: require('./8-Higher-order-components').default},
];

ReactDOM.render(
  <WorkshopBoilerplate routes={routes} />,
  document.getElementById("root")
);
