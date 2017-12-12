import React from 'react';
import ReactDOM from 'react-dom';
import '@shopify/polaris/styles.css';
import './index.css';
import {Tabs, Page, Card, Select} from '@shopify/polaris';

const ROUTES = {
  'Events & SetState': require('./Events-set-state').default,
  'Lifecycle methods 1': require('./Lifecycle-mount').default,
  'Lifecycle methods 2': require('./Lifecycle-unmount').default,
  'Lists': require('./Lists').default,
  'Lifting State Up': require('./Lifting-state-up').default,
};

class App extends React.Component {
  state = {routeIndex: 'Events & SetState', selectedTab: 0}

  handleTabSelect = (tab) => {
    this.setState({
      selectedTab: tab,
    })
  }

  render() {
    const {routeIndex, selectedTab} = this.state;
    const Route = ROUTES[routeIndex];

    return (
      <Page>
        <div>
          <Select
            label="Exercises"
            value={routeIndex}
            options={Object.keys(ROUTES)}
            placeholder="Select"
            onChange={(index) => this.setState({routeIndex: index})}
          />
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
                {selectedTab === 0 ? <Route /> : null}
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
