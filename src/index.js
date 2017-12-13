import React from 'react';
import ReactDOM from 'react-dom';
import WorkshopBoilerplate from 'react-workshop-solutions';
import "react-workshop-solutions/styles.css";

const routes = [
  {id: 'introduction', label: '1 - Introduction', component: require('./1-Introduction').default},
  {id: 'events-state', label: '2 - Events set state', component: require('./2-Events-set-state').default, showSolution: true},
  {id: 'lifecycle-mount', label: '3 - Data fetching', component: require('./3-Data-fetching').default, showSolution: true},
  {id: 'lifecycle-unmount', label: '4 - Avoiding memory leaks', component: require('./4-Avoiding-memory-leaks').default, showSolution: true},
  {id: 'lists', label: '5 - Lists', component: require('./5-Lists').default, showSolution: true},
  {id: 'lifting-state-up', label: '6 - Lifting state up', component: require('./6-Lifting-state-up').default, showSolution: true},
  {id: 'refs', label: '7 - Refs', component: require('./7-Refs').default, showSolution: true},
  {id: 'forms', label: '8 - Forms', component: require('./8-Forms').default, showSolution: true},
];

ReactDOM.render(
  <WorkshopBoilerplate routes={routes} />,
  document.getElementById("root")
);
