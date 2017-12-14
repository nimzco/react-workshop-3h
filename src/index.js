import React from 'react';
import ReactDOM from 'react-dom';
import WorkshopBoilerplate from 'react-workshop-solutions';
import "react-workshop-solutions/styles.css";

const routes = [
  {id: 'introduction', label: '1 - Introduction', component: require('./1-Introduction').default},
  {id: 'events-state', label: '2 - Events set state', component: require('./2-Events-set-state').default, showSolution: true},
  {id: 'lifecycle-mount', label: '3 - Data fetching', component: require('./3-Data-fetching').default, showSolution: true},
  {id: 'lists', label: '4 - Lists', component: require('./4-Lists').default, showSolution: true},
  {id: 'refs', label: '5 - Refs and the DOM', component: require('./5-Refs-and-the-dom').default, showSolution: true},
  {id: 'refs', label: '6 - Component Refs', component: require('./6-Component-refs').default},
  {id: 'lifting-state-up', label: '7 - Communicating between components', component: require('./7-Communicating-between-components').default, showSolution: true},
  {id: 'forms', label: '8 - Forms', component: require('./8-Forms').default, showSolution: true},
  {id: 'context', label: '9 - Context', component: require('./9-Context').default, showSolution: true},
  {id: 'context', label: '10 - Higher-order Components', component: require('./10-Higher-order-components').default},
];

ReactDOM.render(
  <WorkshopBoilerplate routes={routes} />,
  document.getElementById("root")
);
