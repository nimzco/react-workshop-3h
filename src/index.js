import React from 'react';
import ReactDOM from 'react-dom';
import WorkshopBoilerplate from 'react-workshop-solutions';
import "react-workshop-solutions/styles.css";

// You can ignore this file and jump to the `1 - Events & State` folder

const routes = [
  {id: 'events-state', label: '1 - Events & State', component: require('./1-Events-set-state').default, showSolution: true},
  {id: 'lifecycle-mount', label: '2 - Data fetching', component: require('./2-Data-fetching').default, showSolution: true},
  {id: 'refs', label: '3 - Refs', component: require('./3-Refs').default, showSolution: true},
  {id: 'refs-2', label: '4 - Communicating between components', component: require('./4-Component-communication').default},
  {id: 'forms', label: '5 - Forms', component: require('./5-Forms').default, showSolution: true},
  {id: 'ts', label: '6 - TypeScript + React', component: require('./6-TypeScript').default},
  {id: 'higher-order-components', label: '7 - Higher-order Components', component: require('./7-Higher-order-components').default},
];

ReactDOM.render(
  <WorkshopBoilerplate routes={routes} />,
  document.getElementById("root")
);
