import React from 'react';
import ReactDOM from 'react-dom';
import WorkshopBoilerplate from 'react-workshop-solutions';
import "react-workshop-solutions/styles.css";

const routes = [
  {id: 'introduction', label: '0 - Introduction', component: require('./0-Introduction').default},
  {id: 'events-state', label: '1 - Events set state', component: require('./1-Events-set-state').default, showSolution: true},
  {id: 'lifecycle-mount', label: '2 - Data fetching', component: require('./2-Data-fetching').default, showSolution: true},
  {id: 'lists', label: '3 - Lists', component: require('./3-Lists').default, showSolution: true},
  {id: 'refs', label: '4 - Refs and the DOM', component: require('./4-Refs-and-the-dom').default, showSolution: true},
  {id: 'refs', label: '5 - Component Refs', component: require('./5-Component-refs').default},
  {id: 'lifting-state-up', label: '6 - Communicating between components', component: require('./6-Component-communication').default, showSolution: true},
  {id: 'forms', label: '7 - Forms', component: require('./7-Forms').default, showSolution: true},
  {id: 'context', label: '8 - Context', component: require('./8-Context').default, showSolution: true},
  {id: 'higher-order-components', label: '9 - Higher-order Components', component: require('./9-Higher-order-components').default},
];

ReactDOM.render(
  <WorkshopBoilerplate routes={routes} />,
  document.getElementById("root")
);
