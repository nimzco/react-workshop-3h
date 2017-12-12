import React from 'react';
import ReactDOM from 'react-dom';
import '@shopify/polaris/styles.css';
import './index.css';
import {Tabs, Page, Card} from '@shopify/polaris';

const ROUTES = {
  'Events & SetState': require('./Events-set-state').default,
  'Lifecycle methods 1': require('./Lifecycle-mount').default,
  'Lifecycle methods 2': require('./Lifecycle-unmount').default,
  'Lists': require('./Lists').default,
  'Lifting State Up': require('./6-lifting-state-up').default,
};

class App extends React.Component {
  state = {routeIndex: 0, selectedTab: 0}

  handleTabSelect = (tab) => {
    this.setState({
      selectedTab: tab,
    })
  }

  render() {
    const {routeIndex, selectedTab} = this.state;
    const Route = ROUTES[Object.keys(ROUTES)[routeIndex]];

    return (
      <Page>
        <div>
          <ul className="list">
            {Object.keys(ROUTES).map((name, index) => {
              return (
                <li
                  key={name}
                  className={routeIndex === index ? 'list__link list__link--active' : 'list__link'}
                >
                  <a onClick={() => this.setState({routeIndex: index})}>
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <Card>
          <Card.Section>
            <Tabs
              onSelect={this.handleTabSelect}
              selected={selectedTab}
              tabs={[
                {
                  id: 'exercise',
                  title: 'Exercise'
                },
                {
                  id: 'solution',
                  title: 'Solution'
                },
              ]}
            >
              <div className="tab-content">
                {selectedTab === 0 ? <Route /> : <SolutionRoute/>}
              </div>
            </Tabs>
          </Card.Section>
        </Card>
      </Page>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
)
